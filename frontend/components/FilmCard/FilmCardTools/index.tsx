import { FC, MouseEventHandler, useContext } from "react";

import { TooltipContext } from "../../Slider/CollectionSlider";
import Icon from "../../ui-kit/IconComponent/Icon";

import s from "./FilmCardTools.module.scss";

type Tool = {
  name: "bookmarks" | "similar" | "grade" | "dislike";
  icon: string;
  text: string;
};

const tools: Tool[] = [
  {
    name: "bookmarks",
    icon: "bookmark",
    text: "Смотреть позже",
  },
  {
    name: "similar",
    icon: "magicWand",
    text: "Похожее",
  },
  {
    name: "grade",
    icon: "starRounded",
    text: "Уже смотрел, оценить",
  },
  {
    name: "dislike",
    icon: "declension",
    text: "Не нравится такое",
  },
];

interface FilmCardToolsProps {
  className?: string;
}

const FilmCardTools: FC<FilmCardToolsProps> = ({ className }) => {
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

export default FilmCardTools;
