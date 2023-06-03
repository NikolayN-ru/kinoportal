import {
  FC,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import cn from "classnames/bind";

import SliderButton, {
  ButtonSize,
} from "@components/ui-kit/Button/SliderButton";
import TextSliderTrack from "./TextSliderTrack";

import s from "./TextSlider.module.scss";

export type TextSliderItem = {
  name: string;
  title: string;
};

export type TextSliderOptions = {
  itemsCount: number;
  spaceBetween: number;
  offsetStep: number;
};

interface TextSliderProps {
  children: ReactNode;
  options: TextSliderOptions;
}

const TextSlider: FC<TextSliderProps> = ({ children, options }) => {
  const { itemsCount, spaceBetween, offsetStep } = options;

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [offset, setOffset] = useState(0);

  const widthLeft = trackWidth - wrapperWidth - Math.abs(offset);

  useEffect(() => {
    setWrapperWidth(wrapperRef.current?.clientWidth ?? 0);
  }, []);

  const onTrackLoad = (width: number): void => {
    const fullWidth = width + (itemsCount - 1) * spaceBetween;
    setTrackWidth(fullWidth);
  };

  const onNextClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (isPrevDisabled) {
      setIsPrevDisabled(false);
    }

    let offsetDecrement: number;

    if (widthLeft <= offsetStep) {
      setIsNextDisabled(true);
      offsetDecrement = widthLeft;
    } else {
      offsetDecrement = offsetStep;
    }

    setOffset(offset - offsetDecrement);
  };

  const onPrevClick: MouseEventHandler<HTMLButtonElement> = () => {
    isNextDisabled && setIsNextDisabled(false);

    let newOffset: number;

    if (Math.abs(offset) <= offsetStep) {
      setIsPrevDisabled(true);
      newOffset = 0;
    } else {
      newOffset = offset + offsetStep;
    }

    setOffset(newOffset);
  };

  const styles = {
    prev: s.sliderPrev,
    next: s.sliderNext,
    disabled: s.isDisabled,
  };

  const classNames = cn.bind(styles);

  const prevClassName = classNames("prev", { disabled: isPrevDisabled });
  const nextClassName = classNames("next", { disabled: isNextDisabled });

  return (
    <div className={s.container}>
      <SliderButton
        className={prevClassName}
        direction="prev"
        size={ButtonSize.SM}
        onClick={onPrevClick}
      />
      <SliderButton
        className={nextClassName}
        direction="next"
        size={ButtonSize.SM}
        onClick={onNextClick}
      />

      <div className={s.sliderWrapper} ref={wrapperRef}>
        <TextSliderTrack
          onLoad={onTrackLoad}
          ref={trackRef}
          offset={offset}
          spaceBetween={spaceBetween}
          itemsCount={itemsCount}
        >
          {children}
        </TextSliderTrack>
      </div>
    </div>
  );
};

export default TextSlider;
