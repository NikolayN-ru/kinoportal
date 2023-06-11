import { Compilation, PromoItemType } from "@components/types/film";

export const compilation: Compilation = {
  name: "Самое интересное",
  items: [
    { id: 0, name: "Сериалы Иви", image: "interesting-1.jpg" },
    { id: 1, name: "Новинки", image: "interesting-2.jpg" },
    { id: 2, name: "Российские комедии", image: "interesting-3.jpg" },
    { id: 3, name: "Лучшие детективы", image: "interesting-4.jpg" },
  ],
};

export const promoItems: PromoItemType[] = [
  {
    id: 0,
    name: "Пансион",
    link: "pansion",
    image: "promo-1.png",
    age: 16,
  },
  {
    id: 1,
    name: "Тайна пропавшей деревни",
    link: "taina-propavshej-derevni",
    image: "promo-2.jpg",
    age: 16,
  },
  {
    id: 2,
    name: "Моя ужасная сестра",
    link: "487282",
    image: "promo-3.jpg",
    age: 6,
  },
  {
    id: 3,
    name: "Папы",
    link: "208079",
    image: "promo-4.jpg",
    age: 6,
  },
  {
    id: 4,
    name: "Стажер",
    link: "stazher",
    image: "promo-5.jpg",
    age: 16,
  },
  {
    id: 5,
    name: "Бумеранг",
    link: "193567",
    image: "promo-6.jpg",
    age: 6,
  },
];
