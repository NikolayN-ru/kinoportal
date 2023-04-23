"use client";

import Link from "next/link";
import About from "@components/About/About";
import Promo from "@components/Promo/Promo";
import Title from "@components/Title/Title";
import MainContainer from "@components/MainContainer/MainContainer";
import CollectionSlider from "@components/CollectionSlider/CollectionSlider";
import SubscriptionButton from "@components/SubscriptionButton/SubscriptionButton";
import { collections } from "../../mock/filmsData";
import s from "./page.module.scss";

export default function Home() {
  return (
    <MainContainer>
      <h1 className="sr-only">
        Онлайн-кинотеатр Иви - фильмы сериалы и мультфильмы смотреть онлайн
        бесплатно в хорошем качестве.
      </h1>

      <Promo />

      <section className={s.pageSection + " " + s.subscribeSection}>
        <SubscriptionButton />
      </section>

      <section className={s.pageSection + " " + s.aboutSection}>
        <About />
      </section>

      {collections.map((collection) => (
        <section key={collection.id} className={s.pageSection}>
          <Link
            href={`/collections/${collection.link}`}
            className={s.titleLink + " " + s.collectionTitle}
          >
            <Title tag="h2" size="md" text={collection.name} />
          </Link>
          <CollectionSlider items={collection.items} />
        </section>
      ))}
    </MainContainer>
  );
}
