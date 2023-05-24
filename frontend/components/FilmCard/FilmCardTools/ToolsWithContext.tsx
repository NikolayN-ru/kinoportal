import { FC, MouseEventHandler, useContext } from "react";

import Icon from "../../ui-kit/IconComponent/Icon";
import { TooltipContext } from "@components/Slider/CollectionSlider";
import { tools } from "./tools";

import s from "./FilmCardTools.module.scss";

interface ToolsWithContextProps {
  className?: string;
}

const ToolsWithContext: FC<ToolsWithContextProps> = ({ className }) => {
  const { showTooltip, hideTooltip } = useContext(TooltipContext) || {
    showTooltip: () => null,
    hideTooltip: () => null,
  };

  const setTooltip: MouseEventHandler<HTMLButtonElement> = (e): void => {
    const target = e.currentTarget;
    const buttonCoords = target.getBoundingClientRect();

    showTooltip(buttonCoords.x, buttonCoords.y, target.dataset.text ?? "");
  };

  const containerClassNames = [s.container];
  className && containerClassNames.push(className);

  return (
    <div className={containerClassNames.join(" ")}>
      {tools.map((tool) => (
        <div key={tool.name} className={s.buttonContainer}>
          <button
            className={s.button}
            aria-label={tool.text}
            data-text={tool.text}
            onMouseEnter={setTooltip}
            onMouseLeave={hideTooltip}
          >
            <Icon name={tool.icon} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToolsWithContext;
