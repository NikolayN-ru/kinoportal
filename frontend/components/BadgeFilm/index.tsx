import { FC } from "react";

import { FilmBadge } from "@components/types/film";

import s from "./BadgeFilm.module.scss";

interface BadgeFilmProps {
  className?: string;
  option: FilmBadge;
}

export const badgeFilmOptions = {
  popular: { text: "популярный", color: "orange" },
  choice: { text: "выбор Иви", color: "red" },
  new: { text: "новинка", color: "green" },
  classic: { text: "классика", color: "blue" },
};

const BadgeFilm: FC<BadgeFilmProps> = ({ className, option }) => {
  const { text, color } = option;

  const badgeClassNames = [s.badge, s[color] || s.colorDefault];
  className && badgeClassNames.push(className);

  return <div className={badgeClassNames.join(" ")}>{text}</div>;
};

export default BadgeFilm;
