type tooltipCoords = {
  x: number;
  y: number;
};

export interface TooltipOptions {
  coords: tooltipCoords;
  text: string;
}

export type TooltipState = {
  isVisible: boolean;
  options: TooltipOptions;
};

export type ShowTooltip = (
  targetX: number,
  targetY: number,
  text: string
) => void;

export type HideTooltip = () => void;

export type UseTooltipResult = [
  tooltip: TooltipState,
  showTooltip: ShowTooltip,
  hideTooltip: HideTooltip
];

export type TooltipContextValue = {
  showTooltip: ShowTooltip;
  hideTooltip: HideTooltip;
} | null;
