import { FC, useContext } from "react";

import { useTypedSelector } from "hooks/useTypedSelector";
import { SelectContext } from "@components/ui-kit/Select";
import TextSlider from "@components/TextSlider";
import TextSliderItem from "@components/TextSlider/TextSliderItem";
import CountriesSliderItem from "./CountriesSliderItem";

import s from "./CountriesSlider.module.scss";

const CountriesSlider: FC = () => {
  const {items} = useTypedSelector(({filtersDataApi}) => filtersDataApi.countryData);
  const isOpen = useContext(SelectContext) ?? true;

  if (!isOpen || !items || !items.length) return null;

  const sliderOptions = {
    itemsCount: items.length,
    spaceBetween: 12,
    offsetStep: 100,
  };

  return (
    <div className={s.container}>
      <TextSlider options={sliderOptions}>
        {items.map(({ id, country }) => (
          <TextSliderItem key={id}>
            <CountriesSliderItem
              className={s.sliderItem}
              name={country}
              title={country}
            />
          </TextSliderItem>
        ))}
      </TextSlider>
    </div>
  );
};

export default CountriesSlider;
