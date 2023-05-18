import { FC } from "react";
import cn from "classnames/bind";

import s from "./SelectOption.module.scss";
import Checkbox from "@components/ui-kit/Checkbox";

export enum SelectOptionType {
  CHECKBOX = "checkbox",
  RADIO = "radio",
}

interface SelectOptionProps {
  text: string;
  value: string;
  name: string;
  type: SelectOptionType;
}

const optionComponent = {
  [SelectOptionType.CHECKBOX]: Checkbox,
};

const SelectOption: FC<SelectOptionProps> = ({ text, value, name, type }) => {
  const styles = {
    option: s.option,
  };
  const classNames = cn.bind(styles);
  const className = classNames("option");

  return <div className={className}>{text}</div>;
};

export default SelectOption;
