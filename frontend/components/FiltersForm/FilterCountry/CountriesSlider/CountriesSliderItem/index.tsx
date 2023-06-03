import { FC, MouseEventHandler } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "hooks/useTypedSelector";
import { setCountry } from "@redux/filtersApi";

import s from "./CountriesSliderItem.module.scss";

interface CountriesSliderItemProps {
  className?: string;
  name: string;
  title: string;
}

const CountriesSliderItem: FC<CountriesSliderItemProps> = ({
  className,
  name,
  title,
}) => {
  const selectedCountries = useTypedSelector(
    ({ filtersApi }) => filtersApi.filters.country
  );
  const dispatch = useDispatch();

  const isChecked = selectedCountries.some((country) => country === name);

  const onCountryClick: MouseEventHandler<HTMLDivElement> = () => {
    const updatedSelectedCountries = isChecked
      ? selectedCountries.filter((country) => country !== name)
      : [...selectedCountries, name];

    dispatch(setCountry(updatedSelectedCountries));
  };

  const classNames = [s.container];
  className && classNames.push(className);
  isChecked && classNames.push(s.isChecked);

  return (
    <div className={classNames.join(" ")} onClick={onCountryClick}>
      {title}
    </div>
  );
};

export default CountriesSliderItem;
