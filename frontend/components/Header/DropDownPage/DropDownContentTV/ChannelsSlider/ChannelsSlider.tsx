import { SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper";
import s from "./ChannelsSlider.module.scss";
import Image from "next/image";
import Slider from "@components/Slider";
import { breakpoints } from "@components/Slider/breakpoints";
import { FC } from "react";
import { ButtonSize } from "@components/ui-kit/Button/SliderButton";
import Link from "next/link";

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

interface IChannelsItem {
  id: string;
  image: string;
  href: string;
}

const IMAGE_PATH = "/images/tvChannel/";

export const federalChannel: IChannelsItem[] = [
  { id: "1", image: "1tv.png", href: "/" },
  { id: "2", image: "russia1.png", href: "/" },
  { id: "3", image: "match.png", href: "/" },
  { id: "4", image: "ntv.png", href: "/" },
  { id: "5", image: "5ch.png", href: "/" },
  { id: "6", image: "russiaK.png", href: "/" },
  { id: "7", image: "russia24.png", href: "/" },
  { id: "8", image: "carousel.png", href: "/" },
  { id: "9", image: "otr.png", href: "/" },
  { id: "10", image: "tvc.png", href: "/" },
  { id: "11", image: "rentv.png", href: "/" },
  { id: "12", image: "spas.png", href: "/" },
  { id: "13", image: "sts.png", href: "/" },
  { id: "14", image: "tv3.png", href: "/" },
  { id: "15", image: "tnt.png", href: "/" },
  { id: "16", image: "mir.png", href: "/" },
  { id: "17", image: "zvezda.png", href: "/" },
];

export const sportChannel: IChannelsItem[] = [
  { id: "1", image: "match_premier.png", href: "/" },
  { id: "2", image: "match_football.png", href: "/" },
  { id: "3", image: "match_football2.png", href: "/" },
  { id: "4", image: "match_football3.png", href: "/" },
  { id: "5", image: "boec.png", href: "/" },
  { id: "6", image: "khl.png", href: "/" },
  { id: "7", image: "match_game.png", href: "/" },
  { id: "8", image: "match_arena.png", href: "/" },
  { id: "9", image: "match_strana.png", href: "/" },
];
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
