import { FC } from "react";

import { CollectionFilm } from "@components/types/film";
import FilmCard from "@components/FilmCard";

import s from "./FilmsList.module.scss";

interface FilmsListProps {
  items: CollectionFilm[];
}

const FilmsList: FC<FilmsListProps> = ({ items }) => {
  return (
    <div className={s.container}>
      {items.map((item) => (
        <FilmCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default FilmsList;
