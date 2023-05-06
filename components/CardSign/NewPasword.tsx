import Cookies from 'js-cookie';
import Router from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../../lib/helpers/axios.helper.';
import X from '../assets/svg/X';

const NewPassword = () => {
  type FormValues = {
    password0: string;
    password1: string;
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      password0: '',
      password1: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    Login(data);
    // createUser(data)
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const URL = '/auth/change-password';
  const [datos, setDatos] = useState({});

  const Login = (data: FormValues) => {
    axios
      .post(URL, data)
      .then((res) => {
        setDatos(res.data.token);
        Cookies.set('token', res.data);
        Router.push('/');
      })
      .catch((err) => console.log(err));
  };
  console.log(datos);

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
            Elige nueva contraseña
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <label className="flex flex-col relative ">
            <span className="font-semibold text-white">
              Elige nueva contraseña
            </span>
            <input
              className="p-4 border border-app-grayDark rounded-2xl text-white bg-app-form"
              type="password"
              {...register('password0')}
            />
            <span className="flex flex-row gap-2 absolute top-12 right-4">
              {/* <Eyes /> <Warning />{' '} */}
            </span>
          </label>

          <label className="flex flex-col relative ">
            <span className="font-semibold text-white">escribelo denuevo</span>
            <input
              className="p-4 border border-app-grayDark rounded-2xl text-white bg-app-form"
              type="password"
              {...register('password1')}
            />
            <span className="flex flex-row gap-2 absolute top-12 right-4">
              {/* <Eyes /> <Warning />{' '} */}
            </span>
          </label>
          <button className="bg-app-yellow p-4 border border-app-grayDark rounded-2xl">
            Cambiar contraseña
          </button>
          <span className="text-center app-subtitle-2 pt-2 text-white">
            La contraseña debe tener mayusculas, minusculas y numeros.
          </span>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
