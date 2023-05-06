import Link from 'next/link';

const Likes = () => {
  return (
    <div className="bg-app-grayLighter p-5 my-5">
      <h2 className="title-2 pb-2 text-app-grayDark">
        ¡Hagámoslo más personal!
      </h2>
      <p className="subtitle-2 pb-6 text-app-grayDark">
        Selecciona tus intereses para brindarte sugerencias de acuerdo a tus
        gustos
      </p>
      <div className="flex flex-wrap gap-2 pb-6">
        <Link href={'/category/Marcas y tiendas'}>
          <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white texto-1">
            Restaurantes
          </button>
        </Link>
        <Link href={'/category/Artistas y conciertos'}>
          <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white texto-1">
            Tiendas de ropa
          </button>
        </Link>
        <Link href={'/category/Torneos y eventos'}>
          <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white texto-1">
            Rock
          </button>
        </Link>
        <Link href={'/category/Torneos y eventos'}>
          <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white texto-1">
            Artistas mexicanos
          </button>
        </Link>
        <Link href={'/category/Torneos y eventos'}>
          <button className="border-app-grayLight border-2 text-app-gray py-[15.5px] px-[19px] rounded-3xl bg-white texto-1">
            Pop
          </button>
        </Link>
      </div>
      <a className="text-app-blue subtitle-2">Ver todos los intereses</a>
    </div>
  );
};

export default Likes;
