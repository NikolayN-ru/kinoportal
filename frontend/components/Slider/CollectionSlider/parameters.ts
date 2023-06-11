import { SwiperOptions } from "swiper";
import { breakpoints } from "../breakpoints";

export const collectionSliderParams: SwiperOptions = {
  breakpoints: {
    [breakpoints.md]: {
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 12,
      allowTouchMove: true,
    },
    [breakpoints.lg]: {
      slidesPerView: 7,
      slidesPerGroup: 6,
      spaceBetween: 24,
      allowTouchMove: false,
    },
    [breakpoints.xl]: {
      slidesPerView: 7,
      slidesPerGroup: 6,
      spaceBetween: 24,
      allowTouchMove: false,
    },
  },
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 12,
  allowTouchMove: true,
};

export const ITEMS_IN_COLLECTION_SLIDER = 15;
