import { FC } from "react";
import { SwiperOptions } from "swiper";

import { genresSliderParamsFull, genresSliderParamsMini } from "./parameters";
import { genresIconNames } from "@mock/filmsData";
import Slider from "@components/Slider";
import { SwiperSlide } from "swiper/react";
import FilterGenreItem, { FilterGenreItemSize } from "../FilterGenreItem";
import { ButtonSize } from "@components/ui-kit/Button/SliderButton";

import s from "./GenresSlider.module.scss";

export enum GenresSliderMode {
  FULL = "full",
  MINI = "mini",
}

interface GenresSliderProps {
  items: string[];
  mode: GenresSliderMode;
}

const containerClassName = {
  [GenresSliderMode.FULL]: s.containerFull,
  [GenresSliderMode.MINI]: s.containerMini,
};

const GenresSlider: FC<GenresSliderProps> = ({ items, mode }) => {
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
        {items.map((item) => {
          const iconName =
            genresIconNames.find(
              (iconNamesItem) => iconNamesItem.genre === item
            )?.iconName ?? "";

          return (
            <SwiperSlide key={item}>
              <FilterGenreItem
                title={item}
                iconName={iconName}
                size={itemSize}
              />
            </SwiperSlide>
          );
        })}
      </Slider>
    </div>
  );
};

export default GenresSlider;
