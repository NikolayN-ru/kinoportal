import { FC, createContext, useEffect, useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";

import Slider from "@components/Slider";
import FilmCard from "@components/FilmCard";
import FilmCardTooltip from "@components/FilmCard/FilmCardTooltip";
import { Movie } from "../../types/film";
import { useTooltip } from "../../../hooks/useTooltip";
import { TooltipContextValue } from "../../types/tooltip";
import {
  ITEMS_IN_COLLECTION_SLIDER,
  collectionSliderParams,
} from "./parameters";
import ShowAllCard from "@components/FilmCard/ShowAllCard";

import s from "./CollectionSlider.module.scss";

export interface CollectionSliderProps {
  items: Movie[];
  link: string;
}

export const TooltipContext = createContext<TooltipContextValue>(null);

const CollectionSlider: FC<CollectionSliderProps> = ({ items, link }) => {
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [containerElement, setContainerElement] =
    useState<HTMLDivElement | null>(null);
  const [tooltip, showTooltip, hideTooltip] = useTooltip(containerElement);

  useEffect(() => {
    setContainerElement(sliderContainerRef.current);
  }, []);

  return (
    <div className={s.container} ref={sliderContainerRef}>
      {tooltip.isVisible && <FilmCardTooltip {...tooltip.options} />}

      <TooltipContext.Provider value={{ showTooltip, hideTooltip }}>
        <Slider
          className={s.sliderWrapper}
          params={collectionSliderParams}
          withTitles={true}
          nextClassName={s.sliderNext}
        >
          {items.slice(0, ITEMS_IN_COLLECTION_SLIDER).map((item) => (
            <SwiperSlide key={item.id}>
              <FilmCard key={item.id} data={item} withToolsContext={true} />
            </SwiperSlide>
          ))}

          {items.length > ITEMS_IN_COLLECTION_SLIDER && (
            <SwiperSlide>
              <ShowAllCard link={link} />
            </SwiperSlide>
          )}
        </Slider>
      </TooltipContext.Provider>
    </div>
  );
};

export default CollectionSlider;
