import { FC } from "react";
import { SliderProps } from "rc-slider";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "hooks/useTypedSelector";
import RangeSlider from "@components/ui-kit/RangeSlider";
import { convertAmountWithMillionsToString } from "utils";
import { setMark } from "@redux/filtersApi";

import s from "./FilterMarks.module.scss";

interface FilterRatingProps {
  reset: boolean;
  setReset: (reset: boolean) => void;
}

const FilterMarks: FC<FilterRatingProps> = ({ reset, setReset }) => {
  const selectedMark = useTypedSelector(
    ({ filtersApi }) => filtersApi.filters.votes
  );
  const dispatch = useDispatch();

  const onValueSelect = (value: number): void => {
    dispatch(setMark(value));
  };

  const marksSliderOptions: SliderProps = {
    min: 0,
    max: 1000000,
    step: 5000,
    defaultValue: selectedMark,
    marks: {
      "0": <span className="range-slider-mark">0</span>,
      "1000000": <span className="range-slider-mark">1 млн</span>,
    },
    ariaLabelForHandle: "Количество оценок",
  };

  return (
    <>
      <label className={s.label}>Количество оценок</label>

      <RangeSlider
        options={marksSliderOptions}
        formatValue={convertAmountWithMillionsToString}
        onValueSelect={onValueSelect}
        reset={reset}
        setReset={setReset}
      />
    </>
  );
};

export default FilterMarks;
