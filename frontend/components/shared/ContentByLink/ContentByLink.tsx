import React, { FC } from "react";
import s from "./ContentByLink.module.scss";
import {
  DropDownContentProps,
  content,
} from "@components/Header/DropDownPage/DropDownContent/DropDownContent";
import Link from "next/link";

const ContentByLink: FC<DropDownContentProps> = ({ link }) => {
  return (
    <div className={s.content}>
      <div className={s.block}>
        <span className={s.title}>Жанры</span>
        <div className={s.list_item}>
          {content.genres
            .filter((genre) => genre.usedFor.includes(link))
            .map((genres) => {
              return (
                <div className={s.genre} key={genres.id}>
                  <Link href={genres.url}>
                    <span className={s.item}>{genres.name}</span>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <div className={s.singleColumn}>
        <span className={s.title}>Страны</span>
        <div className={s.list_item}>
          {content.countries
            .filter((country) => country.usedFor.includes(link))
            .map((country) => {
              return (
                <div className={s.countries} key={country.id}>
                  <Link href={country.url}>
                    <span className={s.item}>{country.name}</span>
                  </Link>
                </div>
              );
            })}
        </div>
        <div className={s.years_block}>
          <span className={s.years_title}>Годы</span>
          <div className={s.list_item_years}>
            {content.years
              .filter((year) => year.usedFor.includes(link))
              .map((year) => {
                return (
                  <div className={s.years} key={year.id}>
                    <Link href={year.url}>
                      <span className={s.item}>{year.name}</span>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentByLink;
