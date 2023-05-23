"use client";

import { FC } from "react";

import { FilterProps } from "@components/types/filters";
import Select from "@components/ui-kit/Select";
import SelectOptionsList from "@components/ui-kit/Select/SelectOptionsList";
import Checkbox from "@components/ui-kit/Checkbox";
import {
  UseCheckboxChangingResult,
  useCheckboxChanging,
} from "hooks/useCheckboxChanging";

import s from "./FiltersGenre.module.scss";
import GenresSlider from "./GenresSlider";

const genres: string[] = [
  "Артхаус",
  "Биография",
  "Боевики",
  "Вестерн",
  "Военные",
  "Детективы",
  "Для детей",
  "Документальные",
  "Драмы",
  "Зарубежные",
  "Исторические",
  "Катастрофы",
  "Комедии",
  "Криминал",
  "Мелодрамы",
  "Мистические",
  "Музыкальные",
  "По комиксам",
  "Приключения",
  "Русские",
  "Семейные",
  "Советские",
  "Спорт",
  "Триллеры",
  "Ужасы",
  "Фантастика",
  "Фэнтези",
];

const SELECTED_OPTIONS_DEFAULT: string[] = [];

const FilterGenre: FC<FilterProps> = ({ title }) => {
  const [selectedOptions, onCheckboxChange] = useCheckboxChanging(
    SELECTED_OPTIONS_DEFAULT
  );

  return (
    <Select title={title} selectedValues={selectedOptions} name="genre">
      <div className={s.optionsWrapper}>
        <GenresSlider items={genres} />

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
