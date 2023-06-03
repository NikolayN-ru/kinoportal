"use client";

import { FC } from "react";
import { useDispatch } from "react-redux";

import { FilterProps } from "@components/types/filters";
import { useTypedSelector } from "hooks/useTypedSelector";
import { setGenre } from "@redux/filtersApi";
import Select from "@components/ui-kit/Select";
import GenresSlider, { GenresSliderMode } from "./GenresSlider";
import SelectOptionsList from "@components/ui-kit/Select/SelectOptionsList";
import Checkbox from "@components/ui-kit/Checkbox";
import { genres } from "@mock/filmsData";
import { getGenresTitlesByValues } from "utils/filters";

import s from "./FiltersGenre.module.scss";

const FilterGenre: FC<FilterProps> = ({ title }) => {
  const selectedGenres = useTypedSelector(
    (state) => state.filtersApi.filters.genre
  );

  const dispatch = useDispatch();

  const onCheckboxChange = (clickedGenre: string, isChecked: boolean) => {
    const updatedSelectedGenres = isChecked
      ? selectedGenres.filter((genre) => genre !== clickedGenre)
      : [...selectedGenres, clickedGenre];

    dispatch(setGenre(updatedSelectedGenres));
  };

  return (
    <Select
      title={title}
      selectedValues={getGenresTitlesByValues(genres, selectedGenres)}
      name="genre"
    >
      <div className={s.optionsWrapper}>
        <GenresSlider mode={GenresSliderMode.MINI} />

        <SelectOptionsList columns={3} separated>
          {genres.map(({ value, title }) => {
            const isChecked = selectedGenres.some(
              (selectedGenre) => selectedGenre === value
            );

            return (
              <div key={value} className={s.optionItem}>
                <Checkbox
                  value={value}
                  text={title}
                  name="genre"
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

export default FilterGenre;
