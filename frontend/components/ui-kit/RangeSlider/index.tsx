"use client";

import { FC, useEffect, useState } from "react";

import Slider, { SliderProps } from "rc-slider";
import "rc-slider/assets/index.css";

import RangeSliderTooltip from "./RangeSliderTooltip";

import s from "./RangeSlider.module.scss";

interface RangeSliderProps {
  options: SliderProps;
  reset: boolean;
  setReset: (reset: boolean) => void;
  formatValue?: (value: number) => string;
  onValueSelect?: (value: number) => void;
}

const getNumberValue = (value: number | number[] | undefined): number => {
  if (value instanceof Array) {
    return value[0];
  }

  return value ?? 0;
};

const RESET_VALUE = 0;

const RangeSlider: FC<RangeSliderProps> = ({
  options,
  formatValue,
  onValueSelect,
  reset,
  setReset,
}) => {
  const initialValue = getNumberValue(options.defaultValue);
  const [value, setValue] = useState<number>(initialValue);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!reset) return;

    setValue(RESET_VALUE);
  }, [reset]);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const text = formatValue ? formatValue(value) : String(value);

  const onSliderChange = (value: number | number[]): void => {
    setValue(getNumberValue(value));
    setReset(false);
  };

  const onSliderFocus = (): void => {
    setIsTooltipVisible(true);
  };

  const onSliderBlur = (): void => {
    setIsTooltipVisible(false);
    onValueSelect && onValueSelect(value);
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
        value={value}
        {...options}
      />
    </>
  );
};

export default RangeSlider;
