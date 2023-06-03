import { FC, useContext } from "react";

import { countries } from "@mock/filmsData";
import { SelectContext } from "@components/ui-kit/Select";
import TextSlider from "@components/TextSlider";
import TextSliderItem from "@components/TextSlider/TextSliderItem";
import CountriesSliderItem from "./CountriesSliderItem";

import s from "./CountriesSlider.module.scss";

const sliderOptions = {
  itemsCount: countries.length,
  spaceBetween: 12,
  offsetStep: 100,
};

const CountriesSlider: FC = () => {
  const isOpen = useContext(SelectContext) ?? true;

  if (!isOpen) return null;

  return (
    <div className={s.container}>
      <TextSlider options={sliderOptions}>
        {countries.map(({ value, title }) => (
          <TextSliderItem key={value}>
            <CountriesSliderItem
              className={s.sliderItem}
              name={value}
              title={title}
            />
          </TextSliderItem>
        ))}
      </TextSlider>
    </div>
  );
};

export default CountriesSlider;
