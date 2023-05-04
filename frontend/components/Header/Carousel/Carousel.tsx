import Image from "next/image";
import img from "../../../public/stallone.jpg";
import s from "./Carousel.module.scss";
import { FC } from "react";

type Carousel = {
  className?: string;
};

const Carousel: FC<Carousel> = ({ className }) => {
  return (
    <div className={`${s.slider} ${className}`}>
      <div className={s.slide_track}>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
        <div className={s.slide}>
          <Image
            className={s.actor_img}
            src={img}
            width={120}
            height={70}
            alt="actor"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
