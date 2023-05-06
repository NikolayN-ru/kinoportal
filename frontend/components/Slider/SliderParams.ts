import { SwiperOptions } from 'swiper';

export const breakpoints = {
  sm: 320,
  md: 600,
  lg: 1024,
  xl: 1280,
};

export const collectionSliderParams: SwiperOptions = {
  breakpoints: {
    [breakpoints.md]: {
      slidesPerView: 5,
      slidesPerGroup: 1,
      spaceBetween: 12,
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

export const compilationSliderParams: SwiperOptions = {
  breakpoints: {
    [breakpoints.md]: {
      spaceBetween: 12,
      slidesPerView: 2,
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
  spaceBetween: 12,
  slidesPerView: 1,
  slidesPerGroup: 1,
  allowTouchMove: true,
};
