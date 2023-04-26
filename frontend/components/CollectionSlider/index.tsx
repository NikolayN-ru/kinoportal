import { FC, createContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { SwiperOptions, Navigation } from "swiper";

import FilmCard from "@components/FilmCard";
import { CollectionFilm } from "../types/film";
import { useTooltip } from "../../hooks/useTooltip";
import Tooltip from "../Tooltip";
import { TooltipContextValue } from "../types/tooltip";
import SliderButton from "../SliderButton";

import "swiper/scss";
import "swiper/scss/navigation";
import s from "./CollectionSlider.module.scss";

interface CollectionSliderProps {
  items: CollectionFilm[];
}

export const TooltipContext = createContext<TooltipContextValue>(null);

const CollectionSlider: FC<CollectionSliderProps> = ({ items }) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const swiperParams: SwiperOptions = {
    breakpoints: {},
    spaceBetween: 24,
    slidesPerView: 7,
    modules: [Navigation],
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
      disabledClass: s.navButtonDisabled,
    },
    slidesPerGroup: 6,
    speed: 500,
    allowTouchMove: false,
    watchOverflow: false,
  };

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [tooltip, showTooltip, hideTooltip] = useTooltip(
    sliderContainerRef.current
  );

  return (
    <div className={s.container} ref={sliderContainerRef}>
      {tooltip.isVisible && <Tooltip {...tooltip.options} />}
      <SliderButton direction={"prev"} ref={navigationPrevRef} />
      <SliderButton direction={"next"} ref={navigationNextRef} />

      <TooltipContext.Provider value={{ showTooltip, hideTooltip }}>
        <Swiper
          className={s.swiperContainer}
          onSwiper={setSwiper}
          {...swiperParams}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <FilmCard className={s.collectionItem} data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </TooltipContext.Provider>
    </div>
  );
};

export default CollectionSlider;
