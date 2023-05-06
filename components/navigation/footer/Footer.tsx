import { Search } from '../../Presentation/Search';

export function Footer() {
  return (
    <div>
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/footer-banner.png")] bg-cover bg-center app-banner -mt-4'>
        <Search />
      </div>
    </div>
  );
}
