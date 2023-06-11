import Image from "next/image";
import s from "./Carousel.module.scss";
import { FC } from "react";

type CarouselProps = {
  filmsFirstLine?: IWidgetFilm[];
  filmsSecondLine?: IWidgetFilm[];
  className?: string;
};

export interface IWidgetFilm {
  id: string;
  image: string;
}

const IMAGE_PATH = "/images/tv_widget/";



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
