import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { BaseItemProps } from '@components/types/slider';
import { CompilationItem } from '../types/film';

import s from './CategoryCard.module.scss';

export interface CategoryCardProps extends BaseItemProps {
  data: CompilationItem;
}

const IMAGE_PATH = '/images/interesting/';

const CategoryCard: FC<CategoryCardProps> = ({ data, className }) => {
  const { name, image } = data;

  const containerClassNames = [s.cardContainer];
  className && containerClassNames.push(className);

  return (
    <Link className={containerClassNames.join(' ')} href="#">
      <div className={s.title}>{name}</div>
      <div className={s.card}>
        <Image src={IMAGE_PATH + image} width={285} height={135} alt="" />
      </div>
    </Link>
  );
};

export default CategoryCard;
