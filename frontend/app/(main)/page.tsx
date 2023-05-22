"use client";

import Link from "next/link";

import CompilationSlider from "@components/Slider/CompilationSlider";
import CollectionSlider from "@components/Slider/CollectionSlider";
import MainContainer from "@components/MainContainer";
import Promo from "@components/Promo";
import PageDescription from "@components/PageDescription";
import Title from "@components/Title";
import SubscriptionButton from "@components/ui-kit/Button/SubscriptionButton";

import { collections, compilation } from "mock/filmsData";

import s from "./page.module.scss";


export default function Home() {
  return (
    <MainContainer>
      <h1 className="sr-only">
        Онлайн-кинотеатр Иви - фильмы сериалы и мультфильмы смотреть онлайн
        бесплатно в хорошем качестве.
      </h1>

      <section className={s.promoSection}>{<Promo />}</section>

      <section className={"pageSection " + s.subscribeSection}>
        <SubscriptionButton />
      </section>

      <section className={"pageSection " + s.aboutSection}>
        <Title
          className={s.descriptionTitle}
          tag="h2"
          size="base"
          text="Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие"
        />
        <PageDescription />
      </section>

      <section className="pageSection">
        <Title
          className={s.sectionTitle}
          tag="h2"
          size="md"
          text={compilation.name}
        />
        {<CompilationSlider items={compilation.items} />}
      </section>

      {collections.map((collection) => (
        <section key={collection.id} className="pageSection">
          <Link
            href={`/collections/${collection.link}`}
            className={s.titleLink + " " + s.sectionTitle}
          >
            <Title tag="h2" size="md" text={collection.name} />
          </Link>
          <CollectionSlider items={collection.items} />
        </section>
      ))}
    </MainContainer>
  );
}
