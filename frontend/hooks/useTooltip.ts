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
    text: '',
  },
};

export const useTooltip = (container: HTMLElement | null): UseTooltipResult => {
  const [tooltip, setTooltip] = useState<TooltipState>(TOOLTIP_STATE_HIDDEN);

  const showTooltip: ShowTooltip = (targetX: number, targetY: number, text: string) => {
    const x = targetX - (container?.getBoundingClientRect().x ?? 0);
    const y = targetY - (container?.getBoundingClientRect().y ?? 0);

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
