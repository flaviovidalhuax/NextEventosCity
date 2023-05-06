import { FC } from 'react';

interface IPresentation {
  name: string;
}

export const Presentation: FC<IPresentation> = ({ name }) => {
  //name es category id
  const separador = name?.split(' ');
  console.log(separador);
  //['Marcas','y', 'Eventos]

  return (
    <div>
      <div
        className={`min-h-[320px] flex justify-center flex-col bg-[url('/${separador[0]}.png')] bg-cover bg-center app-banner -mt-4 gap-5 md:pl-[10rem]`}
      >
        <div className="p-5">
          <p className="text-white text-lg mb-5 font-medium">
            Home / {separador[0]}
          </p>
          <h1 className="text-app-yellow text-5xl font-bold">{name}</h1>
          <p className="text-white text-lg font-medium mt-3">
            Descubre los {name} que la gente quiere cerca
          </p>
        </div>
      </div>
    </div>
  );
};
