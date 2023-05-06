import Perfil from '../../components/assets/svg/Perfil';
import Plus from '../../components/assets/svg/Plus';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const ConfigPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col  w-full -mt-4 ">
      <div className=" bg-app-blue w-screen relative  h-[120px] flex justify-center xs:justify-start items-center app-banner bg-cover ">
        <div className="flex align-center relative ml-20 sm:ml-[8rem] xl:ml-[15rem]">
          <Perfil />
        </div>
      </div>
      <h2 className="m-[20px] text-app-black mx-auto my-[20px] min-[600px]:mx-[20px] mt-[4rem] title-2">
        Información de contacto
      </h2>
      <div className=" flex flex-col sm:flex-row xs:items-center justify-center  xs:flex-col sm:justify-start">
        <section className="flex flex-col items-center justify-center m-[20px] relative">
          <div className="flex items-center justify-center w-[150px] h-[150px] xs:w-[220px] xs:h-[206px] bg-app-grayLight rounded-2xl ">
            <Plus />
          </div>
          <p className="bg-gray px-1  font-[400] text-[#7D7D7D] mt-3">
            Agrega una foto para tu perfil
          </p>
        </section>
        <section className="flex flex-col items-center justify-start my-auto md:pl-8 lg:pl-[4rem]">
          <div className=" relative my-5  h-[50px] rounded-[11px]">
            <p className="absolute top-[-1rem] left-2 bg-white px-1  font-[400] text-[#7D7D7D]">
              Fist Name
            </p>

            <input
              className="w-[200px] sm:w-[340px] md:w-[640px] h-full border-[2px]  rounded-[11px] border-app-gray pl-4"
              type="text"
            ></input>
          </div>

          <div className=" relative my-5  h-[50px]  rounded-[11px]">
            <p className="absolute top-[-1rem] left-2 bg-white px-1  font-[400] text-[#7D7D7D]">
              Last Name
            </p>

            <input
              className="w-[200px] sm:w-[340px] md:w-[640px] h-full border-[2px]  rounded-[11px] border-app-gray pl-4 "
              type="text"
            ></input>
          </div>
        </section>
      </div>
      <h2 className=" flex relative mx-auto my-[20px] min-[600px]:mx-[20px] mb-[2rem] title-2">
        Mis Intereses
      </h2>
      <section className="flex items-center justify-center sm:flex-row sm:flex-wrap sm:justify-start  gap-5 flex-col xs:flex-col pl-4">
        <div className="flex flex-col items-center justify-center md:w-[calc(95%/3)]">
          <div className="flex items-center justify-center w-[150px] h-[150px] xs:w-[220px] xs:h-[206px] bg-app-grayLight rounded-2xl sm:w-full">
            <Plus />
          </div>
          <p className="bg-gray px-1  font-[400] text-[#7D7D7D] m-8">
            Añade una categoría
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:w-[calc(95%/3)]">
          <div className="flex items-center justify-center w-[150px] h-[150px] xs:w-[220px] xs:h-[206px] bg-app-grayLight rounded-2xl sm:w-full">
            <Plus />
          </div>
          <p className="bg-gray px-1  font-[400] text-[#7D7D7D] m-8">
            Añade una categoría
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:w-[calc(95%/3)]">
          <div className="flex items-center justify-center w-[150px] h-[150px] xs:w-[220px] xs:h-[206px] bg-app-grayLight rounded-2xl sm:w-full ">
            <Plus />
          </div>
          <p className="bg-gray px-1  font-[400] text-[#7D7D7D] m-8">
            Añade una categoría
          </p>
        </div>
      </section>
      <section className="flex flex-row items-center justify-center gap-3 mb-[86px]">
        <button className=" border-2 text-white py-[7.5px] px-[1rem] rounded-3xl bg-app-blue mt-3">
          Guardar cambios
        </button>
      </section>
    </div>
  );
};

export default ConfigPage;
ConfigPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
