import { FC, MouseEventHandler } from "react";
import cn from "classnames/bind";

import Icon from "@components/ui-kit/IconComponent/Icon";
import { capitalizeFirstLetter } from "utils";

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
  isChecked: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const FilterGenreItem: FC<FilterGenreItemProps> = ({
  title,
  iconName,
  size,
  isChecked,
  onClick,
}) => {
  const styles = {
    main: s.container,
    additional: iconClassName[size],
    isChecked: s.isChecked,
  };

  const classNames = cn.bind(styles);
  const className = classNames("main", "additional", { isChecked });

  return (
    <div className={className} onClick={onClick}>
      <Icon className={s.icon} name={iconName} />
      <div className={s.text}>{capitalizeFirstLetter(title)}</div>
    </div>
  );
};

export default FilterGenreItem;
