import { FC } from "react";
import { SliderProps } from "rc-slider";

import RangeSlider from "@components/ui-kit/RangeSlider";
import { convertAmoutWithTenthsToString } from "utils";

import s from "./FilterRating.module.scss";

const ratingSliderOptions: SliderProps = {
  min: 0,
  max: 10,
  step: 0.1,
  defaultValue: 0,
  marks: {
    "0": <span className="range-slider-mark">0</span>,
    "10": <span className="range-slider-mark">10</span>,
  },
  ariaLabelForHandle: "Рейтинг Кинопоиска",
};

const FilterRating: FC = () => {
  return (
    <>
      <label className={s.label}>Рейтинг Кинопоиска</label>
      <RangeSlider
        options={ratingSliderOptions}
        formatValue={convertAmoutWithTenthsToString}
      />
    </>
  );
};

export default FilterRating;
