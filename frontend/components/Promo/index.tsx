import React, { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, SwiperOptions } from "swiper";

import { promoItems } from "@mock/filmsData";
import PromoItem from "./PromoItem";
import { breakpoints } from "@components/Slider/SliderParams";
import SliderButton, {
  ButtonSize,
} from "@components/ui-kit/Button/SliderButton";

import s from "./Promo.module.scss";

const Promo: FC = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  const swiperParams: SwiperOptions = {
    breakpoints: {
      [breakpoints.md]: {
        spaceBetween: 12,
      },
      [breakpoints.lg]: {
        spaceBetween: 24,
        allowTouchMove: false,
      },
      [breakpoints.xl]: {
        spaceBetween: 24,
        allowTouchMove: false,
      },
    },
    modules: [Navigation, Autoplay],
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
      disabledClass: s.navButtonDisabled,
    },
    autoplay: {
      delay: 10000,
    },
    spaceBetween: 12,
    slidesPerView: 3,
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    allowTouchMove: true,
    centeredSlides: true,
    slideNextClass: s.slideNext,
    slidePrevClass: s.slidePrev,
  };

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  swiper?.on("slideChange", function (swiper) {
    const slidesCount = swiper.slides.length;

    let prevSlideIndex = swiper.realIndex - 1;
    prevSlideIndex < 0 && (prevSlideIndex = slidesCount - 1);

    let nextSlideIndex = swiper.realIndex + 1;
    nextSlideIndex === slidesCount && (nextSlideIndex = 0);

    setPrevIndex(prevSlideIndex);
    setNextIndex(nextSlideIndex);
  });

  return (
    <div className={s.promo}>
      <SliderButton
        direction={"prev"}
        ref={navigationPrevRef}
        className={s.buttonPrev}
        size={ButtonSize.MD}
      />
      <SliderButton
        direction={"next"}
        ref={navigationNextRef}
        className={s.buttonNext}
        size={ButtonSize.MD}
      />

      <div className={s.sliderContainer}>
        <Swiper onSwiper={setSwiper} {...swiperParams}>
          {promoItems.map((item, index) => (
            <SwiperSlide key={item.id}>
              <PromoItem
                data={item}
                className={
                  index === prevIndex || index === nextIndex
                    ? s.transparent
                    : ""
                }
                isCurrent={index === swiper?.realIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Promo;
