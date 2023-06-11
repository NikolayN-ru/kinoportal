"use client";

import { useMemo, useState } from "react";

import { useFilteredFilmsQuery } from "@redux/filmsApi";
import { useFilterRouting } from "hooks/useFilterRouting";
import { useTypedSelector } from "hooks/useTypedSelector";
import {
  getDescriptionByFilters,
  getServerQueryStringFromFilters,
} from "utils/filters";
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

const FILMS_ON_PAGE = 20;
const CURRENT_PAGE_INIT = 1;

export default function Home(props: PageProps) {
  useFilterRouting("movies", DEFAULT_PAGE_ID);
  const { filters, sorting } = useTypedSelector(({ filtersApi }) => filtersApi);
  const { genre, country, year } = filters;

  const [currentPage, setCurrentPage] = useState(CURRENT_PAGE_INIT);
  const limitEnd = currentPage * FILMS_ON_PAGE + 1;
  const limitQueryString = `limitStart=0&limitEnd=${limitEnd}`;

  const filterQueryString = useMemo(
    () => getServerQueryStringFromFilters({ filters, sorting }),
    [filters, sorting]
  );

  const { data, isLoading } = useFilteredFilmsQuery(
    [filterQueryString, limitQueryString].join("&")
  );

  const pageDescription = useMemo(
    () =>
      getDescriptionByFilters(
        { selectedGenre: genre, selectedCountry: country, selectedYear: year },
        descriptionByFiltersInit
      ),
    [genre, country, year]
  );

  const breadcrumbs = useMemo(() => {
    const breadcrumbsFromFilters = getBreadcrumbsFromFilters({
      selectedGenre: genre,
      selectedCountry: country,
      selectedYear: year,
    });

    if (breadcrumbsFromFilters && breadcrumbsFromFilters.length) {
      return [
        ...breadcrumbsInit,
        { title: "Фильмы", link: "/movies" },
        ...breadcrumbsFromFilters,
      ];
    }

    return [...breadcrumbsInit, { title: "Фильмы" }];
  }, [genre, country, year]);

  const onShowMoreClick = (): void => {
    setCurrentPage(currentPage + 1);
  };

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
          <div className={s.description}>{pageDescription}</div>
        </PageDescription>
      </section>

      <section className={s.filters}>
        <FiltersForm showSorting />
      </section>

      <section className={`pageSection ${s.filmsList}`}>
        {(!isLoading && !!data && data.length && (
          <>
            <FilmsList items={data.slice(0, limitEnd - 1)} />

            {data.length === limitEnd && (
              <Button
                className={s.loadMore}
                text="Показать еще"
                border={Border.GRAY}
                size={Size.FULL}
                onClick={onShowMoreClick}
              />
            )}
          </>
        )) ||
          (isLoading && <div>Загрузка...</div>) || (
            <div className="itemsNotFound">Фильмы не найдены</div>
          )}
      </section>
    </MainContainer>
  );
}
