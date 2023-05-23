"use client";

import { FC, MouseEventHandler, ReactNode, useState } from "react";
import cn from "classnames/bind";

import s from "./ShowMore.module.scss";

interface ShowMoreProps {
  children: ReactNode;
}

const IS_CLOSE_DEFAULT = true;

const ShowMore: FC<ShowMoreProps> = ({ children }) => {
  const [isClose, setIsClose] = useState<boolean>(IS_CLOSE_DEFAULT);

  const onToggleButtonClick: MouseEventHandler<
    HTMLButtonElement
  > = (): void => {
    setIsClose(!isClose);
  };

  const styles = {
    description: s.description,
    isClose: s.isClose,
  };
  const containerClassNames = cn.bind(styles);
  const containerClassName = containerClassNames("description", { isClose });

  return (
    <>
      <div className={containerClassName}>{children}</div>

      <button className={s.toggleButton} onClick={onToggleButtonClick}>
        {isClose ? "Развернуть" : "Свернуть"}
      </button>
    </>
  );
};

export default ShowMore;
