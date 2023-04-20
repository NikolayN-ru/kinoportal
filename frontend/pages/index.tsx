import Link from 'next/link';
import About from '../components/About/About';
import CollectionSlider from '../components/CollectionSlider/CollectionSlider';
import MainContainer from '../components/MainContainer/MainContainer';
import Promo from '../components/Promo/Promo';
import SubscriptionButton from '../components/SubscriptionButton/SubscriptionButton';
import Title from '../components/Title/Title';

import styles from '../styles/Home.module.scss';

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

type Collection = {
  id: number;
  name: string;
  link: string;
  items: CollectionFilm[];
};

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
        seasons: 1,
      },
    ],
  },
  { id: 1, name: 'Современные мультфильмы', link: 'sovremennyie-multfilmyi', items: [] },
];

export default function Home() {
  return (
    <MainContainer>
      <h1 className="sr-only">
        Онлайн-кинотеатр Иви - фильмы сериалы и мультфильмы смотреть онлайн бесплатно в хорошем
        качестве.
      </h1>

      <Promo />

      <section className={styles.pageSection + ' ' + styles.subscribeSection}>
        <SubscriptionButton />
      </section>

      <section className={styles.pageSection + ' ' + styles.aboutSection}>
        <About />
      </section>

      {collections.map((collection) => (
        <section key={collection.id} className={styles.pageSection}>
          <Link
            href={`/collections/${collection.link}`}
            className={styles.titleLink + ' ' + styles.collectionTitle}>
            <Title tag="h2" size="md" text={collection.name} />
          </Link>
          <CollectionSlider items={collection.items} />
        </section>
      ))}
    </MainContainer>
  );
}
