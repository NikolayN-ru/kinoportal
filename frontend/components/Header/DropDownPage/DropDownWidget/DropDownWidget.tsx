import Carousel, {
  filmsFirstLine,
  filmsSecondLine,
} from "@components/Header/DropDownPage/DropDownWidget/Carousel/Carousel";
import Icon from "@components/ui-kit/IconComponent/Icon";
import Button from "@components/ui-kit/Button";
import React from "react";
import s from "./DropDownWidget.module.scss";
import ReverseCarousel, {
  widgetFilms,
} from "./ReverseCarousel/ReverseCarousel";

const DropDownWidget = () => {
  return (
    <div className={s.widget}>
      <div className={s.poster_block}>
        <Carousel filmsFirstLine={filmsFirstLine} />
        <ReverseCarousel widgetFilms={widgetFilms} />
        <Carousel filmsSecondLine={filmsSecondLine} />
      </div>
      <div className={s.subscribe}>
        <Icon name="i" />
        <div className={s.subscribe_text}>
          Подписка Иви
          <span className={s.small_text}>От 199 ₽ за месяц</span>
        </div>
      </div>
      <div className={s.emerge_block}>
        <Button className={s.subscribtion_btn} title="Подключить" />
        <span className={s.note}>Отключить можно в любой момент</span>
      </div>
    </div>
  );
};

export default DropDownWidget;
