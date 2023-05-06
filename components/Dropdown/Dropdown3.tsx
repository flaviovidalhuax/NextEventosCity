import { useState } from 'react';
import More from '../assets/svg/More';

const Dropdown3 = () => {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="relative h-[30px]">
      <button onClick={handleClick} className="bg-none">
        <More />
      </button>
      {open && (
        <ul className="bg-white absolute shadow-mlg right-2 overflow-hidden p-2 shadow-2xl z-50">
          <li className="px-4 py-2 cursor-pointer flex gap-4">
            <a className="text-app-grayDark subtitle-2">
              Artistas y Conciertos
            </a>
          </li>
          <li className="px-4 py-2 cursor-pointer flex gap-4">
            <a className="text-app-grayDark subtitle-2">Torneos</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown3;
