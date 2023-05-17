import { FC } from "react";

import Icon from "@components/ui-kit/IconComponent/Icon";

import s from "./FilterGenreItem.module.scss";

interface FilterGenreItemProps {
  title: string;
  iconName: string;
}

const FilterGenreItem: FC<FilterGenreItemProps> = ({ title, iconName }) => {
  return (
    <div className={s.container}>
      <Icon className={s.icon} name={iconName} />
      <div className={s.text}>{title}</div>
    </div>
  );
};

export default FilterGenreItem;
