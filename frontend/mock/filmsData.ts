export type CollectionFilm = {
  id: number;
  name: string;
  link: string;
  image: string;
  genre: string;
  year: number;
  country: string;
  rating: number;
  seasons: number;
};

export type Collection = {
  id: number;
  name: string;
  link: string;
  items: CollectionFilm[];
};

export const collections: Collection[] = [
  {
    id: 0,
    name: "Лучшие сериалы в подписке",
    link: "luchshie-serialyi-v-podpiske",
    items: [
      {
        id: 0,
        name: "Красная зона",
        link: "#",
        image: "red-zone.png",
        genre: "Мелодрамы",
        year: 2021,
        country: "Россия",
        rating: 8.6,
        seasons: 1,
      },
      {
        id: 1,
        name: "Беспринципные",
        link: "#",
        image: "red-zone.png",
        genre: "Мелодрамы",
        year: 2021,
        country: "Россия",
        rating: 8.1,
        seasons: 1,
      },
      {
        id: 2,
        name: "Хочу не могу!",
        link: "#",
        image: "red-zone.png",
        genre: "Комедийные",
        year: 2021,
        country: "Россия",
        rating: 7.7,
        seasons: 1,
      },
      {
        id: 3,
        name: "Заключение",
        link: "#",
        image: "red-zone.png",
        genre: "Детективы",
        year: 2021,
        country: "Россия",
        rating: 8.0,
        seasons: 1,
      },
      {
        id: 4,
        name: "Сыщицы",
        link: "#",
        image: "red-zone.png",
        genre: "Детективы",
        year: 2021,
        country: "Россия",
        rating: 7.2,
        seasons: 1,
      },
    ],
  },
  {
    id: 1,
    name: "Современные мультфильмы",
    link: "sovremennyie-multfilmyi",
    items: [],
  },
];
