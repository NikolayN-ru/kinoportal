import { FC, useContext } from "react";

import { SelectContext } from "@components/ui-kit/Select";
import TextSlider from "@components/TextSlider";

import s from "./CountriesSlider.module.scss";

interface CountriesSliderProps {
  items: string[];
}

const sliderOptions = {
  spaceBetween: 12,
  offsetStep: 100,
};

const CountriesSlider: FC<CountriesSliderProps> = ({ items }) => {
  const isOpen = useContext(SelectContext) ?? true;

  return (
    (isOpen && (
      <div className={s.container}>
        <TextSlider items={items} options={sliderOptions} />
      </div>
    )) ||
    null
  );
};

export default CountriesSlider;
