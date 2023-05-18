import React, { CSSProperties, FC, useEffect, useRef } from "react";

import s from "./TextSliderItem.module.scss";

interface TextSliderItemProps {
  className?: string;
  title: string;
  onLoad: (width: number) => void;
  style?: CSSProperties;
}

const TextSliderItem: FC<TextSliderItemProps> = ({
  className,
  title,
  onLoad,
  style,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onLoad(itemRef.current?.offsetWidth ?? 0);
  }, []);

  const classNames = [s.container];
  className && classNames.push(className);

  return (
    <div className={classNames.join(" ")} ref={itemRef} style={style}>
      {title}
    </div>
  );
};

export default TextSliderItem;
