import { useState } from 'react';
import Dropdown3 from '../../components/Dropdown/Dropdown3';
import { Search } from '../../components/Presentation/Search';
import { Layout } from '../../components/layout/Layout';
import Cart2 from '../../components/sliders/Cart/Cart2';
import { usePublications } from '../../lib/services/publications.services';
import { NextPageWithLayout } from '../page';

const SearchPage: NextPageWithLayout = () => {
  const [categoryId, setCategoryId] = useState('');
  const { data: publicationResponse } = usePublications({
    categoryId: `${categoryId}`,
  });
  const publicationByType = publicationResponse?.results;

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option === selectedOption ? null : option);
  };
  return (
    <div>
      <div className="min-h-[108px] flex flex-row items-end bg-[url('/search-fondo.png')]  bg-cover bg-center app-banner -mt-4 gap-5 p-5 md:pl-[10rem]">
        <div>
          <p className="text-white text-lg mb-5 font-medium">Home / Búsqueda</p>
        </div>
      </div>
      <div className="shadow-md bg-cover mb-4 bg-center app-banner px-3 min-[1028px]:pl-20 pt-5 ">
        <div className="flex gap-3 pb-5 md:pl-[4rem] items-center justify-center min-[1028px]:justify-start mb-4">
          <Search />
          <div>
            <button className="hidden sm:block rounded-3xl px-5 py-3 bg-app-blue text-white self-center sm:w-[124px]">
              Buscar
            </button>
          </div>
        </div>
        <ul className="flex gap-[15px] sm:gap-10 lg:gap-20 items-end justify-center min-[1028px]:justify-start md:pl-[5rem]">
          <li
            className={`text-app-grayDark subtitle-2 max-w-[150px] cursor-pointer ${
              selectedOption === 'Option 0'
                ? 'border-b-app-blue border-b-[4px] '
                : ''
            }`}
            onClick={() => {
              setCategoryId(''), handleOptionClick('Option 0');
            }}
          >
            Todos los resultados
          </li>
          <li
            className={`cursor-pointer ${
              selectedOption === 'Option 1'
                ? 'border-b-app-blue border-b-[4px] '
                : ''
            } text-app-grayDark subtitle-2  cursor-pointer`}
            onClick={() => {
              setCategoryId('1'), handleOptionClick('Option 1');
            }}
          >
            Marcas y tiendas
          </li>
          <li
            className={`hidden sm:inline-block text-app-grayDark subtitle-2 ${
              selectedOption === 'Option 2'
                ? 'border-b-app-blue border-b-[4px] '
                : ''
            }  cursor-pointer`}
            onClick={() => {
              setCategoryId('2'), handleOptionClick('Option 2');
            }}
          >
            Artistas y conciertos
          </li>
          <li
            className={`hidden sm:inline-block text-app-grayDark subtitle-2  ${
              selectedOption === 'Option 3'
                ? 'border-b-app-blue border-b-[4px] '
                : ''
            } cursor-pointer`}
            onClick={() => {
              setCategoryId('3'), handleOptionClick('Option 3');
            }}
          >
            Torneos
          </li>
          <li className="self-end sm:hidden">
            <Dropdown3 />
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10 justify-center  items-stretch w-full my-8 lg:app-banner lg:ml-[10vw] py-6">
          {publicationByType?.map((event) => (
            <Cart2
              titulo={event.title}
              descripcion={event.description}
              image={event.images ? event.images[0]?.image_url : ''}
              votos={event.votes_count}
              link={event.reference_link}
              key={event.id}
            />
          ))}
        </div>

        <div className="self-center">1 2 3 4 5</div>
        <div className="mb-[114px] lg:ml-[-50px]">
          {/* <EventSlider
          title="Recientes"
          subtitle="Las personas últimamente están hablando de esto"
          events={publications}
        /> */}
        </div>
      </div>
    </div>
  );
};

SearchPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default SearchPage;
