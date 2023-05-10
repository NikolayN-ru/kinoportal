import FilterCountry from "./FilterCountry";
import FilterGenre from "./FilterGenre";
import FilterYear from "./FilterYear";

export const filtersComponents = [
  {
    title: "Жанры",
    component: FilterGenre,
  },

  {
    title: "Страны",
    component: FilterCountry,
  },

  {
    title: "Годы",
    component: FilterYear,
  },
];