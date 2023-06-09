"use client";

import { useMemo } from "react";

import { useFilteredFilmsQuery } from "@redux/filmsApi";
import { useFilterRouting } from "hooks/useFilterRouting";
import { useTypedSelector } from "hooks/useTypedSelector";
import { getDescriptionByFilters, getServerQueryStringFromFilters } from "utils/filters";
import PageDescription from "@components/PageDescription";
import FilmsList from "@components/FilmsList";
import FiltersForm from "@components/FiltersForm";
import MainContainer from "@components/MainContainer";
import Title from "@components/Title";
import Button, { Border, Size } from "@components/ui-kit/Button";
import Breadcrumbs, { Breadcrumb } from "@components/Breadcrumbs";
import { getBreadcrumbsFromFilters } from "utils/breadcrumbs";

import s from "./page.module.scss";

export interface PageProps {
  params: { id: string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface PageDescriptionByFilters {
  [key: string]: string;
}

export type PageDescription = {
  selectedGenre: string;
  selectedCountry: string;
  selectedYear: string;
};

const DEFAULT_PAGE_ID = "all";

const descriptionByFiltersInit: PageDescription = {
  selectedGenre: "Все жанры",
  selectedCountry: "Все страны",
  selectedYear: "Все годы",
};

const breadcrumbsInit: Breadcrumb[] = [
  {
    title: "Мой Иви",
    link: "/",
  },
];

export default function Home(props: PageProps) {
  useFilterRouting("movies", DEFAULT_PAGE_ID);
  const { filters, sorting } = useTypedSelector(({ filtersApi }) => filtersApi);
  const { genre, country, year } = filters;

  const queryString = useMemo(() => getServerQueryStringFromFilters({filters, sorting}), [filters, sorting]);

  const { data, isLoading } = useFilteredFilmsQuery(queryString);

  const pageDescription = useMemo(
    () =>
      getDescriptionByFilters(
        { selectedGenre: genre, selectedCountry: country, selectedYear: year },
        descriptionByFiltersInit
      ),
    [genre, country, year]
  );

  const breadcrumbs = useMemo(() => {
    const breadcrumbsFromFilters = getBreadcrumbsFromFilters(
      { selectedGenre: genre, selectedCountry: country, selectedYear: year }
    );

    if (breadcrumbsFromFilters && breadcrumbsFromFilters.length) {
      return [
        ...breadcrumbsInit,
        { title: "Фильмы", link: "/movies" },
        ...breadcrumbsFromFilters,
      ];
    }

    return [...breadcrumbsInit, { title: "Фильмы" }];
  }, [genre, country, year]);

  /*const breadcrumbs = useMemo(() => {
    const breadcrumbsFromParams = getBreadcrumbsFromDescription(
      pageDescription,
      Object.values(descriptionByFiltersInit)
    );

    if (breadcrumbsFromParams && breadcrumbsFromParams.length) {
      return [
        ...breadcrumbsInit,
        { title: "Фильмы", link: "/movies" },
        ...breadcrumbsFromParams,
      ];
    }

    return [...breadcrumbsInit, { title: "Фильмы" }];
  }, [pageDescription]);*/

  const pageId = props.params.id;
  const pageTitle =
    pageId[0] === DEFAULT_PAGE_ID ? "Все фильмы смотреть онлайн" : "Фильмы";

  return (
    <MainContainer>
      <section className={s.headerSection}>
        {<Breadcrumbs items={breadcrumbs} />}
        <Title
          className="descriptionTitle"
          tag="h1"
          size="lg"
          text={pageTitle}
        />
        <PageDescription>
          <div className={s.description}>
            {/*pageDescription.map((text) => (
              <span key={text} className={s.descriptionItem}>
                {text}
              </span>
            ))*/}
            {pageDescription}
          </div>
        </PageDescription>
      </section>

      <section className={s.filters}>
        <FiltersForm showSorting />
      </section>

      <section className={`pageSection ${s.filmsList}`}>
        {!isLoading && !!data && data.length && (
          <>
            <FilmsList items={data} />
            <Button
              className={s.loadMore}
              text="Показать еще"
              border={Border.GRAY}
              size={Size.FULL}
            />
          </>
        ) || isLoading && (
          <div>Загрузка...</div>
        ) || <div>Фильмы не найдены</div>}
      </section>
    </MainContainer>
  );
}
