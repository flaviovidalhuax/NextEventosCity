import Link from 'next/link';
import { useCategories } from '../../lib/services/categories.services';
import Dropdown from '../Dropdown/Dropdown';
import SearchIcon from '../assets/svg/SearchIcon';

export function SearchCategory() {
  const { data: categoryResponse } = useCategories();
  const categories = categoryResponse?.results;
  return (
    <div className="h-[150px] flex justify-center items-center flex-row app-grayLighter bg-cover bg-center app-banner -mt-4 pb-20 shadow-md">
      <div className="m-3 mr-20 min-[1024px]:hidden mt-[2rem]">
        <Dropdown />
      </div>
      <div className="hidden min-[1024px]:flex flex-wrap items-center justify-center gap-2 pt-20 w-[50%]">
        {categories &&
          categories.map((category) => (
            <Link href={`/category/${category.id}`} key={category.id}>
              <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white subtitle-1">
                {category.name}
              </button>
            </Link>
          ))}
      </div>
      <div className="flex flex-row w-[300px] sm:w-[550px] mt-20 text-[15px]">
        <div className="basis-[90%]">
          <input
            className="border-app-gray border-y-2 border-l-2 h-full w-full pl-2 min-[300px]:pl-6 rounded-l-3xl"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />
        </div>
        <div className="flex border-app-gray rounded-r-3xl border-y-2 border-r-2 basis-[10%] justify-center items-center w-6">
          <Link href={'/search'}>
            <button className="p-3">
              <SearchIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
