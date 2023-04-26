import { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';

import { CompilationItem } from '../types/film';
import CategoryCard from '../CategoryCard/CategoryCard';
import SliderButton from '../SliderButton/SliderButton';

import 'swiper/scss';
import 'swiper/scss/navigation';
import s from './CompilationSlider.module.scss';

interface CompilationSliderProps {
  items: CompilationItem[];
}

const CompilationSlider: FC<CompilationSliderProps> = ({ items }) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const swiperParams: SwiperOptions = {
    breakpoints: {},
    spaceBetween: 24,
    slidesPerView: 4,
    modules: [Navigation],
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
      disabledClass: s.navButtonDisabled,
    },
    slidesPerGroup: 1,
    speed: 500,
    allowTouchMove: false,
    watchOverflow: false,
  };

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className={s.compilationList}>
      <SliderButton direction={'prev'} ref={navigationPrevRef} className={s.prevButton} />
      <SliderButton direction={'next'} ref={navigationNextRef} className={s.nextButton} />

      <Swiper className={s.swiperContainer} onSwiper={setSwiper} {...swiperParams}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <CategoryCard key={item.id} className={s.compilationItem} data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CompilationSlider;
