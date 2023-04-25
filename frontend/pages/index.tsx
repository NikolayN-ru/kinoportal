import Link from 'next/link';
import { FC } from 'react';

import MainContainer from '../components/MainContainer/MainContainer';
import Promo from '../components/Promo/Promo';
import SubscriptionButton from '../components/SubscriptionButton/SubscriptionButton';
import Title from '../components/Title/Title';
import About from '../components/About/About';
import CollectionSlider from '../components/CollectionSlider/CollectionSlider';
import CompilationSlider from '../components/CompilationSlider/CompilationSlider';
import { Collection, Compilation } from '../components/types/film';

import s from '../styles/Home.module.scss';

const collections: Collection[] = [
  {
    id: 0,
    name: 'Лучшие сериалы в подписке',
    link: 'luchshie-serialyi-v-podpiske',
    items: [
      {
        id: 0,
        name: 'Красная зона',
        link: '#',
        image: 'red-zone.png',
        genre: 'Мелодрамы',
        year: 2021,
        country: 'Россия',
        rating: 8.6,
        age: 16,
        seasons: 1,
      },
      {
        id: 1,
        name: 'Беспринципные',
        link: '#',
        image: 'red-zone.png',
        genre: 'Мелодрамы',
        year: 2021,
        country: 'Россия',
        rating: 8.1,
        age: 16,
        seasons: 1,
      },
      {
        id: 2,
        name: 'Хочу не могу!',
        link: '#',
        image: 'red-zone.png',
        genre: 'Комедийные',
        year: 2021,
        country: 'Россия',
        rating: 7.7,
        age: 16,
        seasons: 1,
      },
      {
        id: 3,
        name: 'Заключение',
        link: '#',
        image: 'red-zone.png',
        genre: 'Детективы',
        year: 2021,
        country: 'Россия',
        rating: 8.0,
        age: 16,
        seasons: 1,
      },
      {
        id: 4,
        name: 'Сыщицы',
        link: '#',
        image: 'red-zone.png',
        genre: 'Детективы',
        year: 2021,
        country: 'Россия',
        rating: 7.2,
        age: 16,
        seasons: 1,
      },
      {
        id: 5,
        name: 'Красная зона',
        link: '#',
        image: 'red-zone.png',
        genre: 'Мелодрамы',
        year: 2021,
        country: 'Россия',
        rating: 8.6,
        age: 16,
        seasons: 1,
      },
      {
        id: 6,
        name: 'Беспринципные',
        link: '#',
        image: 'red-zone.png',
        genre: 'Мелодрамы',
        year: 2021,
        country: 'Россия',
        rating: 8.1,
        age: 16,
        seasons: 1,
      },
      {
        id: 7,
        name: 'Хочу не могу!',
        link: '#',
        image: 'red-zone.png',
        genre: 'Комедийные',
        year: 2021,
        country: 'Россия',
        rating: 7.7,
        age: 16,
        seasons: 1,
      },
      {
        id: 8,
        name: 'Заключение',
        link: '#',
        image: 'red-zone.png',
        genre: 'Детективы',
        year: 2021,
        country: 'Россия',
        rating: 8.0,
        age: 16,
        seasons: 1,
      },
      {
        id: 9,
        name: 'Сыщицы',
        link: '#',
        image: 'red-zone.png',
        genre: 'Детективы',
        year: 2021,
        country: 'Россия',
        rating: 7.2,
        age: 16,
        seasons: 1,
      },
    ],
  },
  {
    id: 1,
    name: 'Современные мультфильмы',
    link: 'sovremennyie-multfilmyi',
    items: [
      {
        id: 0,
        name: 'Простоквашино',
        link: '#',
        image: 'kolobanga.png',
        genre: 'Комедия',
        year: 2021,
        country: 'Россия',
        rating: 8.6,
        age: 0,
        seasons: 1,
      },
      {
        id: 1,
        name: 'Финник',
        link: '#',
        image: 'kolobanga.png',
        genre: 'Фэнтези',
        year: 2021,
        country: 'Россия',
        rating: 8.1,
        age: 6,
        seasons: 1,
      },
      {
        id: 2,
        name: 'Чуч-мяуч',
        link: '#',
        image: 'kolobanga.png',
        genre: 'Для детей',
        year: 2021,
        country: 'Россия',
        rating: 7.7,
        age: 0,
        seasons: 1,
      },
      {
        id: 3,
        name: 'Царство против разбойников',
        link: '#',
        image: 'kolobanga.png',
        genre: 'Приключения',
        year: 2021,
        country: 'Россия',
        rating: 8.0,
        age: 6,
        seasons: 1,
      },
      {
        id: 4,
        name: 'Колобанга. Привет, интернет!',
        link: '#',
        image: 'kolobanga.png',
        genre: 'Приключения',
        year: 2021,
        country: 'Россия',
        rating: 7.2,
        age: 0,
        seasons: 1,
      },
    ],
  },
];

const compilation: Compilation = {
  name: 'Самое интересное',
  items: [
    { id: 0, name: 'Сериалы Иви', image: 'interesting-1.jpg' },
    { id: 1, name: 'Новинки', image: 'interesting-2.jpg' },
    { id: 2, name: 'Российские комедии', image: 'interesting-3.jpg' },
    { id: 3, name: 'Лучшие детективы', image: 'interesting-4.jpg' },
  ],
};

const Home: FC = () => {
  return (
    <MainContainer>
      <h1 className="sr-only">
        Онлайн-кинотеатр Иви - фильмы сериалы и мультфильмы смотреть онлайн бесплатно в хорошем
        качестве.
      </h1>

      <section className={s.promoSection}>
        <Promo />
      </section>

      <section className={s.pageSection + ' ' + s.subscribeSection}>
        <SubscriptionButton />
      </section>

      <section className={s.pageSection + ' ' + s.aboutSection}>
        <About />
      </section>

      <section className={s.pageSection}>
        <Title className={s.sectionTitle} tag="h2" size="md" text={compilation.name} />
        <CompilationSlider items={compilation.items} />
      </section>

      {collections.map((collection) => (
        <section key={collection.id} className={s.pageSection}>
          <Link
            href={`/collections/${collection.link}`}
            className={s.titleLink + ' ' + s.sectionTitle}>
            <Title tag="h2" size="md" text={collection.name} />
          </Link>
          <CollectionSlider items={collection.items} />
        </section>
      ))}
    </MainContainer>
  );
};

export default Home;
