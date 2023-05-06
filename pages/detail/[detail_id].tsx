import Image from 'next/image';
import { useRouter } from 'next/router';
import Likes from '../../components/Likes/Likes';
import { SearchCategory } from '../../components/Presentation/SearchCategory';
import UserIcon from '../../components/assets/svg/UserIcon';
import { Layout } from '../../components/layout/Layout';
import { usePublications } from '../../lib/services/publications.services';
import { NextPageWithLayout } from '../page';

export const DetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { detail_id } = router.query;
  const { data: publicationResponseAll } = usePublications({});
  console.log({ publicationResponseAll });
  const publicationsAll = publicationResponseAll?.results;
  const object = publicationsAll?.find((event) => event.title == detail_id);
  console.log(object);
  return (
    <div>
      <SearchCategory />
      <div className="pt-20 flex flex-col gap-6">
        <div className="w-full p-3 min-[1028px]:flex gap-6">
          <div className="basis-[40%] flex flex-col justify-between content-between">
            <div>
              <p>Artista / Pop / Rock</p>
              <h2 className="title-1 pb-2">{object?.title}</h2>
              <p className="overflow-hidden text-app-grayDark lg:h-[72px] mt-6 mb-11">
                {object?.description}
              </p>
              <div className="w-full">
                <p className="text-app-blue font-medium mb-2">
                  {object?.reference_link}
                </p>
                <div className="flex gap-3 ">
                  <UserIcon color="black" />
                  <span className="font-medium">
                    {object?.votes_count} votos
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden min-[1028px]:block">
              <button className="bg-app-blue text-app-grayLighter w-full px-[15px] py-[19px] rounded-full subtitle-2 mt-5">
                Votar
              </button>
            </div>
          </div>

          <div className="basis-[45%] mt-5 min-[1028px]:mt-0">
            {object && (
              <Image
                src={
                  object?.images[0]?.image_url
                    ? object?.images[0]?.image_url
                    : '/nothing.png'
                }
                className="w-full"
                alt="cart image"
                width="500"
                height="500"
              />
            )}
          </div>
          <div className="min-[1028px]:hidden">
            <button className="bg-app-blue text-app-grayLighter w-full px-[15px] py-[19px] rounded-full subtitle-2 mt-5">
              Votar
            </button>
          </div>
        </div>
        <div>
          <Likes />
        </div>
        <div className="mb-[114px]">
          {/* <EventSlider
            title="Recientes"
            subtitle="Las personas últimamente están hablando de esto"
            events={eventsMock}
          /> */}
        </div>
      </div>
    </div>
  );
};

DetailPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default DetailPage;
