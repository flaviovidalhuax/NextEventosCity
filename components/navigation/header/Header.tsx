import Link from 'next/link';
import { useUserMe } from '../../../lib/services/auth.service';
import Dropdown2 from '../../Dropdown/Dropdown2';
import { IconLogo } from '../../assets/logo/IconLogo';
import HeartHome from '../../assets/svg/HeartHome';
import Plus from '../../assets/svg/Plus';
import UserIcon from '../../assets/svg/UserIcon';

const Header = () => {
  const { data: userData, error } = useUserMe();

  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[71px] text-sm">
      <div>
        <Link href={'/'}>
          <IconLogo />
        </Link>
      </div>
      <div>
        {userData && !error ? (
          <div className="flex gap-20">
            <div className="hidden min-[1024px]:flex gap-4 items-center">
              <div>
                <Plus />
              </div>
              <div className="text-app-blue">
                <Link href={'/createPublication'}>Crear publicación</Link>
              </div>
            </div>
            <div className="hidden min-[1024px]:flex gap-4 items-center">
              <div>
                <HeartHome />
              </div>
              <div>
                <Link href={'/profile'}>Mis votos</Link>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center max-w-[234px]">
              <div className="bg-black rounded-full px-[5px] py-[5px] border-[2px]">
                <UserIcon />
              </div>
              <div>{userData.email}</div>
              <div>
                <Dropdown2 />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 ml-1 sm:gap-9">
            <div className="flex gap-2 items-center">
              <div>
                <Plus />
              </div>
              <div className="text-app-blue">
                <Link href={'/createPublication'}>Crear publicación</Link>
              </div>
            </div>
            <div>
              <Link href={'/sign-up/'}>Log In</Link>
            </div>
            <div>
              <Link href={'/sign-up/create'}>Sign Up</Link>
            </div>
          </div>
        )}
        {/*  */}
      </div>
    </div>
  );
};

export default Header;
