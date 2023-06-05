import React, { ReactNode, createContext, forwardRef, useEffect } from "react";

import s from "./TextSliderTrack.module.scss";

interface TextSliderTrackProps {
  children: ReactNode;
  offset: number;
  spaceBetween: number;
  itemsCount: number;
  onLoad: (width: number) => void;
}

type Ref = HTMLDivElement;

type TextSliderContext = {
  spaceBetween: number;
  onLoad: (width: number) => void;
} | null;

export const TextSliderContext = createContext<TextSliderContext>(null);

const TextSliderTrack = forwardRef<Ref, TextSliderTrackProps>(
  ({ children, offset, spaceBetween, itemsCount, onLoad }, ref) => {
    const itemsWidths: number[] = [];

    useEffect(() => {
      onLoad(itemsWidths.reduce((sum, width) => sum + width, 0));
    }, []);

    const onItemLoad = (width: number): void => {
      if (itemsWidths.length === itemsCount) return;
      itemsWidths.push(width);
    };

    const trackStyle = {
      transform: `translateX(${offset}px)`,
    };

    return (
      <TextSliderContext.Provider
        value={{ spaceBetween: spaceBetween, onLoad: onItemLoad }}
      >
        <div className={s.sliderTrack} ref={ref} style={trackStyle}>
          {children}
        </div>
      </TextSliderContext.Provider>
    );
  }
);

TextSliderTrack.displayName = "TextSliderTrack";

export default TextSliderTrack;
