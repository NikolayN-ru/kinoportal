"use client";

import { FC } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "hooks/useTypedSelector";
import Select, { DropdownPosition } from "@components/ui-kit/Select";
import SelectOptionsList from "@components/ui-kit/Select/SelectOptionsList";
import Checkbox from "@components/ui-kit/Checkbox";
import CountriesSlider from "./CountriesSlider";
import { setCountry } from "@redux/filtersApi";

import s from "./FilterCountry.module.scss";

interface FilterCountryProps {
  title: string;
}

const FilterCountry: FC<FilterCountryProps> = ({ title }) => {
  const { items, isLoading } = useTypedSelector(
    ({ filtersDataApi }) => filtersDataApi.countryData
  );

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
      selectedValues={selectedCountries}
      name="country"
      dropdownPosition={DropdownPosition.LEFT}
    >
      <div className={s.optionsWrapper}>
        <CountriesSlider />

        <SelectOptionsList columns={3} separated>
          {(!isLoading &&
            !!items &&
            items.length &&
            items.map(({ id, country }) => {
              const isChecked = selectedCountries.some(
                (selectedCountry) => selectedCountry === country
              );

              return (
                <div key={id} className={s.optionItem}>
                  <Checkbox
                    value={country}
                    text={country}
                    name="country"
                    isChecked={isChecked}
                    onChange={() => onCheckboxChange(country, isChecked)}
                  />
                </div>
              );
            })) ||
            (isLoading && <div>Загрузка...</div>) || (
              <div>Страны не найдены</div>
            )}
        </SelectOptionsList>
      </div>
    </Select>
  );
};

export default FilterCountry;
