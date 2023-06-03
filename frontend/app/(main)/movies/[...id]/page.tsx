"use client";

import { useAllFilmsQuery } from "@redux/filmsApi";
import { useFilterRouting } from "hooks/useFilterRouting";
import PageDescription from "@components/PageDescription";
import { getDescriptionByFilters } from "utils/filters";
import { useTypedSelector } from "hooks/useTypedSelector";
import FilmsList from "@components/FilmsList";
import FiltersForm from "@components/FiltersForm";
import MainContainer from "@components/MainContainer";
import Title from "@components/Title";
import Button, { Border, Size } from "@components/ui-kit/Button";
import { films, filtersData } from "@mock/filmsData";

import s from "./page.module.scss";

export interface PageProps {
  params: { id: string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface PageDescriptionByFilters {
  [key: string]: string;
}

const DEFAULT_PAGE_ID = "all";

const descriptionDefaultByFilters: PageDescriptionByFilters = {
  genre: "Все жанры",
  country: "Все страны",
  year: "Все годы",
};

export default function Home(props: PageProps) {
  useFilterRouting("movies", DEFAULT_PAGE_ID);
  const filtersState = useTypedSelector(({ filtersApi }) => filtersApi.filters);
  const { data, isLoading } = useAllFilmsQuery("");

  console.log(data);

  const pageId = props.params.id;
  const pageTitle =
    pageId[0] === DEFAULT_PAGE_ID ? "Все фильмы смотреть онлайн" : "Фильмы";
  const pageDescriptionItems = getDescriptionByFilters(
    filtersState,
    filtersData,
    descriptionDefaultByFilters
  );

  return (
    <MainContainer>
      <section>
        <Title
          className="descriptionTitle"
          tag="h1"
          size="lg"
          text={pageTitle}
        />
        <PageDescription>
          <div className={s.description}>
            {pageDescriptionItems.map((text) => (
              <span key={text} className={s.descriptionItem}>
                {text}
              </span>
            ))}
          </div>
        </PageDescription>
      </section>

      <section className={s.filters}>
        <FiltersForm showSorting />
      </section>

      <section className={`pageSection ${s.filmsList}`}>
        <FilmsList items={films} />
        <Button
          className={s.loadMore}
          text="Показать еще"
          border={Border.GRAY}
          size={Size.FULL}
        />
      </section>
    </MainContainer>
  );
}
