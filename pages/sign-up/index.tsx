import Link from 'next/link';
import CardLogin from '../../components/CardSign/CardLogin';
import Logo from '../../components/assets/logo/Logo';

export default function SingUpPage() {
  return (
    <div className="grid w-full min-h-screen fondo">
      <div className="flex  flex-col p-auto   md:flex items-center justify-center min-[600px]:flex-row  ">
        <section className="flex justify-center self-center my-auto  pt-12 min-[600px]:basis-1/2 ">
          <Link href={'/'}>
            <Logo variant="yellow" onlyIcon={true} />
          </Link>
        </section>
        <section className="flex items-center justify-center my-auto min-[600px]:basis-1/2  mb-20 lg:mb-[7rem]">
          {/* <CardSing/> */}
          <CardLogin />
        </section>
      </div>
    </div>
  );
}
