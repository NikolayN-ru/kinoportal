"use client";

import { FC } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "hooks/useTypedSelector";
import { FilterProps } from "@components/types/filters";
import Select from "@components/ui-kit/Select";
import SelectOptionsList from "@components/ui-kit/Select/SelectOptionsList";
import Checkbox from "@components/ui-kit/Checkbox";
import CountriesSlider from "./CountriesSlider";
import { setCountry } from "@redux/filtersApi";
import { countries } from "@mock/filmsData";
import { getCountriesTitlesByValues } from "utils/filters";

import s from "./FilterCountry.module.scss";

const FilterCountry: FC<FilterProps> = ({ title }) => {
  const selectedCountries = useTypedSelector(
    (state) => state.filtersApi.filters.country
  );

  const dispatch = useDispatch();

  const onCheckboxChange = (clickedCountry: string, isChecked: boolean) => {
    const updatedSelectedCountries = isChecked
      ? selectedCountries.filter((country) => country !== clickedCountry)
      : [...selectedCountries, clickedCountry];

    dispatch(setCountry(updatedSelectedCountries));
  };

  return (
    <Select
      title={title}
      selectedValues={getCountriesTitlesByValues(countries, selectedCountries)}
      name="country"
    >
      <div className={s.optionsWrapper}>
        <CountriesSlider />

        <SelectOptionsList columns={3} separated>
          {countries.map(({ value, title }) => {
            const isChecked = selectedCountries.some(
              (selectedCountry) => selectedCountry === value
            );

            return (
              <div key={value} className={s.optionItem}>
                <Checkbox
                  value={value}
                  text={title}
                  name="country"
                  isChecked={isChecked}
                  onChange={() => onCheckboxChange(value, isChecked)}
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
