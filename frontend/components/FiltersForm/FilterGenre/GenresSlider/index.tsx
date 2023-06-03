import { FC } from "react";
import { SwiperOptions } from "swiper";
import { useDispatch } from "react-redux";
import { SwiperSlide } from "swiper/react";

import { useTypedSelector } from "hooks/useTypedSelector";
import { genresSliderParamsFull, genresSliderParamsMini } from "./parameters";
import { genres, genresIconNames } from "@mock/filmsData";
import Slider from "@components/Slider";
import { setGenre } from "@redux/filtersApi";
import FilterGenreItem, { FilterGenreItemSize } from "../FilterGenreItem";
import { ButtonSize } from "@components/ui-kit/Button/SliderButton";

import s from "./GenresSlider.module.scss";

export enum GenresSliderMode {
  FULL = "full",
  MINI = "mini",
}

interface GenresSliderProps {
  mode: GenresSliderMode;
}

const containerClassName = {
  [GenresSliderMode.FULL]: s.containerFull,
  [GenresSliderMode.MINI]: s.containerMini,
};

const GenresSlider: FC<GenresSliderProps> = ({ mode }) => {
  const selectedGenres = useTypedSelector(
    (state) => state.filtersApi.filters.genre
  );

  const dispatch = useDispatch();

  const onGenreItemClick = (clickedGenre: string, isChecked: boolean) => {
    const updatedSelectedGenres = isChecked
      ? selectedGenres.filter((genre) => genre !== clickedGenre)
      : [...selectedGenres, clickedGenre];

    dispatch(setGenre(updatedSelectedGenres));
  };

  let genresSliderParams: SwiperOptions;
  let buttonSize: ButtonSize;
  let prevClassName: string | undefined;
  let nextClassName: string | undefined;
  let itemSize: FilterGenreItemSize;

  switch (mode) {
    case GenresSliderMode.FULL:
      genresSliderParams = genresSliderParamsFull;
      buttonSize = ButtonSize.MD;
      itemSize = FilterGenreItemSize.LG;
      break;

    case GenresSliderMode.MINI:
      genresSliderParams = genresSliderParamsMini;
      buttonSize = ButtonSize.SM;
      prevClassName = s.sliderPrev;
      nextClassName = s.sliderNext;
      itemSize = FilterGenreItemSize.SM;
      break;
  }

  return (
    <div className={containerClassName[mode]}>
      <Slider
        params={genresSliderParams}
        buttonSize={buttonSize}
        prevClassName={prevClassName}
        nextClassName={nextClassName}
      >
        {genres.map(({ value, title }) => {
          const iconName =
            genresIconNames.find(
              (iconNamesItem) => iconNamesItem.genre === title
            )?.iconName ?? "";

          const isChecked = selectedGenres.some(
            (selectedGenre) => selectedGenre === value
          );

          return (
            <SwiperSlide key={value}>
              <FilterGenreItem
                title={title}
                iconName={iconName}
                size={itemSize}
                isChecked={isChecked}
                onClick={() => onGenreItemClick(value, isChecked)}
              />
            </SwiperSlide>
          );
        })}
      </Slider>
    </div>
  );
};

export default GenresSlider;
