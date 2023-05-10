import { ChangeEventHandler, FC } from "react";
import cn from "classnames/bind";

import s from "./Radio.module.scss";

interface RadioProps {
  text: string;
  value: string;
  name: string;
  isChecked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const Radio: FC<RadioProps> = ({ disabled, text, isChecked, ...props }) => {
  const styles = {
    label: s.label,
  };
  const classNames = cn.bind(styles);
  const className = classNames("label");

  return (
    <label className={className}>
      <input
        className={"sr-only"}
        type="checkbox"
        checked={isChecked}
        disabled={disabled ?? false}
        {...props}
      />
      <span className={s.text}>{text}</span>
      <span className={s.mark}></span>
    </label>
  );
};

export default Radio;
