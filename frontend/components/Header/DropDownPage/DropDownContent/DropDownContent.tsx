import { FC } from "react";
import Link from "next/link";
import Button from "@components/ui-kit/Button";
import s from "./DropDownContent.module.scss";
import Icon from "@components/ui-kit/IconComponent/Icon";
import Carousel from "@components/Header/DropDownPage/DropDownWidget/Carousel/Carousel";
import DropDownWidget from "../DropDownWidget/DropDownWidget";
import { genres, countries, years, sideContent } from "./allCollectionsContent";
import { IFilms } from "./interfaces/FilmsInteface";
import { Links } from "./interfaces/LinksEnum";

export const content: IFilms = {
  genres: genres,
  countries: countries,
  years: years,
  sideContent,
};

 export interface DropDownContentProps {
  link: Links;
}

const DropDownContent: FC<DropDownContentProps> = ({ link }) => {
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

      <div className={s.sideContent}>
        <div className={s.content_block}>
          <div className={s.sideContent_list_item}>
            {content.sideContent
              .filter((sideLink) => sideLink.usedFor.includes(link))
              .map((sideLink) => {
                return (
                  <div className={s.item_wrap} key={sideLink.id}>
                    <Link href={sideLink.url}>
                      <span className={s.sideContent_item}>
                        {sideLink.name}
                      </span>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={s.sideContent_Widget_block}>
          <DropDownWidget />
          <Button
          color="grey"
            className={s.tv}
            title={<Icon name="tv" />}
            text="Смотреть на Smart TV"
          />
        </div>
      </div>
    </div>
  );
};

export default DropDownContent;
