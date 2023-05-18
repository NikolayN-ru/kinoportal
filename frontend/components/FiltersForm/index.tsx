"use client";

import { FC } from "react";

import { filtersComponents } from "./filters";
import FilterRating from "./FilterRating";
import FilterMarks from "./FilterMarks";
import SearchInput from "@components/ui-kit/SearchInput";
import ResetButton from "@components/ui-kit/Button/ResetButton";

import s from "./FiltersForm.module.scss";

const FiltersForm: FC = () => {
  return (
    <form>
      <div className={`${s.mainContainer} ${s.section}`}>
        {filtersComponents.map(({ title, component }, index) => {
          const FilterComponent = component;
          return (
            !!FilterComponent && <FilterComponent key={index} title={title} />
          );
        })}

        <div className={`${s.rangeItems} ${s.section}`}>
          <div className={s.rangeContainer}>
            <FilterRating />
          </div>

          <div className={s.rangeContainer}>
            <FilterMarks />
          </div>
        </div>

        <div className={`${s.searchItems} ${s.section}`}>
          <SearchInput placeholder="Режиссёр" name="director" />
          <SearchInput placeholder="Актёр" name="actor" />
        </div>

        <div className={s.resetButtonContainer}>
          <ResetButton text="Сбросить фильтры" disabled />
        </div>
      </div>
    </form>
  );
};

export default FiltersForm;
