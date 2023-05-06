import Link from 'next/link';
import CreatAcount from '../../components/CardSign/CreateAcount';
import Logo from '../../components/assets/logo/Logo';

export default function SingUpPage() {
  return (
    <div className="grid h-screen w-screen m-auto">
      <div className='flex  flex-col p-auto bg-[url("/login-banner.png")] md:flex items-center justify-center min-[600px]:flex-row  '>
        <section className="flex justify-center self-center my-auto  pt-12 min-[600px]:basis-1/2">
          <Link href={'/'}>
            <Logo variant="yellow" onlyIcon={true} />
          </Link>
        </section>
        <section className="flex items-center my-auto min-[600px]:basis-1/2">
          <CreatAcount />
        </section>
      </div>
    </div>
  );
}
