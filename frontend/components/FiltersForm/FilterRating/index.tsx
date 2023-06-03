"use client";

import { FC } from "react";
import { SliderProps } from "rc-slider";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "hooks/useTypedSelector";
import RangeSlider from "@components/ui-kit/RangeSlider";
import { convertAmoutWithTenthsToString } from "utils";
import { setRating } from "@redux/filtersApi";

import s from "./FilterRating.module.scss";

interface FilterRatingProps {
  reset: boolean;
  setReset: (reset: boolean) => void;
}

const FilterRating: FC<FilterRatingProps> = ({ reset, setReset }) => {
  const selectedRating = useTypedSelector(
    ({ filtersApi }) => filtersApi.filters.rating
  );
  const dispatch = useDispatch();

  const onValueSelect = (value: number): void => {
    dispatch(setRating(value));
  };

  const ratingSliderOptions: SliderProps = {
    min: 0,
    max: 10,
    step: 0.1,
    defaultValue: selectedRating,
    marks: {
      "0": <span className="range-slider-mark">0</span>,
      "10": <span className="range-slider-mark">10</span>,
    },
    ariaLabelForHandle: "Рейтинг Кинопоиска",
  };

  return (
    <>
      <label className={s.label}>Рейтинг Кинопоиска</label>
      <RangeSlider
        options={ratingSliderOptions}
        formatValue={convertAmoutWithTenthsToString}
        onValueSelect={onValueSelect}
        reset={reset}
        setReset={setReset}
      />
    </>
  );
};

export default FilterRating;
