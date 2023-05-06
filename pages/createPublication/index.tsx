import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import Logo from '../../components/assets/logo/Logo';
import Plus from '../../components/assets/svg/Plus';
import { useCategories } from '../../lib/services/categories.services';
import {
  createPublications,
  postPublicationsImage,
} from '../../lib/services/publications.services';
import { useTags } from '../../lib/services/tags.services';

const Index = () => {
  /*consumo api */
  const { data: tagResponse } = useTags();
  const tags = tagResponse?.results;

  const { data: categoryResponse } = useCategories();
  const categories = categoryResponse?.results;

  type FormValues = {
    title: string;
    publication_type_id: string;
    content: string;
    description: string;
    reference_link: string;
    tags: string;
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      publication_type_id: '',
      content: '',
      description: '',
      reference_link: '',
      tags: '',
    },
  });
  const [publiId, setPubliId] = useState('');

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    createPublications(data)
      .then((res) => {
        swal('¡Buen trabajo!', '¡Publicación creada!', 'success');
        console.log(res.data);
        setPubliId(res.data.results.id);
        console.log(publiId);
        // console.log(res.data.results.id);
        functionBtnNext();
      })
      .catch((err) => {
        swal(
          '¡Ocurrió un error!',
          'Fijate si los datos son válidos',
          'warning'
        );
        console.log(err);
        reset();
      });
  };

  /*IMAGES */

  //part that is hidden-block
  const [percent, setPercent] = useState('50%');
  const [display1, setDisplay1] = useState('block');
  const [display2, setDisplay2] = useState('hidden');

  const router = useRouter();

  const functionBack = () => {
    router.push('/');
  };
  const functionBtnNext = () => {
    if (percent === '50%') {
      setPercent('100%');
      setDisplay1('hidden');
      setDisplay2('block');
    }
  };

  /*IMAGEN */
  interface IDataImg {
    img0: FileList;
    img1: FileList;
    img2: FileList;
  }

  const { register: register2, handleSubmit: handleSubmit2 } =
    useForm<IDataImg>();
  const onSubmit2 = handleSubmit2((data: IDataImg) => {
    const dataImg: IDataImg = {
      img0: data.img0,
      img1: data.img1,
      img2: data.img2,
    };
    OnAddImage(dataImg);
  });
  const OnAddImage = (dataImg: IDataImg) => {
    const formData = new FormData();
    formData.append('images', dataImg.img0[0]);
    formData.append('images', dataImg.img1[0]);
    formData.append('images', dataImg.img2[0]);

    postPublicationsImage(publiId, formData)
      .then((res) => {
        console.log(res.data),
          router.push('/'),
          swal(
            '¡Buen trabajo!',
            '¡Imagenes agregadas a la publicación!',
            'success'
          );
      })
      .catch((err) => {
        console.log(err),
          swal(
            '¡Ocurrió un error!',
            'Algo salió mal inténtalo nuevamente',
            'warning'
          );
      });
  };
  return (
    <div>
      <div className="flex flex-col min-[1028px]:flex-row w-full min-h-[100vh] overflow-hidden">
        <div className="bg-app-blue basis-[20%] flex flex-col gap-2 min-[1028px]:justify-around">
          <div className="self-center justify-self-center p-4 mb-0 pb-0">
            <Logo width={'150'} height={'150'} />
          </div>
          <div className="p-5 min-[1028px]:ml-3">
            <h2 className="title-3 text-app-yellow font-[500]">
              ¡Bienvenido Creador!
            </h2>
            <p className="text-white mt-4">
              A continuación puedes completar la info de la marca, artista o
              torneo que quieres cerca
            </p>
          </div>
          <div className="hidden min-[1028px]:flex ml-10">
            <p className="text-white font-[300]">Ayuda</p>
          </div>
        </div>
        <div className="basis-[80%] p-5 min-[1028px]:m-10 max-w-[800px]">
          <p
            className="pb-5 text-app-blue font-[500] text-[20px] cursor-pointer"
            onClick={functionBack}
          >
            Back
          </p>
          <div className="pb-10 w-full min-[1028px]:pl-20 mb-2">
            <div className="w-[100%] h-[10px] bg-app-grayDark relative rounded-3xl">
              <div
                className={`w-[${percent}] h-[10px] bg-app-blue absolute rounded-3xl`}
              ></div>
            </div>
          </div>
          {/*content */}
          <div className="flex">
            <form
              className={`min-[1028px]:pl-20 w-full ${display1}`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="title-2 pb-2">Publicación</h2>
              <p className="subtitle-2 text-app-grayDark mb-10">
                Información básica
              </p>
              <div className=" relative my-5  h-[50px] rounded-[11px]">
                <p className="absolute top-[-1rem] left-2 bg-white px-1  font-[400] text-[#7D7D7D]">
                  Titulo de la publicación
                </p>
                <input
                  className="w-full h-full border-[2px]  rounded-[11px] border-app-gray pl-4"
                  type="text"
                  {...register('title')}
                  required
                ></input>
              </div>
              <div className="min-[1028px]:flex justify-between">
                <div className=" relative my-5 rounded-[11px] min-[1028px]:w-[47%] ">
                  <select
                    id="pet-select"
                    className="flex justify-between items-center w-full h-[50px] border-[2px]  rounded-[11px] border-app-gray px-4  font-[400] text-[#7D7D7D]"
                    {...register('publication_type_id')}
                    required
                  >
                    <option value="">Tipos</option>
                    {categories &&
                      categories.map((element) => (
                        <option value={element.id} key={element.id}>
                          {element.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className=" relative my-5 rounded-[11px] min-[1028px]:w-[47%] ">
                  <select
                    id="pet-select"
                    className="flex justify-between items-center w-full h-[50px] border-[2px]  rounded-[11px] border-app-gray px-4  font-[400] text-[#7D7D7D]"
                    {...register('tags')}
                    required
                  >
                    <option value="">Categorias</option>
                    {tags &&
                      tags.map((element) => (
                        <option value={element.id} key={element.id}>
                          {element.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className=" relative my-5 rounded-[11px] mt-6">
                <p className="absolute top-[-1rem] left-2 bg-white px-1  font-[400] text-[#7D7D7D]">
                  ¿Por qué lo recomiendas?
                </p>
                <textarea
                  className="w-full flex flex-wrap border-[2px]  pt-1 rounded-[11px] border-app-gray pl-4 h-[116px]"
                  {...register('description')}
                  required
                ></textarea>
              </div>
              <div className=" relative my-5 mt-8  h-[50px] rounded-[11px]">
                <p className="absolute top-[-1rem] left-2 bg-white px-1  font-[400] text-[#7D7D7D]">
                  Link de la referencia
                </p>
                <input
                  className="w-full h-full border-[2px]  rounded-[11px] border-app-gray pl-4"
                  type="text"
                  {...register('reference_link')}
                  required
                ></input>
              </div>
              <div className="flex justify-center">
                <button className="sm:block rounded-3xl px-5 py-3 bg-app-blue text-white sm:w-[124px] min-[1028px]:mt-9">
                  Siguiente
                </button>
              </div>
            </form>
            <form
              className={`min-[1028px]:pl-20 w-full ${display2}`}
              onSubmit={onSubmit2}
            >
              <h1 className="title-2 pb-2">Fotos</h1>
              <p className="subtitle-2 text-app-grayDark mb-10">
                Selecciona máximo tres fotos para crear una galería
              </p>

              <div className="flex flex-wrap lg:grid-cols-3 gap-4 justify-center items-center  py-7 border-[1px] border-app-gray rounded-2xl">
                <div>
                  <input
                    type="file"
                    className="flex items-center justify-center w-[150px] h-[150px] xs:w-[200px] xs:h-[226px] bg-app-grayLight rounded-2xl "
                    {...register2('img0')}
                  ></input>
                  <Plus />
                </div>
                <div>
                  <input
                    type="file"
                    className="flex items-center justify-center w-[150px] h-[150px] xs:w-[200px] xs:h-[226px] bg-app-grayLight rounded-2xl "
                    {...register2('img1')}
                  ></input>
                  <Plus />
                </div>
                <div>
                  <input
                    type="file"
                    className="flex items-center justify-center w-[150px] h-[150px] xs:w-[200px] xs:h-[226px] bg-app-grayLight rounded-2xl "
                    {...register2('img2')}
                  ></input>
                  <Plus />
                </div>
              </div>
              <div className="flex justify-center items-center my-10 mt-20">
                <button className="sm:block rounded-3xl px-5 py-3 bg-app-blue text-white sm:w-[124px] min-[1028px]:mt-2">
                  Publicar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
