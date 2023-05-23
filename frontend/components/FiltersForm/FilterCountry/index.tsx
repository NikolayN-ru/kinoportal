"use client";

import { FC } from "react";

import { FilterProps } from "@components/types/filters";
import Select from "@components/ui-kit/Select";
import SelectOptionsList from "@components/ui-kit/Select/SelectOptionsList";
import Checkbox from "@components/ui-kit/Checkbox";
import { useCheckboxChanging } from "hooks/useCheckboxChanging";

import s from "./FilterCountry.module.scss";
import CountriesSlider from "./CountriesSlider";

const countries = [
  "Австралия",
  "Аргентина",
  "Армения",
  "Беларусь",
  "Бельгия",
  "Бразилия",
  "Великобритания",
  "Венгрия",
  "Германия",
  "Гонконг",
  "Дания",
  "Индия",
  "Ирландия",
  "Испания",
  "Италия",
  "Казахстан",
  "Канада",
  "Китай",
  "Колумбия",
  "Мексика",
  "Нидерланды",
  "Новая Зеландия",
  "Норвегия",
  "Польша",
  "Россия",
  "СССР",
  "США",
  "Таиланд",
  "Турция",
  "Финляндия",
  "Франция",
  "Швейцария",
  "Швеция",
  "ЮАР",
  "Южная Корея",
  "Япония",
];

const SELECTED_OPTIONS_DEFAULT: string[] = [];

const FilterCountry: FC<FilterProps> = ({ title }) => {
  const [selectedOptions, onCheckboxChange] = useCheckboxChanging(
    SELECTED_OPTIONS_DEFAULT
  );

  return (
    <Select title={title} selectedValues={selectedOptions} name="country">
      <div className={s.optionsWrapper}>
        <CountriesSlider items={countries} />

        <SelectOptionsList columns={3} separated>
          {countries.map((country) => {
            const isChecked = selectedOptions.some(
              (option) => option === country
            );

            return (
              <div key={country} className={s.optionItem}>
                <Checkbox
                  value={country}
                  text={country}
                  name="country"
                  isChecked={isChecked}
                  onChange={() => onCheckboxChange(country, isChecked)}
                />
              </div>
            );
          })}
        </SelectOptionsList>
      </div>
    </Select>
  );
};

export default FilterCountry;
