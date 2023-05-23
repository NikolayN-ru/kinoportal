"use client";

import { FC, useState } from "react";

import Slider, { SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";

import RangeSliderTooltip from "./RangeSliderTooltip";

import s from "./RangeSlider.module.scss";

interface RangeSliderProps {
  options: SliderProps;
  formatValue?: (value: number) => string;
}

const getNumberValue = (value: number | number[] | undefined): number => {
  if (value instanceof Array) {
    return value[0];
  }

  return value ?? 0;
};

const RangeSlider: FC<RangeSliderProps> = ({ options, formatValue }) => {
  const initialValue = getNumberValue(options.defaultValue);
  const [value, setValue] = useState<number>(initialValue);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const text = formatValue ? formatValue(value) : String(value);

  const onSliderChange = (value: number | number[]): void => {
    setValue(getNumberValue(value));
  };

  const onSliderFocus = (): void => {
    setIsTooltipVisible(true);
  };

  const onSliderBlur = (): void => {
    setIsTooltipVisible(false);
  };

  return (
    <>
      <Slider
        className={s.slider}
        handleRender={(renderProps) => (
          <div {...renderProps.props}>
            {isTooltipVisible && (
              <RangeSliderTooltip className={s.tooltip} text={`от ${text}`} />
            )}
          </div>
        )}
        onChange={onSliderChange}
        onFocus={onSliderFocus}
        onBlur={onSliderBlur}
        {...options}
      />
    </>
  );
};

export default RangeSlider;
