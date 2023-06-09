"use client";

import { FC, FormEventHandler, useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

import FilterGenre from "./FilterGenre";
import FilterCountry from "./FilterCountry";
import FilterYear from "./FilterYear";
import { years } from "./filters";
import { useAllFilmsCountriesQuery, useAllFilmsGenresQuery } from "@redux/filmsApi";
import { useTypedSelector } from "hooks/useTypedSelector";
import { setCountryData, setGenreData } from "@redux/filtersDataApi";
import {
  resetFilters,
  setActor,
  setCountry,
  setDirector,
  setGenre,
  setMark,
  setRating,
  setSorting,
  setYear,
} from "@redux/filtersApi";
import FilmsSorting from "./FilmsSorting";
import FilterRating from "./FilterRating";
import FilterMarks from "./FilterMarks";
import SearchDirector from "./SearchDirector";
import SearchActor from "./SearchActor";
import ResetButton from "@components/ui-kit/Button/ResetButton";
import { parseFiltersFromURL } from "utils/filters";

import s from "./FiltersForm.module.scss";

interface FiltersFormProps {
  showSorting?: boolean;
  resetDisabled?: boolean;
}

const FiltersForm: FC<FiltersFormProps> = ({ showSorting, resetDisabled }) => {
  const allFilmsGenres = useAllFilmsGenresQuery("");
  const genres = allFilmsGenres.data;
  const genresIsLoading = allFilmsGenres.isLoading;

  const allFilmsCountries = useAllFilmsCountriesQuery("");
  const countries = allFilmsCountries.data;
  const countriesIsLoading = allFilmsCountries.isLoading;

  const dispatch = useDispatch();

  const {genreData, countryData} = useTypedSelector(({filtersDataApi}) => filtersDataApi);

  useEffect(() => {
    dispatch(setGenreData({items: genres, isLoading: genresIsLoading}));
  }, [genres, genresIsLoading]);

  useEffect(() => {
    dispatch(setCountryData({items: countries, isLoading: countriesIsLoading}));
  }, [countries, countriesIsLoading]);

  const pathname = usePathname();
  const queryString = useSearchParams().toString();
  const filtersFull = useMemo(
    () => parseFiltersFromURL(
      decodeURIComponent(pathname),
      decodeURIComponent(queryString),
      {
        genres: genreData.items || [],
        countries: countryData.items || []
      }
    ),
    [pathname, queryString, genreData, countryData]
  );
  
  const [reset, setReset] = useState<boolean>(false);
 
  useEffect(() => {
    const { filters, sorting } = filtersFull;
    const { genre, country, year, votes, rating, actor, director } = filters;

    dispatch(setGenre(genre));
    dispatch(setCountry(country));
    dispatch(setYear(year));
    dispatch(setMark(Number(votes)));
    dispatch(setRating(rating));
    dispatch(setActor(actor));
    dispatch(setDirector(director));
    dispatch(setSorting(sorting));
  }, [filtersFull]);

  const onFiltersReset: FormEventHandler<HTMLFormElement> = () => {
    dispatch(resetFilters());
    setReset(true);
  };

  return (
    <form onReset={onFiltersReset}>
      {showSorting && (
        <div className="pageSection">
          <FilmsSorting />
        </div>
      )}
      <div className={`${s.mainContainer} ${s.section}`}>
        <FilterGenre title="Жанры" />
        <FilterCountry title="Страны" />
        <FilterYear title="Годы" items={years} />

        <div className={`${s.rangeItems} ${s.section}`}>
          <div className={s.rangeContainer}>
            <FilterRating reset={reset} setReset={setReset} />
          </div>

          <div className={s.rangeContainer}>
            <FilterMarks reset={reset} setReset={setReset} />
          </div>
        </div>

        <div className={`${s.searchItems} ${s.section}`}>
          <SearchDirector reset={reset} setReset={setReset} />
          <SearchActor reset={reset} setReset={setReset} />
        </div>

        <div className={s.resetButtonContainer}>
          <ResetButton text="Сбросить фильтры" disabled={resetDisabled} />
        </div>
      </div>
    </form>
  );
};

export default FiltersForm;
