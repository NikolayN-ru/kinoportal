"use client";

import Link from "next/link";

import Breadcrumbs from "@components/Breadcrumbs";
import { useAllActorsQuery } from "@redux/actorApi";
import { useFilterRouting } from "hooks/useFilterRouting";
import FiltersForm from "@components/FiltersForm";
import MainContainer from "@components/MainContainer";
import PageDescription, { PageNames } from "@components/PageDescription";
import Title from "@components/Title";
import GenresSlider, {
  GenresSliderMode,
} from "@components/FiltersForm/FilterGenre/GenresSlider";
import ActorsSlider from "@components/Slider/ActorsSlider";
import CollectionSlider from "@components/Slider/CollectionSlider";
import { collections } from "@mock/filmsData";
import { actors } from "@mock/actors";

import s from "./page.module.scss";
import { useEffect } from "react";

const breadcrumbs = [
  {
    title: "Мой Иви",
    link: "/",
  },
  {
    title: "Фильмы",
  },
];

export default function Home() {
  useFilterRouting("movies", "");
  const { data, isLoading } = useAllActorsQuery("");
  console.log("ACTORS > ", data);

  useEffect(() => {


  }, []);

  return (
    <MainContainer>
      <section className={s.headerSection + " aboutSection"}>
        <Breadcrumbs items={breadcrumbs} />
        <Title
          className="descriptionTitle"
          tag="h1"
          size="lg"
          text="Фильмы смотреть онлайн"
        />
        <PageDescription page={PageNames.MOVIES} />
      </section>

      <section className={s.filters}>
        <FiltersForm resetDisabled />
      </section>

      <section className={`pageSection ${s.genresSlider}`}>
        <Title className="sectionTitle" tag="h2" size="md" text="Жанры" />
        <GenresSlider mode={GenresSliderMode.FULL} />
      </section>

      {collections.map(({ id, name, link, items }) => (
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
        <Title className="sectionTitle" tag="h2" size="md" text="Персоны" />

        {!isLoading && !!data &&
        <ActorsSlider items={data} />}
      </section>
    </MainContainer>
  );
}
