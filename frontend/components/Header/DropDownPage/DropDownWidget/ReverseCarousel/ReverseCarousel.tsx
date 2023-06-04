import Image from "next/image";
import s from "./ReverseCarousel.module.scss";
import { FC } from "react";

type Carousel = {
  widgetFilms: IWidgetFilm[];
  className?: string;
};

interface IWidgetFilm {
  id: string;
  image: string;
}

const IMAGE_PATH = "/images/tv_widget/";

export const widgetFilms: IWidgetFilm[] = [
  { id: "1", image: "film_15.png" },
  { id: "2", image: "film_16.png" },
  { id: "3", image: "film_17.png" },
  { id: "4", image: "film_18.png" },
  { id: "5", image: "film_19.png" },
  { id: "6", image: "film_20.png" },
  { id: "7", image: "film_21.png" },
];

const ReverseCarousel: FC<Carousel> = ({widgetFilms, className }) => {
  if(!widgetFilms) {
    return <div>Контента нет</div>
  }
  return (
    <div className={`${s.slider} ${className}`}>
      <div className={s.slide_track}>
        {widgetFilms.map((film) => (
          <div className={s.slide} key={film.id}>
            <Image
              className={s.actor_img}
              src={IMAGE_PATH + film.image}
              alt={"channel"}
              width={120}
              height={70}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReverseCarousel;
