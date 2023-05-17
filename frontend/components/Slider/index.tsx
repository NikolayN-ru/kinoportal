import { FC, ReactNode, useRef, useState } from "react";
import cn from "classnames/bind";
import { Swiper } from "swiper/react";
import SwiperCore, { SwiperOptions, Navigation } from "swiper";

import SliderButton, {
  ButtonSize,
} from "@components/ui-kit/Button/SliderButton";

import "swiper/scss";
import "swiper/scss/navigation";
import s from "./Slider.module.scss";

interface SliderProps {
  className?: string;
  prevClassName?: string;
  nextClassName?: string;
  params: SwiperOptions;
  titles?: boolean;
  buttonSize?: ButtonSize;
  children: ReactNode;
}

const Slider: FC<SliderProps> = ({
  className,
  prevClassName,
  nextClassName,
  children,
  params,
  titles,
  buttonSize,
}) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const defaultParams = {
    breakpoints: {},
    spaceBetween: 24,
    speed: 500,
    watchOverflow: false,
    modules: [Navigation],
    navigation: {
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
      disabledClass: s.navButtonDisabled,
    },
  };

  const swiperParams = { ...defaultParams, ...params };

  const styles = {
    container: s.swiperContainer,
    containerInherited: className || "",
    prev: s.buttonPrev,
    prevInherited: prevClassName || "",
    next: s.buttonNext,
    nextInherited: nextClassName || "",
  };

  const classNames = cn.bind(styles);

  const containerClassName = classNames("container", {
    containerInherited: className,
  });
  const sliderPrevClassName = classNames("prev", {
    prevInherited: prevClassName,
  });
  const sliderNextClassName = classNames("next", {
    nextInherited: nextClassName,
  });

  return (
    <>
      <SliderButton
        direction={"prev"}
        ref={navigationPrevRef}
        className={sliderPrevClassName}
        offset={titles}
        size={buttonSize ?? ButtonSize.MD}
      />
      <SliderButton
        direction={"next"}
        ref={navigationNextRef}
        className={sliderNextClassName}
        offset={titles}
        size={buttonSize ?? ButtonSize.MD}
      />

      <Swiper
        className={containerClassName}
        onSwiper={setSwiper}
        {...swiperParams}
      >
        {children}
      </Swiper>
    </>
  );
};

export default Slider;
