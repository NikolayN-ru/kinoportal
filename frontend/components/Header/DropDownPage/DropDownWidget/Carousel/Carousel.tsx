import Image from "next/image";
import s from "./Carousel.module.scss";
import { FC } from "react";

type CarouselProps = {
  filmsFirstLine?: IWidgetFilm[];
  filmsSecondLine?: IWidgetFilm[];
  className?: string;
};

interface IWidgetFilm {
  id: string;
  image: string;
}

const IMAGE_PATH = "/images/tv_widget/";

export const filmsFirstLine: IWidgetFilm[] = [
  { id: "1", image: "film_1.png" },
  { id: "2", image: "film_2.png" },
  { id: "3", image: "film_3.png" },
  { id: "4", image: "film_4.png" },
  { id: "5", image: "film_5.png" },
  { id: "6", image: "film_6.png" },
  { id: "7", image: "film_7.png" },
];

export const filmsSecondLine: IWidgetFilm[] = [
  { id: "1", image: "film_8.png" },
  { id: "2", image: "film_9.png" },
  { id: "3", image: "film_10.png" },
  { id: "4", image: "film_11.png" },
  { id: "5", image: "film_12.png" },
  { id: "6", image: "film_13.png" },
  { id: "7", image: "film_14.png" },
];

const Carousel: FC<CarouselProps> = ({
  filmsFirstLine,
  filmsSecondLine,
  className,
}) => {
  const films = filmsFirstLine || filmsSecondLine;

  if (!films) {
    return <div>Контента нет</div>;
  }

  return (
    <div className={`${s.slider} ${className}`}>
      <div className={s.slide_track}>
        {films.map((item) => (
          <div className={s.slide} key={item.id}>
            <Image
              className={s.actor_img}
              src={IMAGE_PATH + item.image}
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

export default Carousel;
