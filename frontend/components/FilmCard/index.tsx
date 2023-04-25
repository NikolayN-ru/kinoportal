import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { CollectionFilm } from '../types/film';
import FilmCardTools from './FilmCardTools';
import Rating from './Rating/Rating';

import s from './FilmCard.module.scss';

interface FilmCardProps {
  data: CollectionFilm;
  className: string;
}

const IMAGE_PATH = '/images/';

const FilmCard: FC<FilmCardProps> = ({ data, className }) => {
  const { name, genre, year, country, rating, age, image, seasons, link } = data;

  const containerClassNames = [s.cardContainer];
  className && containerClassNames.push(className);

  return (
    <Link className={containerClassNames.join(' ')} href={`watch/${link}`}>
      <div className={s.title}>{name}</div>

      <div className={s.card}>
        <div className={s.poster}>
          <Image src={IMAGE_PATH + image} width={153} height={235} alt="" />
          <div className={s.ageLabel}>{age}+</div>
        </div>

        <div className={s.info}>
          <FilmCardTools className={s.tools} />
          <div className={s.infoProperties}>
            <Rating className={s.rating} value={rating} />
            <div className={s.infoRow}>{`${year}, ${country}, ${genre}`}</div>
            <div className={s.infoRow}>{seasons} сезонов</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
