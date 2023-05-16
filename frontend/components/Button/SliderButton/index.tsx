import { forwardRef } from 'react';

import Icon from '@components/shared/IconComponent/Icon';

import s from './SliderButton.module.scss';

interface SliderButtonProps {
  className?: string;
  direction: 'prev' | 'next';
}

type Ref = HTMLButtonElement;

const SliderButton = forwardRef<Ref, SliderButtonProps>(({ className, direction }, ref) => {
  const buttonClassNames = direction === 'prev' ? [s.sliderPrev] : [s.sliderNext];
  className && buttonClassNames.push(className);

  return (
    <button className={buttonClassNames.join(' ')} ref={ref} type="button">
      <Icon name="arrowRight" />
    </button>
  );
});

SliderButton.displayName = 'SliderButton';

export default SliderButton;
