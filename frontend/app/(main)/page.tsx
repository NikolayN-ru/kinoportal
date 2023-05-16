'use client';

import Link from 'next/link';

import SubscriptionButton from '@components/Button/SubscriptionButton';
import CompilationSlider from '@components/Slider/CompilationSlider';
import CollectionSlider from '@components/Slider/CollectionSlider';
import MainContainer from '@components/MainContainer';
import Promo from '@components/Promo';
import About from '@components/About';
import Title from '@components/Title';

import { collections, compilation } from 'mock/filmsData';

import s from './page.module.scss';

export default function Home() {
  return (
    <MainContainer>
      <h1 className="sr-only">
        Онлайн-кинотеатр Иви - фильмы сериалы и мультфильмы смотреть онлайн бесплатно в хорошем
        качестве.
      </h1>

      <section className={s.promoSection}>{<Promo />}</section>

      <section className={s.pageSection + ' ' + s.subscribeSection}>
        <SubscriptionButton />
      </section>

      <section className={s.pageSection + ' ' + s.aboutSection}>
        <About />
      </section>

      <section className={s.pageSection}>
        <Title className={s.sectionTitle} tag="h2" size="md" text={compilation.name} />
        {<CompilationSlider items={compilation.items} />}
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
}
