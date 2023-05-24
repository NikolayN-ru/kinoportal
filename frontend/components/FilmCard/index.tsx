import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { CollectionFilm } from "@components/types/film";
import FilmCardTools from "./FilmCardTools";
import ToolsWithContext from "./FilmCardTools/ToolsWithContext";
import Rating from "./Rating";
import BadgeAge from "@components/BadgeAge";
import BadgeFilm from "@components/BadgeFilm";
import { declensionOfNum } from "utils";

import s from "./FilmCard.module.scss";

export interface FilmCardProps {
  className?: string;
  data: CollectionFilm;
  withToolsContext?: boolean;
}

const IMAGE_PATH = "/images/";
const SEASONS_FORMS = ["сезон", "сезона", "сезонов"];

const FilmCard: FC<FilmCardProps> = ({ className, data, withToolsContext }) => {
  const { name, genre, year, country, rating, age, image, seasons, link } =
    data;

  const containerClassNames = [s.cardContainer];
  className && containerClassNames.push(className);

  return (
    <Link className={containerClassNames.join(" ")} href={`watch/${link}`}>
      <div className={s.title}>{name}</div>

      <div className={s.card}>
        <BadgeFilm
          className={s.filmBadge}
          option={{ text: "эксклюзив", color: "blue" }}
        />
        <div className={s.poster}>
          <Image src={IMAGE_PATH + image} width={153} height={235} alt="" />
          <BadgeAge className={s.ageBadge} value={age} />
        </div>

        <div className={s.info}>
          {
            withToolsContext
              ? <ToolsWithContext className={s.tools} />
              : <FilmCardTools className={s.tools} />
          }
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
