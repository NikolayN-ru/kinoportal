import { useState } from 'react';

import {
  HideTooltip,
  ShowTooltip,
  TooltipState,
  UseTooltipResult
} from '../components/types/tooltip';

const TOOLTIP_STATE_HIDDEN = {
  isVisible: false,
  options: {
    coords: {
      x: 0,
      y: 0,
    },
    text: "",
  },
};

export const useTooltip = (container: HTMLElement | null): UseTooltipResult => {
  const [tooltip, setTooltip] = useState<TooltipState>(TOOLTIP_STATE_HIDDEN);

  const containerX = container?.getBoundingClientRect().x ?? 0;
  const containerY = container?.getBoundingClientRect().y ?? 0;

  const showTooltip: ShowTooltip = (
    targetX: number,
    targetY: number,
    text: string
  ) => {
    const x = targetX - containerX;
    const y = targetY - containerY;

    setTooltip({
      isVisible: true,
      options: {
        coords: { x, y },
        text,
      },
    });
  };

  const hideTooltip: HideTooltip = () => {
    setTooltip(TOOLTIP_STATE_HIDDEN);
  };

  return [tooltip, showTooltip, hideTooltip];
};
