import { FC } from "react";

import Slider from "@components/Slider";
import { SwiperOptions } from "swiper";
import { SwiperSlide } from "swiper/react";
import { breakpoints } from "@components/Slider/SliderParams";

import s from "./GenresSlider.module.scss";
import FilterGenreItem from "../FilterGenreItem";
import { ButtonSize } from "@components/ui-kit/Button/SliderButton";

interface GenresSliderProps {
  items: string[];
}

const genresIconNames = [
  {
    genre: "Комедии",
    iconName: "comedyMask",
  },
  {
    genre: "Драмы",
    iconName: "dramaMask",
  },
  {
    genre: "Триллеры",
    iconName: "thriller",
  },
  {
    genre: "Приключения",
    iconName: "adventures",
  },
  {
    genre: "Зарубежные",
    iconName: "globe",
  },
  {
    genre: "Мелодрамы",
    iconName: "hearts",
  },
  {
    genre: "Фантастика",
    iconName: "sciFi",
  },
  {
    genre: "Фэнтези",
    iconName: "fantasy",
  },
  {
    genre: "Семейные",
    iconName: "family",
  },
  {
    genre: "Боевики",
    iconName: "gun",
  },
];

const genresSliderParams: SwiperOptions = {
  breakpoints: {
    [breakpoints.md]: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
    [breakpoints.lg]: {
      slidesPerView: 5,
      slidesPerGroup: 2,
      allowTouchMove: false,
    },
    [breakpoints.xl]: {
      slidesPerView: 5,
      slidesPerGroup: 2,
      allowTouchMove: false,
    },
  },
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 12,
  allowTouchMove: true,
};

const GenresSlider: FC<GenresSliderProps> = ({ items }) => {
  return (
    <div className={s.container}>
      <Slider
        params={genresSliderParams}
        buttonSize={ButtonSize.SM}
        prevClassName={s.sliderPrev}
        nextClassName={s.sliderNext}
      >
        {items.map((item) => {
          const iconName =
            genresIconNames.find(
              (iconNamesItem) => iconNamesItem.genre === item
            )?.iconName ?? "";

          return (
            <SwiperSlide key={item}>
              <FilterGenreItem title={item} iconName={iconName} />
            </SwiperSlide>
          );
        })}
      </Slider>
    </div>
  );
};

export default GenresSlider;
