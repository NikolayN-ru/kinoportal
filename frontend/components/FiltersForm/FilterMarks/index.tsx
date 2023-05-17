import { FC } from "react";
import { SliderProps } from "rc-slider";

import RangeSlider from "@components/ui-kit/RangeSlider";
import { convertAmountWithMillionsToString } from "utils";

import s from "./FilterMarks.module.scss";

const marksSliderOptions: SliderProps = {
  min: 0,
  max: 1000000,
  step: 5000,
  defaultValue: 0,
  marks: {
    "0": <span className="range-slider-mark">0</span>,
    "1000000": <span className="range-slider-mark">1 млн</span>,
  },
  ariaLabelForHandle: "Количество оценок",
};

const FilterMarks: FC = () => {
  return (
    <>
      <label className={s.label}>Количество оценок</label>

      <RangeSlider
        options={marksSliderOptions}
        formatValue={convertAmountWithMillionsToString}
      />
    </>
  );
};

export default FilterMarks;
