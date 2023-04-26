import { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';

import PromoItem from './PromoItem/PromoItem';
import SliderButton from '../SliderButton/SliderButton';

import 'swiper/scss';
import 'swiper/scss/navigation';
import s from './Promo.module.scss';

export type PromoItemType = {
  id: number;
  name: string;
  link: string;
  image: string;
  age: number;
};

const promoItems: PromoItemType[] = [
  {
    id: 0,
    name: 'Пансион',
    link: 'pansion',
    image: 'promo-1.png',
    age: 16,
  },
  {
    id: 1,
    name: 'Тайна пропавшей деревни',
    link: 'taina-propavshej-derevni',
    image: 'promo-2.jpg',
    age: 16,
  },
  {
    id: 2,
    name: 'Моя ужасная сестра',
    link: '487282',
    image: 'promo-3.jpg',
    age: 6,
  },
  {
    id: 3,
    name: 'Папы',
    link: '208079',
    image: 'promo-4.jpg',
    age: 6,
  },
  {
    id: 4,
    name: 'Стажер',
    link: 'stazher',
    image: 'promo-5.jpg',
    age: 16,
  },
  {
    id: 5,
    name: 'Бумеранг',
    link: '193567',
    image: 'promo-6.jpg',
    age: 6,
  },
];

const Promo: FC = () => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  const swiperParams: SwiperOptions = {
    breakpoints: {},
    spaceBetween: 24,
    slidesPerView: 3,
    modules: [Navigation, Autoplay],
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
      disabledClass: s.navButtonDisabled,
    },
    autoplay: {
      delay: 10000,
    },
    slidesPerGroup: 1,
    speed: 500,
    loop: true,
    allowTouchMove: false,
    centeredSlides: true,
    slideNextClass: s.slideNext,
    slidePrevClass: s.slidePrev,
  };

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  swiper?.on('slideChange', function (swiper) {
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
      <SliderButton direction={'prev'} ref={navigationPrevRef} className={s.prevButton} />
      <SliderButton direction={'next'} ref={navigationNextRef} className={s.nextButton} />

      <div className={s.sliderContainer}>
        <Swiper onSwiper={setSwiper} {...swiperParams}>
          {promoItems.map((item, index) => (
            <SwiperSlide key={item.id}>
              <PromoItem
                data={item}
                className={index === prevIndex || index === nextIndex ? s.transparent : ''}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Promo;
