import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { PromoItemType } from '../Promo';

import s from './PromoItem.module.scss';

interface PromoItemProps {
  className?: string;
  data: PromoItemType;
}

const IMAGE_PATH = '/images/';

const PromoItem: FC<PromoItemProps> = ({ className, data }) => {
  const { name, image, link } = data;

  const containerClassNames = [s.container];
  className && containerClassNames.push(className);

  return (
    <Link href={`/watch/${link}`} className={containerClassNames.join(' ')}>
      <Image src={IMAGE_PATH + image} alt={name} width={1216} height={370} />
    </Link>
  );
};

export default PromoItem;
