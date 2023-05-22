"use client"

import FiltersForm from "@components/FiltersForm";
import MainContainer from "@components/MainContainer";
import PageDescription from "@components/PageDescription";
import Title from "@components/Title";
import GenresSlider, { GenresSliderMode } from "@components/FiltersForm/FilterGenre/GenresSlider";
import { genres } from "@mock/filmsData";

import s from "./page.module.scss";
import ActorsSlider from "@components/Slider/ActorsSlider";
import { actors } from "@mock/actors";

export default function Home() {
  return (
    <MainContainer>
      <section className={s.description}>
        <Title
          className={s.descriptionTitle}
          tag="h1"
          size="lg"
          text="Фильмы смотреть онлайн"
        />
        <PageDescription />
      </section>

      <section>
        <FiltersForm />
      </section>

      <section className="pageSection">
        <Title
          className={s.sectionTitle}
          tag="h2"
          size="md"
          text="Жанры"
        />
        <GenresSlider items={genres} mode={GenresSliderMode.FULL} />
      </section>

      <section className="pageSection">
        <Title
          className={s.sectionTitle}
          tag="h2"
          size="md"
          text="Персоны"
        />

        <ActorsSlider items={actors} />
      </section>
    </MainContainer>
  );
}
