"use client";

import Breadcrumbs from "@components/Breadcrumbs";
import CollectionsSet from "@components/CollectionsSet";
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

import s from "./page.module.scss";

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

      <CollectionsSet startNumber={2} endNumber={3} />

      <section className="pageSection">
        <Title className="sectionTitle" tag="h2" size="md" text="Персоны" />

        {(!isLoading && !!data && data.length && (
          <ActorsSlider items={data} />
        )) ||
          (isLoading && <div>Загружаем список актёров...</div>) || (
            <div>Актёры не найдены</div>
          )}
      </section>
    </MainContainer>
  );
}
