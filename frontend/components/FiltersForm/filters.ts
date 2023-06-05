import FilterCountry from "./FilterCountry";
import FilterGenre from "./FilterGenre";
import FilterYear from "./FilterYear";

export const filtersComponents = [
  {
    filter: {
      field: "genre",
      title: "Жанры",
    },
    component: FilterGenre,
  },

  {
    filter: {
      field: "country",
      title: "Страны",
    },
    component: FilterCountry,
  },

  {
    filter: {
      field: "year",
      title: "Годы",
    },
    component: FilterYear,
  },
];

export const filterNames = [
  "genre",
  "country",
  "year",
  "rating",
  "marks",
  "director",
  "actor",
];
