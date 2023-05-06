import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { Login } from '../../lib/interfaces/user.interface';
import { userLogin } from '../../lib/services/login.services';
import Like from '../assets/svg/Like';
import Eyes from '../assets/svg/User/Eyes';
import Warning from '../assets/svg/Warning';
import X from '../assets/svg/X';
// import {useLoginServices} from '../../lib/services/login.services'

const CardLogin = () => {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: Login) => {
    console.log(data);
    userLogin(data)
      .then((res) => {
        Cookies.set('token', res.data.token);
        swal('Good job!', 'You clicked the button!', 'success');
        router.push('/profile');
      })
      .catch((err) => {
        swal('fail!', 'You clicked the button!', 'warning');
        console.log(err);
        reset();
      });
  };

  /*EYES  */
  const [stateB, setStateB] = useState(false);
  const handleBotton = () => {
    if (stateB) {
      setStateB(false);
    } else {
      setStateB(true);
    }
  };
  console.log(stateB);

  return (
    <div
      className="flex  flex-col items-center justify-center  sm:p-14  max-w-[557px] mx-auto
                      bg-app-form border-solid border-2 border-app-gray rounded-3xl p-10 relative
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
          <h1 className="text-[32px] font-medium text-white">¡Hola!</h1>
          <p className="text-white">
            Inicie sesion con los datos que ingreso durante su registro
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <label className="flex flex-col gap-1  rounded-2xl relative">
            <span className="font-semibold text-white ">Email</span>
            <input
              className="p-4 border border-app-grayDark rounded-2xl bg-app-form text-white"
              type="email"
              {...register('email')}
              placeholder="ejemplo@mail.com"
            />
            <span className="flex flex-row absolute top-12 right-4">
              <Like />{' '}
            </span>
          </label>

          <label className="flex flex-col relative ">
            <span className="font-semibold text-white">Contraseña</span>
            <input
              className="p-4 border border-app-grayDark rounded-2xl text-white bg-app-form"
              type={`${stateB ? 'text' : 'password'}`}
              {...register('password')}
              // onClick={handleBotton}
            />
            <span className="flex flex-row gap-2 absolute top-12 right-4 text-app-yellow cursor-pointer">
              <Eyes chage={handleBotton} stateB={stateB} />
              <Warning />{' '}
            </span>
          </label>
          <div className="flex justify-center text-[white]">
            <p>
              ¿Olvidaste tu contraseña?{' '}
              <span className="text-app-yellow border-app-yellow border-b-[1.5px]">
                <Link href={'/sign-up'}>Recuperala aquí</Link>
              </span>
            </p>
          </div>

          <button className="bg-app-yellow p-4 border border-app-grayDark rounded-2xl">
            Iniciar sesión
          </button>
          <span className="text-center">
            <Link
              className="text-app-yellow border-app-yellow border-b-[1.5px]"
              href={'/sign-up/create'}
            >
              O crea una nueva cuenta
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default CardLogin;
