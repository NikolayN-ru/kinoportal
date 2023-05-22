import { FC } from "react";
import { SwiperSlide } from "swiper/react";

import Slider from "..";
import { Actor } from "@components/types/actor";
import ActorCard from "@components/ActorCard";
import { actorsSliderParams } from "./parameters";

import s from "./ActorsSlider.module.scss";

interface ActorsSliderProps {
  items: Actor[];
}

const ActorsSlider: FC<ActorsSliderProps> = ({items}) => {
  return (
    <div className={s.container}>
      <Slider
        className={s.sliderWrapper}
        params={actorsSliderParams}
        withTitles={true}
        nextClassName={s.sliderNext}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <ActorCard key={item.id} data={item} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default ActorsSlider;
