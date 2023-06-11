export const collections = [
  {
    id: 0,
    name: "Фильмы 80-х",
    link: "movies/filters/1980-1989",
    query: "year=1980-1989&rating=0&votes=0&sort=votes",
  },
  {
    id: 1,
    name: "Американские боевики 90-х",
    link: "movies/filters/боевик/США/1990-1999",
    query:
      "genre=боевик&country=США&year=1990-1999&rating=0&votes=0&sort=votes",
  },
  {
    id: 2,
    name: "Лучшие комедии",
    link: "movies/filters/комедия?rating=8",
    query: "genre=комедия&rating=8&votes=0&sort=votes",
  },
  {
    id: 3,
    name: "Для просмотра всей семьёй",
    link: "movies/filters/семейный",
    query: "genre=семейный&rating=0&votes=0&sort=votes",
  },
  {
    id: 4,
    name: "Фильмы с Брюсом Уиллисом",
    link: "movies/filters?actor=Брюс+Уиллис",
    query: "rating=0&votes=0&actor=Брюс+Уиллис&sort=votes",
  },
  {
    id: 5,
    name: "Атмосферный нуар",
    link: "movies/filters/фильм-нуар",
    query: "genre=фильм-нуар&rating=0&votes=0&sort=votes",
  },
];
