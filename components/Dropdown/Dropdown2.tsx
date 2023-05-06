import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useUserMe } from '../../lib/services/auth.service';
import Configuration from '../assets/svg/User/Configuration';
import DownIcon from '../assets/svg/User/DownIcon';
import LogOut from '../assets/svg/User/LogOut';

const Dropdown2 = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  const { mutate: userMutate } = useUserMe();
  const LogOutF = () => {
    Cookies.remove('token');
    userMutate();
    router.push('/');
  };

  return (
    <div className="relative w-8">
      <button
        onClick={handleClick}
        className="bg-none rounded-full shadow-lg p-3 mt-1"
      >
        <DownIcon />
      </button>
      {open && (
        <ul className="bg-white absolute shadow-mlg mt-4 right-2 overflow-hidden  z-50 p-2 rounded-lg">
          <li className="px-4 py-2 flex gap-4" onClick={handleClick}>
            <Configuration />
            <Link className="text-black cursor-pointer" href="/profile/config">
              Configuracion
            </Link>
          </li>
          <li className="px-4 py-2  flex gap-4" onClick={handleClick}>
            <LogOut />
            <Link
              className="text-black cursor-pointer"
              onClick={LogOutF}
              href={'/'}
            >
              Cerrar sesión
            </Link>
          </li>
          <div className="bg-app-gray w-50 h-[2px]"></div>
          <li
            className="px-4 py-2 cursor-pointer flex gap-4"
            onClick={handleClick}
          >
            <a className="text-app-grayDark">Ayuda y soporte</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown2;
