import React, { FC } from "react";
import cn from "classnames/bind";

import s from "./Button.module.scss";

export enum Border {
  GRAY = "borderGray",
}

export enum Size {
  FULL = "full",
}

interface ButtonProps {
  title?: string | JSX.Element;
  className?: string;
  text?: string;
  preamble?: string;
  ico?: any;
  type?: "button" | "submit" | "reset";
  color?: string;
  small?: string;
  border?: Border;
  size?: Size;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  title,
  text,
  preamble,
  className,
  ico,
  type,
  color,
  small,
  border,
  size,
  onClick,
}) => {
  type = type || "button";

  const styles = {
    default: s.button || "",
    additional: className || "",
    color: (color && s[color]) || "",
    border: (border && s[border]) || "",
    size: (size && s[size]) || "",
  };

  const classNames = cn.bind(styles);
  const buttonClassName = classNames({
    default: !!styles.default,
    additional: !!styles.additional,
    color: !!styles.color,
    border: !!styles.border,
    size: !!styles.size,
  });

  return (
    <button
      className={buttonClassName}
      type={type}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {ico && ico}
      {title && title}
      {text && (
        <div className={s.content}>
          {preamble && <span className={s.preamble}>{preamble}</span>}
          {text}
          {small && <span className={s.small}>{small}</span>}
        </div>
      )}
    </button>
  );
};

export default Button;
