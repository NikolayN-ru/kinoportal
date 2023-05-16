import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { CollectionFilm } from '@components/types/film';
import FilmCardTools from './FilmCardTools';
import Rating from './Rating';
import BadgeAge from '@components/BadgeAge';
import { declensionOfNum } from 'utils';
import BadgeFilm from '@components/BadgeFilm';

import s from './FilmCard.module.scss';
import { BaseItemProps } from '@components/types/slider';

import s from "./FilmCard.module.scss";

export interface FilmCardProps extends BaseItemProps {
  data: CollectionFilm;
  className: string;
}

const IMAGE_PATH = '/images/';
const SEASONS_FORMS = ['сезон', 'сезона', 'сезонов'];

const FilmCard: FC<FilmCardProps> = ({ data, className }) => {
  const { name, genre, year, country, rating, age, image, seasons, link } =
    data;

  const containerClassNames = [s.cardContainer];
  className && containerClassNames.push(className);

  return (
    <Link className={containerClassNames.join(" ")} href={`watch/${link}`}>
      <div className={s.title}>{name}</div>

      <div className={s.card}>
        <BadgeFilm className={s.filmBadge} option={{ text: 'эксклюзив', color: 'blue' }} />
        <div className={s.poster}>
          <Image src={IMAGE_PATH + image} width={153} height={235} alt="" />
          <BadgeAge className={s.ageBadge} value={age} />
        </div>

        <div className={s.info}>
          <FilmCardTools className={s.tools} />
          <div className={s.infoProperties}>
            <Rating className={s.rating} value={rating} />
            <div className={s.infoRow}>{`${year}, ${country}, ${genre}`}</div>
            <div className={s.infoRow}>
              {seasons} {declensionOfNum(seasons, SEASONS_FORMS)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
