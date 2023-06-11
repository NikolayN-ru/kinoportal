import { breakpoints } from "@components/Slider/breakpoints";
import { SwiperOptions } from "swiper";

export const genresSliderParamsMini: SwiperOptions = {
  breakpoints: {
    [breakpoints.md]: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      allowTouchMove: true,
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
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 12,
  allowTouchMove: true,
};

export const genresSliderParamsFull: SwiperOptions = {
  breakpoints: {
    [breakpoints.md]: {
      slidesPerView: 4,
      slidesPerGroup: 3,
      spaceBetween: 24,
      allowTouchMove: true,
    },
    [breakpoints.lg]: {
      slidesPerView: 5,
      slidesPerGroup: 4,
      spaceBetween: 24,
      allowTouchMove: true,
    },
    [breakpoints.xl]: {
      slidesPerView: 7,
      slidesPerGroup: 6,
      spaceBetween: 24,
      allowTouchMove: false,
    },
  },
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 16,
  allowTouchMove: true,
};
