import { FC } from "react";

import { FilmBadge } from "@components/types/film";

import s from "./BadgeFilm.module.scss";

interface BadgeFilmProps {
  className?: string;
  option: FilmBadge;
}

const BadgeFilm: FC<BadgeFilmProps> = ({ className, option }) => {
  const { text, color } = option;

  const badgeClassNames = [s.badge, s[color] || s.colorDefault];
  className && badgeClassNames.push(className);

  return <div className={badgeClassNames.join(" ")}>{text}</div>;
};

export default BadgeFilm;
