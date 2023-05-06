import Link from 'next/link';
import CardSing from '../../components/CardSign/CardSing';
import Logo from '../../components/assets/logo/Logo';

export default function Create() {
  return (
    <div className="grid w-full min-h-screen fondo">
      <div className="flex  flex-col p-auto  bg-[url(linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))] md:flex items-center justify-center min-[600px]:flex-row  ">
        <section className="flex justify-center self-center my-auto  pt-12 min-[600px]:basis-1/2 ">
          <Link href={'/'}>
            <Logo variant="yellow" onlyIcon={true} />
          </Link>
        </section>
        <section className="flex items-center justify-center my-auto min-[600px]:basis-1/2  mb-20 lg:mb-[7rem]">
          {/* <CardSing/> */}
          <CardSing />
        </section>
      </div>
    </div>
  );
}
