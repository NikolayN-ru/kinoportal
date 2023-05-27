"use client";

import { FC } from "react";

import { FilterProps } from "@components/types/filters";
import Select from "@components/ui-kit/Select";
import GenresSlider, { GenresSliderMode } from "./GenresSlider";
import SelectOptionsList from "@components/ui-kit/Select/SelectOptionsList";
import Checkbox from "@components/ui-kit/Checkbox";
import { useCheckboxChanging } from "hooks/useCheckboxChanging";
import { genres } from "@mock/filmsData";

import s from "./FiltersGenre.module.scss";

const SELECTED_OPTIONS_DEFAULT: string[] = [];

const FilterGenre: FC<FilterProps> = ({ title }) => {
  const [selectedOptions, onCheckboxChange] = useCheckboxChanging(
    SELECTED_OPTIONS_DEFAULT
  );

  return (
    <Select title={title} selectedValues={selectedOptions} name="genre">
      <div className={s.optionsWrapper}>
        <GenresSlider items={genres} mode={GenresSliderMode.MINI} />

        <SelectOptionsList columns={3} separated>
          {genres.map((genre) => {
            const isChecked = selectedOptions.some(
              (option) => option === genre
            );

            return (
              <div key={genre} className={s.optionItem}>
                <Checkbox
                  value={genre}
                  text={genre}
                  name="genre"
                  isChecked={isChecked}
                  onChange={() => onCheckboxChange(genre, isChecked)}
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
