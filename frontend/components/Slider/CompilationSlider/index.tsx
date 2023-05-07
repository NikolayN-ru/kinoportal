import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

import Slider from '@components/Slider';
import CategoryCard from '@components/CategoryCard';
import { CompilationItem } from '@components/types/film';
import { compilationSliderParams } from '../SliderParams';

import s from './CompilationSlider.module.scss';

interface CompilationSliderProps {
  items: CompilationItem[];
}

const CompilationSlider: FC<CompilationSliderProps> = ({ items }) => {
  return (
    <div className={s.compilationList}>
      <Slider params={compilationSliderParams}>
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <CategoryCard key={item.id} data={item} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default CompilationSlider;
