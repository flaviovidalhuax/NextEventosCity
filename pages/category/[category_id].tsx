import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Dropdown from '../../components/Dropdown/Dropdown';
import SearchIcon from '../../components/assets/svg/SearchIcon';
import { Layout } from '../../components/layout/Layout';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { useCategories } from '../../lib/services/categories.services';
import { usePublications } from '../../lib/services/publications.services';
import { NextPageWithLayout } from '../page';

export const CategoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { category_id = 2 } = router.query;

  /*categories */
  const { data: categoryResponse } = useCategories();
  const categories = categoryResponse?.results;
  console.log(categories);
  const { data: publicationResponse } = usePublications({
    categoryId: `${category_id}`,
  });

  const publications = publicationResponse?.results;

  /*publications all */
  const { data: publicationResponseAll } = usePublications({});

  //['Marcas','y', 'Eventos]
  const publicationsAll = publicationResponseAll?.results;

  return (
    <div>
      <div>
        <div
          className={`min-h-[220px] flex justify-center flex-col relative bg-cover bg-center app-banner fondo -mt-4 gap-5 md:pl-[10rem]`}
        >
          <Image
            src={`/${
              categories
                ? categories[+category_id - 1]?.name.split(' ')[0]
                : 'nothing'
            }.png`}
            alt="nothing"
            className="absolute w-full h-full app-banner object-cover filter brightness-75"
            width={1300}
            height={200}
          />

          <div className="p-5 z-10">
            <p className="text-white text-lg mb-5 font-medium">
              Home /{' '}
              {categories
                ? categories[+category_id - 1]?.name.split(' ')[0]
                : 'nothing'}
            </p>
            <h1 className="text-app-yellow text-5xl font-bold">
              {categories ? categories[+category_id - 1]?.name : 'nothing'}
            </h1>
            <p className="text-white text-lg font-medium mt-3">
              Descubre los{' '}
              {categories
                ? categories[+category_id - 1]?.name.toLowerCase()
                : 'nothing'}{' '}
              que la gente quiere cerca
            </p>
          </div>
        </div>
      </div>
      <div>
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
        <div className="my-[114px]">
          <div className="mb-[114px]">
            <EventSlider
              title="Populares en Querétaro"
              subtitle="Lo que las personas piden más"
              events={publications}
            />
          </div>
          <div className="mb-[114px]">
            <EventSlider
              title="Sugerencias para ti"
              subtitle="Publicaciones que podrías colaborar"
              events={publicationsAll}
            />
          </div>
          <div className="mb-[114px]">
            <EventSlider
              title="Recientes"
              subtitle="Las personas últimamente están hablando de esto"
              events={publicationsAll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
