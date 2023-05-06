import Image from 'next/image';
import Link from 'next/link';
import { Heart } from '../../assets/svg/Heart';
import UserIcon from '../../assets/svg/UserIcon';

interface ICart {
  titulo: string;
  descripcion: string;
  link: string;
  votos: number;
  image: string;
}

const Cart2 = ({ titulo, descripcion, link, votos, image }: ICart) => {
  return (
    <div className="bg-white rounded-3xl flex flex-row drop-shadow-xl max-w-[934px] max-h-[300px]">
      <div className="relative basis-[40%]">
        <Image
          src={image ? image : '/nothing.png'}
          className="w-full rounded-3xl object-cover h-full"
          alt="cart image"
          width="700"
          height="700"
        />
      </div>
      <div className="relative w-full basis-[60%]">
        <Heart
          className="absolute right-0 top-0 w-10 sm:w-[47px] lg:mt-[20px] lg:mr-[10px]"
          isActive={true}
        />
        <div className="p-5">
          <Link href={`/detail/${titulo}`}>
            <h2 className="title-3 pb-2 pt-6">{titulo}</h2>
          </Link>
          <p className="h-[72px] overflow-hidden text-app-grayDark">
            {descripcion}
          </p>
        </div>
        <div className="p-5 w-full">
          <p className="text-app-blue font-medium mb-2">{link}</p>
          <div className="flex gap-3 ">
            <UserIcon color="black" />
            <span className="font-medium">{votos} votos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart2;
