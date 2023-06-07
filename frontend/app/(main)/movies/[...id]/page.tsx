"use client";

import { useMemo } from "react";

import { useAllFilmsQuery } from "@redux/filmsApi";
import { useFilterRouting } from "hooks/useFilterRouting";
import { useTypedSelector } from "hooks/useTypedSelector";
import { getDescriptionByFilters } from "utils/filters";
import PageDescription from "@components/PageDescription";
import FilmsList from "@components/FilmsList";
import FiltersForm from "@components/FiltersForm";
import MainContainer from "@components/MainContainer";
import Title from "@components/Title";
import Button, { Border, Size } from "@components/ui-kit/Button";
import { filtersData } from "@mock/filmsData";
import Breadcrumbs, { Breadcrumb } from "@components/Breadcrumbs";
import { getBreadcrumbsFromDescription } from "utils/breadcrumbs";

import s from "./page.module.scss";

export interface PageProps {
  params: { id: string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface PageDescriptionByFilters {
  [key: string]: string;
}

type PageDescription = {
  genre: string;
  country: string;
  year: string;
};

const DEFAULT_PAGE_ID = "all";

const descriptionByFiltersInit: PageDescription = {
  genre: "Все жанры",
  country: "Все страны",
  year: "Все годы",
};

const breadcrumbsInit: Breadcrumb[] = [
  {
    title: "Мой Иви",
    link: "/",
  },
];

export default function Home(props: PageProps) {
  useFilterRouting("movies", DEFAULT_PAGE_ID);
  const { genre, country, year } = useTypedSelector(
    ({ filtersApi }) => filtersApi.filters
  );
  const { data, isLoading } = useAllFilmsQuery("");

  const pageDescription = useMemo(
    () =>
      getDescriptionByFilters(
        { genre, country, year },
        filtersData,
        descriptionByFiltersInit
      ),
    [genre, country, year]
  );

  const breadcrumbs = useMemo(() => {
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
  }, [pageDescription]);

  const pageId = props.params.id;
  const pageTitle =
    pageId[0] === DEFAULT_PAGE_ID ? "Все фильмы смотреть онлайн" : "Фильмы";

  return (
    <MainContainer>
      <section className={s.headerSection}>
        <Breadcrumbs items={breadcrumbs} />
        <Title
          className="descriptionTitle"
          tag="h1"
          size="lg"
          text={pageTitle}
        />
        <PageDescription>
          <div className={s.description}>
            {pageDescription.map((text) => (
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
