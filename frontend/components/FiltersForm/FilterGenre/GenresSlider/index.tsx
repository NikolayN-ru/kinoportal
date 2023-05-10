import { FC } from "react";

import { SwiperOptions } from "swiper";
import Slider from "@components/Slider";

import s from "./GenresSlider.module.scss";
import { SwiperSlide } from "swiper/react";

interface GenresSliderProps {
  items: string[];
}

const genresSliderParams: SwiperOptions = {};

const GenresSlider: FC<GenresSliderProps> = ({ items }) => {
  return (
    <div className={s.container}>
      <Slider params={genresSliderParams}>
        {items.map((item) => (
          <SwiperSlide key={item}>{item}</SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default GenresSlider;
