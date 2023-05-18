import React, { forwardRef, useEffect } from "react";

import TextSliderItem from "../TextSliderItem";

import s from "./TextSliderTrack.module.scss";

interface TextSliderTrackProps {
  items: string[];
  offset: number;
  spaceBetween: number;
  onLoad: (width: number) => void;
}

type Ref = HTMLDivElement;

const TextSliderTrack = forwardRef<Ref, TextSliderTrackProps>(
  ({ items, offset, spaceBetween, onLoad }, ref) => {
    const itemsWidths: number[] = [];

    useEffect(() => {
      onLoad(itemsWidths.reduce((sum, width) => sum + width, 0));
    }, []);

    const onItemLoad = (width: number): void => {
      if (itemsWidths.length === items.length) return;
      itemsWidths.push(width);
    };

    const trackStyle = {
      transform: `translateX(${offset}px)`,
    };

    return (
      <div className={s.sliderTrack} ref={ref} style={trackStyle}>
        {items.map((item, index) => {
          const marginRight = `${spaceBetween}px`;
          return (
            <TextSliderItem
              key={item}
              className={s.sliderItem}
              title={item}
              onLoad={onItemLoad}
              style={{ marginRight }}
            />
          );
        })}
      </div>
    );
  }
);

TextSliderTrack.displayName = "TextSliderTrack";

export default TextSliderTrack;
