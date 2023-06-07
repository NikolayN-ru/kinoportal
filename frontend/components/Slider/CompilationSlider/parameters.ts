import { SwiperOptions } from "swiper";
import { breakpoints } from "../breakpoints";

export const compilationSliderParams: SwiperOptions = {
  breakpoints: {
    [breakpoints.sm]: {
      spaceBetween: 12,
      slidesPerView: 1,
      slidesPerGroup: 1,
      allowTouchMove: true,
    },
    [breakpoints.md]: {
      spaceBetween: 12,
      slidesPerView: 2,
      slidesPerGroup: 1,
      allowTouchMove: true,
    },
    [breakpoints.lg]: {
      spaceBetween: 24,
      slidesPerView: 3,
      allowTouchMove: false,
    },
    [breakpoints.xl]: {
      spaceBetween: 24,
      slidesPerView: 4,
      allowTouchMove: false,
    },
  },
};
