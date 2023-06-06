import { IAbout } from "./interfaces/About";
import { ICountry } from "./interfaces/CountryInterface";
import { IGenre } from "./interfaces/GenreInterface";
import { Links } from "./interfaces/LinksEnum";
import { ISideContent } from "./interfaces/SideContent";
import { IYear } from "./interfaces/YearInterface";

export const genres: IGenre[] = [
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

export const countries: ICountry[] = [
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

export const years: IYear[] = [
  { id: "1", name: "Фильмы 2023 года", url: "/2023", usedFor: [Links.Films] },
  {
    id: "2",
    name: "Сериалы 2023 года",
    url: "/2023",
    usedFor: [Links.Serials],
  },
  {
    id: "3",
    name: "Мультики 2023 года",
    url: "/2023",
    usedFor: [Links.Multfilms],
  },
  { id: "4", name: "Фильмы 2022 года", url: "/2022", usedFor: [Links.Films] },
  {
    id: "5",
    name: "Сериалы 2022 года",
    url: "/2022",
    usedFor: [Links.Serials],
  },
  {
    id: "6",
    name: "Мультики 2022 года",
    url: "/2022",
    usedFor: [Links.Multfilms],
  },
  { id: "7", name: "Фильмы 2021 года", url: "/2021", usedFor: [Links.Films] },
  {
    id: "8",
    name: "Сериалы 2021 года",
    url: "/2021",
    usedFor: [Links.Serials],
  },
  {
    id: "9",
    name: "Мультики 2021 года",
    url: "/2021",
    usedFor: [Links.Multfilms],
  },
  { id: "10", name: "Фильмы 2020 года", url: "/2020", usedFor: [Links.Films] },
  {
    id: "11",
    name: "Сериалы 2020 года",
    url: "/2020",
    usedFor: [Links.Serials],
  },
  {
    id: "12",
    name: "Мультики 2020 года",
    url: "/2020",
    usedFor: [Links.Multfilms],
  },
];
export const sideContent: ISideContent[] = [
  { id: "1", name: "Новинки", url: "/movie-new", usedFor: [Links.Films] },
  { id: "2", name: "Подборки", url: "/collections", usedFor: [Links.Films] },
  {
    id: "3",
    name: "Иви.Рейтинг",
    url: "/rating",
    usedFor: [Links.Films, Links.Serials],
  },
  {
    id: "4",
    name: "Сериалы в HD",
    url: "/series-hd",
    usedFor: [Links.Serials],
  },
  {
    id: "5",
    name: "Бесплатные сериалы",
    url: "/tvshow-free",
    usedFor: [Links.Serials],
  },
  {
    id: "6",
    name: "Сериалы Amediateka",
    url: "/serialyi-amediateka",
    usedFor: [Links.Serials],
  },
  {
    id: "7",
    name: "Сериалы Paramount Play",
    url: "/series-paramount-play",
    usedFor: [Links.Serials],
  },
  {
    id: "8",
    name: "Мультики в HD",
    url: "/cartoons-hd",
    usedFor: [Links.Multfilms],
  },
  {
    id: "9",
    name: "Мультфильмы Paramount Play",
    url: "/animation-paramount-play",
    usedFor: [Links.Multfilms],
  },
  {
    id: "10",
    name: "Мультфильмы Dreamworks",
    url: "/dreamworks-cartoons",
    usedFor: [Links.Multfilms],
  },
  {
    id: "11",
    name: "Мультфильмы СТС Kids",
    url: "/ctc-kids",
    usedFor: [Links.Multfilms],
  },
  { id: "12", name: "Скоро на Иви", url: "/soon-ivi", usedFor: [Links.Films] },
  { id: "13", name: "Трейлеры", url: "/trailers", usedFor: [Links.Films] },
  {
    id: "14",
    name: "Что посмотреть",
    url: "/goodmovies",
    usedFor: [Links.Films],
  },
  { id: "15", name: "Фильмы в HD", url: "/movies-hd", usedFor: [Links.Films] },
  { id: "16", name: "Выбор Иви", url: "/vyibor-ivi", usedFor: [Links.Films] },
  {
    id: "17",
    name: "Новинки подписки",
    url: "/very-new-svod",
    usedFor: [Links.Films],
  },
  {
    id: "18",
    name: "Фильмы Amediateka",
    url: "/filmyi-amediateka",
    usedFor: [Links.Films],
  },
  {
    id: "19",
    name: "Популярные фильмы",
    url: "/best-movies",
    usedFor: [Links.Films],
  },
  {
    id: "20",
    name: "Фильмы Иви",
    url: "/ivi-originals",
    usedFor: [Links.Films],
  },
];
export const about: IAbout[] = [
  {
    id: "1",
    name: "О компании",
    url: "https://corp.ivi.ru",
    usedFor: [Links.About],
  },
  {
    id: "2",
    name: "Вакансии",
    url: "https://corp.ivi.ru/career/#career-vacancy-block",
    usedFor: [Links.About],
  },
  {
    id: "3",
    name: "Программа бета-тестирования",
    url: "https://www.ivi.ru/pages/beta/",
    usedFor: [Links.About],
  },
  {
    id: "4",
    name: "Общая информация для партнеров",
    url: "https://www.ivi.ru/info/partners",
    usedFor: [Links.About],
  },
  {
    id: "5",
    name: "Размещение рекламы",
    url: "https://corp.ivi.ru/advertisers/",
    usedFor: [Links.About],
  },
  {
    id: "6",
    name: "Пользовательское соглашение",
    url: "https://www.ivi.ru/info/agreement",
    usedFor: [Links.About],
  },
  {
    id: "7",
    name: "Политика конфиденциальности",
    url: "https://www.ivi.ru/info/confidential",
    usedFor: [Links.About],
  },
  {
    id: "8",
    name: "Комплаенс",
    url: "https://www.ivi.ru/info/goryachaya-liniya-komplaens",
    usedFor: [Links.About],
  },
]