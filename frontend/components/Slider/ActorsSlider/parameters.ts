import { SwiperOptions } from "swiper";
import { breakpoints } from "../breakpoints";

export const actorsSliderParams: SwiperOptions = {
  breakpoints: {
    [breakpoints.md]: {
      spaceBetween: 24,
      slidesPerView: 4,
      slidesPerGroup: 3,
    },
    [breakpoints.lg]: {
      spaceBetween: 24,
      slidesPerView: 5,
      slidesPerGroup: 4,
      allowTouchMove: false,
    },
    [breakpoints.xl]: {
      spaceBetween: 24,
      slidesPerView: 7,
      slidesPerGroup: 6,
      allowTouchMove: false,
    },
  },
  spaceBetween: 16,
  slidesPerView: 2,
  slidesPerGroup: 1,
  allowTouchMove: true,
};