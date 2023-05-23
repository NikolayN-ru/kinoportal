import { FC } from "react";

import Tooltip from "@components/ui-kit/Tooltip";

import s from "./RangeSliderTooltip.module.scss";

interface RangeSliderTooltipProps {
  className?: string;
  text: string;
}

const RangeSliderTooltip: FC<RangeSliderTooltipProps> = ({
  text,
  className,
}) => {
  const classNames = [s.tooltip];
  className && classNames.push(className);

  return <Tooltip className={classNames.join(" ")} text={text} />;
};

export default RangeSliderTooltip;
