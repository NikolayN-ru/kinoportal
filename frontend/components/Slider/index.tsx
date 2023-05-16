import { FC, ReactNode, useRef, useState } from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';

import SliderButton from '@components/Button/SliderButton';

import 'swiper/scss';
import 'swiper/scss/navigation';
import s from './Slider.module.scss';

interface SliderProps {
  params: SwiperOptions;
  children: ReactNode;
}

const Slider: FC<SliderProps> = ({ children, params }) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const defaultParams = {
    breakpoints: {},
    spaceBetween: 24,
    speed: 500,
    watchOverflow: false,
    modules: [Navigation],
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
      disabledClass: s.navButtonDisabled,
    },
  };

  const swiperParams = { ...defaultParams, ...params };

  return (
    <>
      <SliderButton direction={'prev'} ref={navigationPrevRef} className={s.buttonPrev} />
      <SliderButton direction={'next'} ref={navigationNextRef} className={s.buttonNext} />

      <Swiper className={s.swiperContainer} onSwiper={setSwiper} {...swiperParams}>
        {children}
      </Swiper>
    </>
  );
};

export default Slider;
