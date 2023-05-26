import { MouseEventHandler, forwardRef } from "react";
import cn from "classnames/bind";

import Icon from "@components/ui-kit/IconComponent/Icon";

import s from "./SliderButton.module.scss";

export enum ButtonSize {
  SM = "sm",
  MD = "md",
  LG = "lg",
  XS = "xs",
}

interface SliderButtonProps {
  className?: string;
  direction: "prev" | "next";
  offset?: boolean;
  size: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

type Ref = HTMLButtonElement;

const sizeClassNames = {
  [ButtonSize.SM]: s.sm,
  [ButtonSize.MD]: s.md,
  [ButtonSize.LG]: s.lg,
  [ButtonSize.XS]: s.xs,
};

const SliderButton = forwardRef<Ref, SliderButtonProps>(
  ({ className, direction, offset, size, onClick }, ref) => {
    const styles = {
      prev: s.sliderPrev,
      next: s.sliderNext,
      offset: s.offset,
      inherited: className || "",
      size: sizeClassNames[size],
    };

    const buttonClassNames = cn.bind(styles);
    const buttonClassName = buttonClassNames(
      {
        prev: direction === "prev",
        next: direction === "next",
        offset,
        inherited: className,
      },
      "size"
    );

    return (
      <button
        className={buttonClassName}
        ref={ref}
        type="button"
        onClick={onClick}
      >
        <Icon name="arrowRight" />
      </button>
    );
  }
);

SliderButton.displayName = "SliderButton";

export default SliderButton;
