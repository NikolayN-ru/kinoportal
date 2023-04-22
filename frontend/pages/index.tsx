import Link from 'next/link';
import About from '../components/About/About';
import CollectionSlider from '../components/CollectionSlider/CollectionSlider';
import MainContainer from '../components/MainContainer/MainContainer';
import Promo from '../components/Promo/Promo';
import SubscriptionButton from '../components/SubscriptionButton/SubscriptionButton';
import Title from '../components/Title/Title';
import { collections } from '../mock/filmsData';

import styles from '../styles/Home.module.scss';

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
