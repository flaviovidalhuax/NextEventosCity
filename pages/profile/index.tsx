import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const ProfilePage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center relative -top-[20px]">
      <section className="bg-app-blue w-screen h-[120px] object-contain flex items-center justify-center relative">
        <div className='bg-[url("/prof.png")] h-[117px] w-[117px] rounded-full absolute top-[50%]'></div>
      </section>
      <section className="flex flex-row gap-[10px] m-8 mt-20">
        <button className="border-app-grayLight border-2 text-app-gray py-[7.5px] px-[1rem] rounded-3xl bg-white texto-1">
          Mis fotos
        </button>
        <button className="border-app-grayLight border-2 text-app-gray py-[7.5px] px-[1rem] rounded-3xl bg-white texto-1">
          Mis Publicaciones
        </button>
      </section>

      <section className=""></section>
    </div>
  );
};

export default ProfilePage;
ProfilePage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
