"use client"

import Link from "next/link";

import FiltersForm from "@components/FiltersForm";
import MainContainer from "@components/MainContainer";
import PageDescription from "@components/PageDescription";
import Title from "@components/Title";
import GenresSlider, { GenresSliderMode } from "@components/FiltersForm/FilterGenre/GenresSlider";
import ActorsSlider from "@components/Slider/ActorsSlider";
import CollectionSlider from "@components/Slider/CollectionSlider";
import { collections, genres } from "@mock/filmsData";
import { actors } from "@mock/actors";
import SortingSelect from "@components/ui-kit/Select/SortingSelect";

import s from "./page.module.scss";

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

      <section className="pageSection">
        <SortingSelect name="films-sorting" sortings={["По количеству оценок на кинопоиске", "По рейтингу", "По дате выхода", "По алфавиту"]} />
      </section>
      <section>
        <FiltersForm />
      </section>

      <section className="pageSection">
        <Title
          className="sectionTitle"
          tag="h2"
          size="md"
          text="Жанры"
        />
        <GenresSlider items={genres} mode={GenresSliderMode.FULL} />
      </section>

      {collections.map(({id, name, link, items}) => (
        <section key={id} className="pageSection">
          <Link
            href={`/collections/${link}`}
            className={`titleLink sectionTitle`}
          >
            <Title tag="h2" size="md" text={name} />
          </Link>

          <CollectionSlider items={items} link={`collections/${link}`} />
        </section>
      ))}

      <section className="pageSection">
        <Title
          className="sectionTitle"
          tag="h2"
          size="md"
          text="Персоны"
        />

        <ActorsSlider items={actors} />
      </section>
    </MainContainer>
  );
}
