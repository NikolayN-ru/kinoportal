import { FC } from 'react';

import { TooltipOptions } from '../types/tooltip';

import s from './Tooltip.module.scss';

const Tooltip: FC<TooltipOptions> = ({ text, coords }) => {
  const { x, y } = coords;
  return (
    <div className={s.tooltip} style={{ top: y - 7, left: x }}>
      {text}
    </div>
  );
};

export default Tooltip;
