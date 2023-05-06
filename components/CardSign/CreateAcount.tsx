import Link from 'next/link';
import { useForm } from 'react-hook-form';
import X from '../assets/svg/X';

const CreateAccount = () => {
  type FormValues = {
    // firstName: string;
    // lastName: string;
    // email: string;
    // userName: string;
    // password: string;
  };

  const { handleSubmit } = useForm({
    defaultValues: {
      // firstName: '',
      // lastName: '',
      // email: '',
      // userName: '',
      // password: '',
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
                      bg-app-form border-solid border-4 border-app-gray rounded-3xl p-10 relative
      "
    >
      <Link
        className="border-2 rounded-full border-app-yellow p-2 absolute top-4 right-4 cursor-pointer"
        href={'/'}
      >
        <X />
      </Link>
      <div className="w-full text-left flex flex-col gap-8 m-3">
        <div>
          <h1 className="text-[32px] font-medium text-white">
            Todos votamos :)
          </h1>
          <p className="text-white">
            {' '}
            Todos los votos son importantes aquí. Para validar el tuyo debes
            tener una cuenta.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <button className="bg-app-yellow p-4 border border-app-grayDark rounded-2xl">
            Sign Up
          </button>
          <span className="text-center app-subtitle-2 pt-2 text-app-yellow">
            inicia sesion
          </span>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
