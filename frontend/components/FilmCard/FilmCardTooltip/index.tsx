import { FC } from "react";

import { TooltipOptions } from "@components/types/tooltip";
import Tooltip from "@components/ui-kit/Tooltip";

import s from "./FilmCardTooltip.module.scss";

const FilmCardTooltip: FC<TooltipOptions> = ({ text, coords }) => {
  const { x, y } = coords;

  return (
    <Tooltip
      className={s.tooltip}
      text={text}
      style={{ top: y - 7, left: x }}
    />
  );
};

export default FilmCardTooltip;
