import { FC, ReactNode } from "react";
import cn from "classnames/bind";

import s from "./SelectOptionsList.module.scss";

interface SelectOptionsListProps {
  children: ReactNode;
  columns: 1 | 2 | 3;
  separated?: boolean;
}

const columnsClassNames = [s.oneColumn, s.twoColumns, s.threeColumns];

const SelectOptionsList: FC<SelectOptionsListProps> = ({
  children,
  columns,
  separated,
}) => {
  const styles = {
    general: s.container,
    columns: columnsClassNames[columns - 1],
    separated: s.separated,
  };
  const classNames = cn.bind(styles);
  const className = classNames("general", "columns", { separated });

  return <div className={className}>{children}</div>;
};

export default SelectOptionsList;
