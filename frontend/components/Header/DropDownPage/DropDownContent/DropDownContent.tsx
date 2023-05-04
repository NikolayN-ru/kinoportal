import GrayButton from "@components/GrayButton";
import s from "./DropDownContent.module.scss";
import Icon from "@components/shared/IconComponent/Icon";
import Carousel from "@components/Header/Carousel/Carousel";
import { FC } from "react";
import Link from "next/link";
import DropDownWidget from "../DropDownWidget/DropDownWidget";

export enum Links {
  Films,
  Serials,
  Multfilms,
  TV,  
}

export interface IGenre {
  id: string;
  name: string;
  url: string;
  usedFor: Links[];
}

export interface ICountry {
  id: string;
  name: string;
  url: string;
  usedFor: Links[];
}
export interface IYear {
  id: string;
  name: string;
  url: string;
  usedFor: Links[];
}

export interface ISideContent {
  id: string;
  name: string;
  url: string;
  usedFor: Links[];
}

export interface IFilms {
  genres: IGenre[];
  countries: ICountry[];
  years: IYear[];
  sideContent: ISideContent[];
}

const genres: IGenre[] = [
  {
    id: "1",
    name: "Артхаус",
    url: "/arthouse",
    usedFor: [Links.Films],
  },
  {
    id: "2",
    name: "Биография",
    url: "/biography",
    usedFor: [Links.Serials],
  },
  {
    id: "3",
    name: "Аниме",
    url: "/anime",
    usedFor: [Links.Multfilms],
  },
  {
    id: "4",
    name: "Боевики",
    url: "/boeviki",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "5",
    name: "Вестерн",
    url: "/western",
    usedFor: [Links.Films],
  },
  {
    id: "6",
    name: "Военные",
    url: "/voennye",
    usedFor: [Links.Films, Links.Serials],
  },
  {
    id: "7",
    name: "Детективы",
    url: "/detective",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "8",
    name: "Для взрослых",
    url: "/vzroslye",
    usedFor: [Links.Multfilms],
  },
  {
    id: "9",
    name: "Для всей семьи",
    url: "/dlya_vsej_semi",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "10",
    name: "Для детей",
    url: "/detskiy",
    usedFor: [Links.Films, Links.Multfilms],
  },
  {
    id: "11",
    name: "Документальные",
    url: "/documentary",
    usedFor: [Links.Films, Links.Serials],
  },
  {
    id: "12",
    name: "Дорамы",
    url: "/doramy",
    usedFor: [Links.Serials],
  },
  {
    id: "13",
    name: "Драмы",
    url: "/drama",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "14",
    name: "Исторические",
    url: "/istoricheskie",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "15",
    name: "Катастрофы",
    url: "/disaster",
    usedFor: [Links.Films],
  },
  {
    id: "16",
    name: "Комедии",
    url: "/comedy",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "17",
    name: "Криминальные",
    url: "/crime",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "18",
    name: "Медицинские",
    url: "/medicine",
    usedFor: [Links.Serials],
  },
  {
    id: "19",
    name: "Мюзикл",
    url: "/musical",
    usedFor: [Links.Multfilms],
  },
  {
    id: "20",
    name: "Полнометражные",
    url: "/polnometrazhnye",
    usedFor: [Links.Multfilms],
  },
  {
    id: "21",
    name: "Мелодрамы",
    url: "/melodramyi",
    usedFor: [Links.Films, Links.Serials],
  },
  {
    id: "22",
    name: "Мистические",
    url: "/misticheskie",
    usedFor: [Links.Films, Links.Serials],
  },
  {
    id: "23",
    name: "По комиксам",
    url: "comics",
    usedFor: [Links.Films],
  },
  {
    id: "24",
    name: "Приключения",
    url: "/adventures",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "25",
    name: "Развивающие",
    url: "/razvivayuschie",
    usedFor: [Links.Multfilms],
  },
  {
    id: "27",
    name: "Романтические",
    url: "/romanticheskie",
    usedFor: [Links.Serials],
  },
  {
    id: "28",
    name: "Телешоу",
    url: "/tvshow",
    usedFor: [Links.Serials],
  },
  {
    id: "29",
    name: "Спорт",
    url: "/sport",
    usedFor: [Links.Films, Links.Multfilms],
  },
  {
    id: "30",
    name: "Триллеры",
    url: "/thriller",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "31",
    name: "Турецкие",
    url: "/turetskie",
    usedFor: [Links.Serials],
  },
  {
    id: "32",
    name: "Ужасы",
    url: "/horror",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "33",
    name: "Фантастика",
    url: "/fantastic",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "34",
    name: "Фэнтези",
    url: "/fantasy",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
];

const countries: ICountry[] = [
  {
    id: "1",
    name: "Советские",
    url: "/su",
    usedFor: [Links.Multfilms],
  },
  {
    id: "2",
    name: "Русские",
    url: "/ru",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "3",
    name: "Зарубежные",
    url: "/foreign",
    usedFor: [Links.Films, Links.Serials, Links.Multfilms],
  },
  {
    id: "4",
    name: "Советское кино",
    url: "/su",
    usedFor: [Links.Films],
  },
  {
    id: "5",
    name: "Американские",
    url: "/us",
    usedFor: [Links.Serials, Links.Multfilms],
  },
  {
    id: "6",
    name: "Корейские",
    url: "/kr",
    usedFor: [Links.Serials],
  },
  {
    id: "7",
    name: "Турецкие",
    url: "/tr",
    usedFor: [Links.Serials],
  },
];

const years: IYear[] = [
  { id: "1", name: "Фильмы 2023 года", url: "/2023", usedFor: [Links.Films] },
  { id: "2", name: "Сериалы 2023 года", url: "/2023", usedFor: [Links.Serials] },
  { id: "3", name: "Мультики 2023 года", url: "/2023", usedFor: [Links.Multfilms] },
  { id: "4", name: "Фильмы 2022 года", url: "/2022", usedFor: [Links.Films] },
  { id: "5", name: "Сериалы 2022 года", url: "/2022", usedFor: [Links.Serials] },
  { id: "6", name: "Мультики 2022 года", url: "/2022", usedFor: [Links.Multfilms] },
  { id: "7", name: "Фильмы 2021 года", url: "/2021", usedFor: [Links.Films] },
  { id: "8", name: "Сериалы 2021 года", url: "/2021", usedFor: [Links.Serials] },
  { id: "9", name: "Мультики 2021 года", url: "/2021", usedFor: [Links.Multfilms] },
  { id: "10", name: "Фильмы 2020 года", url: "/2020", usedFor: [Links.Films] },
  { id: "11", name: "Сериалы 2020 года", url: "/2020", usedFor: [Links.Serials] },
  { id: "12", name: "Мультики 2020 года", url: "/2020", usedFor: [Links.Multfilms] },
];
const sideContent: ISideContent[] = [
  { id: "1", name: "Новинки", url: "/movie-new", usedFor: [Links.Films] },
  { id: "2", name: "Подборки", url: "/collections", usedFor: [Links.Films] },
  { id: "3", name: "Иви.Рейтинг", url: "/rating", usedFor: [Links.Films,Links.Serials ] },
  { id: "4", name: "Сериалы в HD", url: "/series-hd", usedFor: [Links.Serials] },
  { id: "5", name: "Бесплатные сериалы", url: "/tvshow-free", usedFor: [Links.Serials] },
  { id: "6", name: "Сериалы Amediateka", url: "/serialyi-amediateka", usedFor: [Links.Serials] },
  { id: "7", name: "Сериалы Paramount Play", url: "/series-paramount-play", usedFor: [Links.Serials] },
  { id: "8", name: "Мультики в HD", url: "/cartoons-hd", usedFor: [Links.Multfilms] },
  { id: "9", name: "Мультфильмы Paramount Play", url: "/animation-paramount-play", usedFor: [Links.Multfilms] },
  { id: "10", name: "Мультфильмы Dreamworks", url: "/dreamworks-cartoons", usedFor: [Links.Multfilms] },
  { id: "11", name: "Мультфильмы СТС Kids", url: "/ctc-kids", usedFor: [Links.Multfilms] },
  { id: "12", name: "Скоро на Иви", url: "/soon-ivi", usedFor: [Links.Films] },
  { id: "13", name: "Трейлеры", url: "/trailers", usedFor: [Links.Films] },
  { id: "14", name: "Что посмотреть", url: "/goodmovies", usedFor: [Links.Films] },
  { id: "15", name: "Фильмы в HD", url: "/movies-hd", usedFor: [Links.Films] },
  { id: "16", name: "Выбор Иви", url: "/vyibor-ivi", usedFor: [Links.Films] },
  { id: "17", name: "Новинки подписки", url: "/very-new-svod", usedFor: [Links.Films] },
  { id: "18", name: "Фильмы Amediateka", url: "/filmyi-amediateka", usedFor: [Links.Films] },
  { id: "19", name: "Популярные фильмы", url: "/best-movies", usedFor: [Links.Films] },
  { id: "20", name: "Фильмы Иви", url: "/ivi-originals", usedFor: [Links.Films] },
];

const content: IFilms = {
  genres: genres,
  countries: countries,
  years: years,
  sideContent,
};

interface DropDownContentProps {
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
                <Link href={genres.url}><span className={s.item}>{genres.name}</span></Link>  
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
              <Link href={country.url}><span className={s.item}>{country.name}</span></Link>  
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
                <Link href={year.url}><span className={s.item}>{year.name}</span></Link>  
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
                 <Link href={sideLink.url}><span className={s.sideContent_item}>{sideLink.name}</span></Link> 
                </div>
              );
            })}
          </div>
        </div>
        <div className={s.sideContent_Widget_block}>
            <DropDownWidget />
          <GrayButton
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
