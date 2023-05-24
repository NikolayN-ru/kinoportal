import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { declensionOfNum } from "utils";
import { Actor } from "@components/types/actor";

import s from "./ActorCard.module.scss";

interface ActorCardProps {
  data: Actor;
}

const IMAGE_PATH = "/images/";
const FILMS_FORMS = ["фильм", "фильма", "фильмов"];

const ActorCard: FC<ActorCardProps> = ({ data }) => {
  const { name, surname, filmsCount, image } = data;

  return (
    <Link className={s.container} href="#">
      <div className={s.imageSection}>
        <div className={s.imageContainer}>
          <Image
            className={s.image}
            src={IMAGE_PATH + image}
            width={153}
            height={183}
            alt=""
          />
        </div>
        <div className={s.countBadge}>
          <div className={s.countBadgeInner}>{filmsCount}</div>
        </div>
      </div>

      <div className={s.title}>{name}</div>
      <div className={s.title}>{surname}</div>
      <div className={s.filmsCount}>
        {filmsCount} {declensionOfNum(filmsCount, FILMS_FORMS)}
      </div>
    </Link>
  );
};

export default ActorCard;

/*
<div className={s.imageContainer}>
          <Image className={s.image} src={IMAGE_PATH + image} width={153} height={183} alt="" />
        </div>
        <div className={s.countBadge}>
          <div className={s.countBadgeInner}>{filmsCount}</div>
        </div>
*/
