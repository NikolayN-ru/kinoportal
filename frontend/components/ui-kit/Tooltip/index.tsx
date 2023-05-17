import { CSSProperties, FC } from "react";

import s from "./Tooltip.module.scss";

interface TooltipProps {
  className?: string;
  text: string;
  style?: CSSProperties;
}

const Tooltip: FC<TooltipProps> = ({ className, text, style }) => {
  const classNames = [s.tooltip];
  className && classNames.push(className);

  return (
    <div className={classNames.join(" ")} style={style}>
      {text}
    </div>
  );
};

export default Tooltip;
