import SearchIcon from '../assets/svg/SearchIcon';

export function Search() {
  return (
    <div className="flex flex-row w-[300px] sm:w-[561px] text-[1rem]">
      <div className="basis-[90%]">
        <input
          className="border-app-gray border-y-2 border-l-2 h-full w-full pl-2 min-[300px]:pl-6 rounded-l-3xl"
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad?"
        />
      </div>
      <div className="flex border-app-gray rounded-r-3xl border-y-2 border-r-2 basis-[10%] justify-center items-center w-6 bg-white">
        <button className="p-3">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
