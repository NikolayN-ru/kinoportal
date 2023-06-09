import { FilterYear } from "@components/types/filters";

export const filterNames = [
  "genre",
  "country",
  "year",
  "rating",
  "marks",
  "director",
  "actor",
];

export const YEAR_DEFAULT_TITLE = "Все годы";

export const years: FilterYear[] = [
  {
    value: [],
    title: YEAR_DEFAULT_TITLE,
  },
  {
    value: [2004],
    title: "2004 год",
  },
  {
    value: [2003],
    title: "2003 год",
  },
  {
    value: [2002],
    title: "2002 год",
  },
  {
    value: [2001],
    title: "2001 год",
  },
  {
    value: [2000],
    title: "2000 год",
  },
  {
    value: [1990, 1999],
    title: "1990-1999",
  },
  {
    value: [1990, 1995],
    title: "1990-1995",
  },
  {
    value: [1980, 1989],
    title: "1980-1989",
  },
  {
    value: [1970, 1980],
    title: "1970-1980",
  },
  {
    value: [1960, 1970],
    title: "1960-1970",
  },
  {
    value: [1950, 1960],
    title: "1950-1960",
  },
  {
    value: [1940, 1950],
    title: "1940-1950",
  },
  {
    value: [1920, 1940],
    title: "1920-1940",
  },
];

export const genresIconNames = [
  {
    genre: "комедия",
    iconName: "comedyMask",
  },
  {
    genre: "драма",
    iconName: "dramaMask",
  },
  {
    genre: "триллер",
    iconName: "thriller",
  },
  {
    genre: "приключения",
    iconName: "adventures",
  },
  {
    genre: "зарубежные",
    iconName: "globe",
  },
  {
    genre: "мелодрама",
    iconName: "hearts",
  },
  {
    genre: "фантастика",
    iconName: "sciFi",
  },
  {
    genre: "фэнтези",
    iconName: "fantasy",
  },
  {
    genre: "семейный",
    iconName: "family",
  },
  {
    genre: "боевик",
    iconName: "gun",
  },
  {
    genre: "ужасы",
    iconName: "horror",
  },
  {
    genre: "артхаус",
    iconName: "arthouse",
  },
  {
    genre: "биография",
    iconName: "biography",
  },
  {
    genre: "вестерн",
    iconName: "western",
  },
  {
    genre: "военный",
    iconName: "war",
  },
  {
    genre: "детектив",
    iconName: "detective",
  },
  {
    genre: "для детей",
    iconName: "children",
  },
  {
    genre: "история",
    iconName: "historical",
  },
  {
    genre: "катастрофы",
    iconName: "catastrophe",
  },
  {
    genre: "криминал",
    iconName: "criminal",
  },
  {
    genre: "мистические",
    iconName: "mystic",
  },
  {
    genre: "музыка",
    iconName: "music",
  },
  {
    genre: "по комиксам",
    iconName: "comics",
  },
  {
    genre: "русские",
    iconName: "russian",
  },
  {
    genre: "советские",
    iconName: "soviet",
  },
  {
    genre: "спорт",
    iconName: "sports",
  },
];
