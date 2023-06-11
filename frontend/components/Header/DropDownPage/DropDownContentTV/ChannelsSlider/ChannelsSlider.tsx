import { SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper";
import s from "./ChannelsSlider.module.scss";
import Image from "next/image";
import Slider from "@components/Slider";
import { FC } from "react";
import { ButtonSize } from "@components/ui-kit/Button/SliderButton";
import Link from "next/link";
import { breakpoints } from "@components/Slider/breakpoints";

const compilationSliderParams: SwiperOptions = {
  breakpoints: {
    [breakpoints.md]: {
      spaceBetween: 12,
      slidesPerView: 2,
    },
    [breakpoints.lg]: {
      spaceBetween: 24,
      slidesPerView: 3,
      allowTouchMove: false,
    },
    [breakpoints.xl]: {
      spaceBetween: 16,
      slidesPerView: 7,
      slidesPerGroup: 6,
      allowTouchMove: false,
    },
  },
  spaceBetween: 12,
  slidesPerView: 1,
  slidesPerGroup: 1,
  allowTouchMove: true,
};

interface IChannelProps {
  federalChannel?: IChannelsItem[];
  sportChannel?: IChannelsItem[];
}

export interface IChannelsItem {
  id: string;
  image: string;
  href: string;
}

const IMAGE_PATH = "/images/tvChannel/";


const ChannelSlider: FC<IChannelProps> = ({ federalChannel, sportChannel }) => {
  const films = federalChannel || sportChannel;

  if (!films) {
    return <div>Контента нет</div>;
  }

  return (
    <div className={s.compilationList}>
      <Slider params={compilationSliderParams} buttonSize={ButtonSize.XS}>
        {films.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={item.href}>
              <Image
                className={s.image}
                src={IMAGE_PATH + item.image}
                alt={"channel"}
                width={88}
                height={58}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default ChannelSlider;
