"use client";

import { FC } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "hooks/useTypedSelector";
import { setYear } from "@redux/filtersApi";
import { FilterProps } from "@components/types/filters";
import Select from "@components/ui-kit/Select";
import Radio from "@components/ui-kit/Radio";
import SelectOptionsList from "@components/ui-kit/Select/SelectOptionsList";
import { years } from "@mock/filmsData";
import { getYearsTitleByValue, isSelectedYears } from "utils/filters";

import s from "./FilterYear.module.scss";

const FilterYear: FC<FilterProps> = ({ title }) => {
  const selectedYears = useTypedSelector(
    ({ filtersApi }) => filtersApi.filters.year
  );

  const dispatch = useDispatch();

  const onRadioChange = (yearsValue: number[]): void => {
    if (isSelectedYears(yearsValue, selectedYears)) return;
    dispatch(setYear(yearsValue));
  };

  return (
    <Select
      title={title}
      selectedValues={[getYearsTitleByValue(years, selectedYears)]}
      name="year"
    >
      <div className={s.optionsWrapper}>
        <SelectOptionsList columns={1}>
          {years.map(({ value, title }) => {
            const isChecked = isSelectedYears(value, selectedYears);

            return (
              <div key={title} className={s.optionItem}>
                <Radio
                  value={title}
                  text={title}
                  name="year"
                  isChecked={isChecked}
                  onChange={() => onRadioChange(value)}
                />
              </div>
            );
          })}
        </SelectOptionsList>
      </div>
    </Select>
  );
};

export default FilterYear;
