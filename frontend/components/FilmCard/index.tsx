import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Movie } from "@components/types/film";
import FilmCardTools from "./FilmCardTools";
import ToolsWithContext from "./FilmCardTools/ToolsWithContext";
import Rating from "./Rating";
import BadgeAge from "@components/BadgeAge";
import BadgeFilm from "@components/BadgeFilm";
import { capitalizeFirstLetter, declensionOfNum } from "utils";

import s from "./FilmCard.module.scss";

export interface FilmCardProps {
  className?: string;
  data: Movie;
  withToolsContext?: boolean;
}

const IMAGE_PATH = "/image/";
const MINUTES_FORMS = ["минута", "минуты", "минут"];

const FilmCard: FC<FilmCardProps> = ({ className, data, withToolsContext }) => {
  const { id, title, titleEng, year, rating, genres, countries, imgVideo, time } =
    data;
  const genre = !!genres && genres.length ? genres[0].genre : "";
  const country = !!countries && countries.length ? countries[0].country : "";

  const infoItems = [];
  year && infoItems.push(year);
  country && infoItems.push(country);
  genre && infoItems.push(capitalizeFirstLetter(genre));

  const containerClassNames = [s.cardContainer];
  className && containerClassNames.push(className);

  return (
    <Link
      className={containerClassNames.join(" ")}
      href="/film/[id]"
      as={`/film/${id}`}
    >
      <div className={s.title}>{title}</div>

      <div className={s.card}>
        <BadgeFilm
          className={s.filmBadge}
          option={{ text: "эксклюзив", color: "blue" }}
        />
        <div className={s.poster}>
          <Image src={IMAGE_PATH + imgVideo} width={153} height={235} alt="" />
          {/*<BadgeAge className={s.ageBadge} value={age} />*/}
        </div>

        <div className={s.info}>
          {withToolsContext ? (
            <ToolsWithContext className={s.tools} />
          ) : (
            <FilmCardTools className={s.tools} />
          )}
          <div className={s.infoProperties}>
            <Rating className={s.rating} value={rating} />
            <div className={s.infoRow}>{infoItems.join(", ")}</div>
            <div className={s.infoRow}>{time} {declensionOfNum(time, MINUTES_FORMS)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
