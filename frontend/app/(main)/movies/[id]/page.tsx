"use client"

import FilmsList from "@components/FilmsList";
import FiltersForm from "@components/FiltersForm";
import MainContainer from "@components/MainContainer";
import Title from "@components/Title";
import Button, { Border, Size } from "@components/ui-kit/Button";
import SortingSelect from "@components/ui-kit/Select/SortingSelect";
import { films } from "@mock/filmsData";

import s from "./page.module.scss";

export default function Home() {
  return (
    <MainContainer>
      <section className="pageSection">
        <Title
          className="sectionTitle"
          tag="h1"
          size="lg"
          text="Фильмы смотреть онлайн"
        />

      </section>

      <section className="pageSection">
        <SortingSelect name="films-sorting" sortings={["По количеству оценок на кинопоиске", "По рейтингу", "По дате выхода", "По алфавиту"]} />
      </section>

      <section>
        <FiltersForm />
      </section>

      <section className="pageSection">
        <FilmsList items={films} />
        <Button className={s.loadMore} text="Показать еще" border={Border.GRAY} size={Size.FULL} />
      </section>
    </MainContainer>
  );
}