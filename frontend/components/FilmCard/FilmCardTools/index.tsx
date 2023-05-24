import { FC } from "react";

import Icon from "../../ui-kit/IconComponent/Icon";
import { tools } from "./tools";

import s from "./FilmCardTools.module.scss";

interface FilmCardToolsProps {
  className?: string;
}

const FilmCardTools: FC<FilmCardToolsProps> = ({ className }) => {
  const containerClassNames = [s.container];
  className && containerClassNames.push(className);

  return (
    <div className={containerClassNames.join(" ")}>
      {tools.map(({ name, text, icon }) => (
        <div
          key={name}
          className={`${s.buttonContainer} ${s.containerWithTooltip}`}
          data-text={text}
        >
          <button className={s.button} aria-label={text}>
            <Icon name={icon} />
          </button>
          <span className={s.tooltip}>{text}</span>
        </div>
      ))}
    </div>
  );
};

export default FilmCardTools;
