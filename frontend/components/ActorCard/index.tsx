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
  const { actorId, firstName, lastName, countfilms, filename } = data;

  return (
    <Link
      className={s.container}
      href="/actor/[id]/actor"
      as={`/actor/${actorId}/actor`}
    >
      <div className={s.imageSection}>
        <div className={s.imageContainer}>
          <Image
            className={s.image}
            src={IMAGE_PATH + filename}
            width={153}
            height={183}
            alt=""
          />
        </div>
        <div className={s.countBadge}>
          {countfilms && <div className={s.countBadgeInner}>{countfilms}</div>}
        </div>
      </div>

      <div className={s.title}>{firstName}</div>
      <div className={s.title}>{lastName}</div>
      {countfilms && <div className={s.filmsCount}>
        {countfilms} {declensionOfNum(countfilms, FILMS_FORMS)}
      </div>}
    </Link>
  );
};

export default ActorCard;
