"use client";

import { FC } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "hooks/useTypedSelector";
import { setYear } from "@redux/filtersApi";
import { FilterYear } from "@components/types/filters";
import Select, { DropdownPosition } from "@components/ui-kit/Select";
import Radio from "@components/ui-kit/Radio";
import SelectOptionsList from "@components/ui-kit/Select/SelectOptionsList";
import { getYearsTitleByValue, isSelectedYears } from "utils/filters";

import s from "./FilterYear.module.scss";

interface FilterYearProps {
  title: string;
  items: FilterYear[];
}

const FilterYear: FC<FilterYearProps> = ({ title, items }) => {
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
      selectedValues={[getYearsTitleByValue(items, selectedYears)]}
      name="year"
      dropdownPosition={DropdownPosition.LEFT}
    >
      <div className={s.optionsWrapper}>
        <SelectOptionsList columns={1}>
          {items.map(({ value, title }) => {
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
