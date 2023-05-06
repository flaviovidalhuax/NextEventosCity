import Image from 'next/image';
import Link from 'next/link';
import { PublicationPost } from '../../../lib/interfaces/publications.interface';
import {
  usePublications,
  votePublications,
} from '../../../lib/services/publications.services';
import { Heart } from '../../assets/svg/Heart';
import UserIcon from '../../assets/svg/UserIcon';

const Cart = ({
  title,
  description,
  reference_link,
  votes_count,
  images,
  id,
}: // isVoted,
PublicationPost) => {
  const { mutate: mutatePublications } = usePublications();

  const handleClick = () => {
    console.log(id);

    votePublications(id);
    mutatePublications();

    console.log(id);
    console.log(votes_count);
  };
  return (
    <div className="bg-white rounded-3xl flex flex-col drop-shadow-xl w-[325px] ">
      <div className="relative h-[300px]">
        <Image
          className="w-full h-full object-cover"
          src={images[0]?.image_url ? images[0]?.image_url : '/nothing.png'}
          width={500}
          height={500}
          alt=""
        />

        <Heart
          className="absolute right-2 top-[85%] w-10 sm:w-[47px] cursor-pointer"
          // isActive={isVoted}
          onClick={handleClick}
        />
      </div>
      <div className="relative w-full h-[262px]">
        <div className="p-5 h-[166px]">
          <Link href={`/detail/${title}`}>
            <h2 className="title-3 pb-2">{title}</h2>
          </Link>
          <p className="overflow-hidden text-app-grayDark h-[72px]">
            {description}
          </p>
        </div>
        <div className="p-5 w-full">
          <p className="text-app-blue font-medium mb-2">{reference_link}</p>
          <div className="flex gap-3 ">
            <UserIcon color="black" />
            <span className="font-medium">{votes_count} votos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
