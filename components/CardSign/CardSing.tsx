import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

import Link from 'next/link';
import { SignUp } from '../../lib/interfaces/user.interface';
import { UseCreateCount } from '../../lib/services/useCreatCount.services';
import Like from '../assets/svg/Like';
import Eyes from '../assets/svg/User/Eyes';
import Warning from '../assets/svg/Warning';
import X from '../assets/svg/X';
const CardSing = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: SignUp) => {
    UseCreateCount(data)
      .then((res) => {
        swal('Usuario creado!', 'click para continuar!', 'success');
        router.push('/sign-up');
        console.log(data);
        console.log(res);
      })
      .catch((err) => {
        swal('El usuario ya existe!', 'ok!', 'warning');
        reset();
        console.log(err);
      });
  };

  const [stateB, setstateB] = useState(false);
  const handleBotton = () => {
    stateB ? setstateB(false) : setstateB(true);
  };
  console.log(stateB);

  return (
    <div
      className="flex  flex-col items-center justify-center  p-10 max-w-[580px] mx-auto
                      bg-app-form border-solid border-4 border-app-gray rounded-3xl relative
      "
    >
      <Link
        className="border-2 rounded-full border-app-yellow p-2 absolute top-4 right-4 cursor-pointer "
        href={'/'}
      >
        <X />
      </Link>
      <div className="w-full text-left flex flex-col gap-8 ">
        <div>
          <h1 className="text-[32px] font-medium text-white">
            Todos Votamos :)
          </h1>
          <p className="text-white">Registrate para ingresar.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <label className="flex flex-col gap-1  rounded-2xl relative">
            <span className="font-semibold text-white ">Email</span>
            <input
              className="p-4 border text-white border-app-grayDark rounded-2xl bg-app-form"
              type="text"
              {...register('email')}
              placeholder="ejemplo@mail.com"
            />
            <span className="flex flex-row absolute top-12 right-4">
              <Like />{' '}
            </span>
          </label>
          <section className="flex flex-row gap-2">
            <label className="flex flex-col gap-1 basis-[50%]">
              <span className="font-semibold text-white ">Nombre</span>
              <input
                className="p-4 border text-white border-app-grayDark rounded-2xl bg-app-form"
                type="text"
                {...register('first_name')}
                placeholder="Erik"
              />
            </label>
            <label className="flex flex-col gap-1 basis-[50%] self-end w-full">
              <span className="font-semibold text-white">Apellido</span>
              <input
                className="p-4 border text-white border-app-grayDark rounded-2xl bg-app-form"
                type="text"
                {...register('last_name')}
                placeholder="Perez"
              />
            </label>
          </section>

          <label className="flex flex-col relative ">
            <span className="font-semibold text-white">Contraseña</span>
            <input
              className="p-4 border  border-app-grayDark rounded-2xl text-white bg-app-form"
              type={`${stateB ? 'text' : 'password'}`}
              {...register('password')}
            />
            <span className="flex flex-row gap-2 absolute top-12 right-4">
              <Eyes chage={handleBotton} stateB={stateB} /> <Warning />{' '}
            </span>
          </label>
          <div className="flex gap-2  text-app-grayLight mb-2">
            <span>•</span>
            <span className="text-center app-subtitle-2 ">
              La contraseña debe tener mayusculas, minusculas y numeros.
            </span>
          </div>
          <button className="bg-app-yellow p-4 border border-app-grayDark rounded-2xl">
            Crear cuenta
          </button>
          <p className="text-center">
            <span className="text-app-yellow border-app-yellow border-b-[1.5px] ">
              <Link href={'/sign-up'}>O inicia sesión aquí</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CardSing;
