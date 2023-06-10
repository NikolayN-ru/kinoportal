"use client";

import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "hooks/useTypedSelector";
import { setGenre } from "@redux/filtersApi";
import Select from "@components/ui-kit/Select";
import GenresSlider, { GenresSliderMode } from "./GenresSlider";
import SelectOptionsList, {
  ColumnsCount,
} from "@components/ui-kit/Select/SelectOptionsList";
import Checkbox from "@components/ui-kit/Checkbox";
import { capitalizeFirstLetter } from "utils";

import s from "./FiltersGenre.module.scss";

interface FilterGenreProps {
  title: string;
}

const FilterGenre: FC<FilterGenreProps> = ({ title }) => {
  const { items, isLoading } = useTypedSelector(
    ({ filtersDataApi }) => filtersDataApi.genreData
  );

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

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  let columnsCount: ColumnsCount;

  if (isMobile) {
    columnsCount = 1;
  } else if (isTablet) {
    columnsCount = 2;
  } else {
    columnsCount = 3;
  }

  return (
    <Select title={title} selectedValues={selectedGenres} name="genre">
      <div className={s.optionsWrapper}>
        <GenresSlider mode={GenresSliderMode.MINI} />

        <SelectOptionsList columns={columnsCount} separated>
          {(!isLoading &&
            !!items &&
            items.length &&
            items.map(({ id, genre }) => {
              const isChecked = selectedGenres.some(
                (selectedGenre) => selectedGenre === genre
              );

              return (
                <div key={id} className={s.optionItem}>
                  <Checkbox
                    value={genre}
                    text={capitalizeFirstLetter(genre)}
                    name="genre"
                    isChecked={isChecked}
                    onChange={() => onCheckboxChange(genre, isChecked)}
                  />
                </div>
              );
            })) ||
            (isLoading && <div>Загрузка...</div>) || (
              <div>Жанры не найдены</div>
            )}
        </SelectOptionsList>
      </div>
    </Select>
  );
};

export default FilterGenre;
