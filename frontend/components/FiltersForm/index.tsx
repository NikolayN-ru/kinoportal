"use client";

import { FC, FormEventHandler, useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

import {
  Filters,
  FiltersApi,
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
import { filtersComponents } from "./filters";
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
  const pathname = usePathname();
  const queryString = useSearchParams().toString();
  const [filtersFull] = useState<FiltersApi>(
    parseFiltersFromURL(pathname, queryString)
  );
  const dispatch = useDispatch();
  const [reset, setReset] = useState<boolean>(false);

  useEffect(() => {
    const { filters, sorting } = filtersFull;
    const { genre, country, year, mark, rating, actor, director } = filters;

    dispatch(setGenre(genre));
    dispatch(setCountry(country));
    dispatch(setYear(year));
    dispatch(setMark(Number(mark)));
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
        {filtersComponents.map(({ filter, component }, index) => {
          const FilterComponent = component;
          return (
            !!FilterComponent && (
              <FilterComponent key={index} title={filter.title} />
            )
          );
        })}

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
