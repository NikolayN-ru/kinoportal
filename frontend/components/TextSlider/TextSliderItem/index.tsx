import React, { FC, ReactNode, useContext, useEffect, useRef } from "react";

import { TextSliderContext } from "../TextSliderTrack";

interface TextSliderItemProps {
  children: ReactNode;
}

const TextSliderItem: FC<TextSliderItemProps> = ({ children }) => {
  const { spaceBetween, onLoad } = useContext(TextSliderContext) || {
    spaceBetween: null,
    onLoad: null,
  };

  useEffect(() => {
    onLoad && onLoad(itemRef.current?.offsetWidth ?? 0);
  }, []);

  if (spaceBetween === null || !onLoad) return <></>;

  const itemRef = useRef<HTMLDivElement>(null);
  const marginRight = `${spaceBetween}px`;

  return (
    <div ref={itemRef} style={{ marginRight }}>
      {children}
    </div>
  );
};

export default TextSliderItem;
