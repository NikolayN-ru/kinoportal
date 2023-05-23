import SwiperCore from "swiper";
import { SwiperEvents } from "swiper/types";

export enum SliderMode {
  FILM_COLLECTION = "FILM COLLECTION",
  FILM_COMPILATION = "FILM COMPILATION",
}

export type SliderHandler = {
  name: keyof SwiperEvents;
  callback: (swiper: SwiperCore) => void;
};
