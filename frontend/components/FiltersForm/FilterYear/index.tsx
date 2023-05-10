"use client";

import { ChangeEventHandler, FC, useState } from "react";

import { FilterProps } from "@components/types/filters";
import { useCheckboxChanging } from "hooks/useCheckboxChanging";
import Select from "@components/ui-kit/Select";
import SelectOptionsList from "@components/ui-kit/Select/SelectOptionsList";
import Radio from "@components/ui-kit/Radio";

import s from "./FilterYear.module.scss";

const years = [
  "Все годы",
  "2023 год",
  "2022 год",
  "2021 год",
  "2020 год",
  "2019 год",
  "2018 год",
  "2017 год",
  "2016 год",
  "2022-2023",
  "2021-2022",
  "2020-2022",
  "2019-2020",
  "2010-2020",
  "2010-2015",
  "2000-2010",
  "1990-2000",
  "1980-1990",
  "до 1980",
];

const SELECTED_OPTION_DEFAULT: string | null = null;

const FilterYear: FC<FilterProps> = ({ title }) => {
  const [selectedYear, setSelectedYear] = useState<string | null>(
    SELECTED_OPTION_DEFAULT
  );

  return (
    <Select
      title={title}
      selectedValues={(selectedYear && [selectedYear]) || []}
      name="year"
    >
      <div className={s.optionsWrapper}>
        <SelectOptionsList columns={1}>
          {years.map((year) => {
            const isChecked = year === selectedYear;

            return (
              <div key={year} className={s.optionItem}>
                <Radio
                  value={year}
                  text={year}
                  name="year"
                  isChecked={isChecked}
                  onChange={() => setSelectedYear(year)}
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
