import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Like from '../assets/svg/Like';
import X from '../assets/svg/X';

const FindCount = () => {
  type FormValues = {
    email: string;
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    // createUser(data)
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div
      className="flex  flex-col items-center justify-center  sm:p-20  max-w-[580px]  m-[20rem] mx-auto
                      bg-app-form border-solid border-2 border-app-gray rounded-3xl p-10 relative
      "
    >
      <span className="border-2 rounded-full border-app-yellow p-2 absolute top-4 right-4 ">
        <X />
      </span>
      <div className="w-full text-left flex flex-col gap-8 m-3">
        <div>
          <h1 className="text-[32px] font-medium text-white">
            Encontremos tu cuenta
          </h1>
          <p className="text-white">
            {' '}
            Para restablecer tu contraseña, escribe tu correo electronico que
            puedes haber utilizado con Para Cuándo?{' '}
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <label className="flex flex-col gap-1  rounded-2xl relative">
            <span className="font-semibold ">Email</span>
            <input
              className="p-4 border border-app-grayDark rounded-2xl bg-app-form"
              type="text"
              placeholder="ejemplo@gmail.com"
              {...register('email')}
            />
            <span className="flex flex-row absolute top-12 right-4">
              <Like />{' '}
            </span>
          </label>
          <button className="bg-app-yellow p-4 border border-app-grayDark rounded-2xl">
            Cambiar contraseña
          </button>
          <span className="text-center app-subtitle-2 pt-2 text-white">
            <Link href="/" className="text-app-yellow">
              O volver a iniciar secion
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default FindCount;
