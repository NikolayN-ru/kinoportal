import { FC } from "react";
import cn from "classnames/bind";

import Icon from "@components/ui-kit/IconComponent/Icon";

import s from "./FilterGenreItem.module.scss";

export enum FilterGenreItemSize {
  SM = "sm",
  LG = "lg",
}

const iconClassName = {
  [FilterGenreItemSize.LG]: s.containerLG,
  [FilterGenreItemSize.SM]: s.containerSM,
};

interface FilterGenreItemProps {
  title: string;
  iconName: string;
  size: FilterGenreItemSize;
}

const FilterGenreItem: FC<FilterGenreItemProps> = ({
  title,
  iconName,
  size,
}) => {
  const styles = {
    main: s.container,
    additional: iconClassName[size],
  };

  const classNames = cn.bind(styles);
  const className = classNames("main", "additional");

  return (
    <div className={className}>
      <Icon className={s.icon} name={iconName} />
      <div className={s.text}>{title}</div>
    </div>
  );
};

export default FilterGenreItem;
