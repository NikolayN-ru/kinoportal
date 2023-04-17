import { FC } from "react";
import FilmsItem from "../../../components/FilmsItem/FilmsItem";
import PopularItem from "../../../components/PopularItem/PopularItem";
import s from "./actor.module.scss";

type Props = {};

const Index: FC<any> = (props: Props) => {
  return (
    <div className={s.actor}>
      <div className={s.actorImage}>
        <img src="" alt="" />
      </div>
      <div className={s.actorName}>
        <h1>Карлос Перес</h1>
        <p>Carlos Pérez</p>
      </div>
      <div className={s.actorFilms}>
        <div className={s.actorFilmsHead}>
          <h2>Полная фильмография</h2>
          <span>1 фильм</span>
        </div>
        <div className={s.actorFilmsLabel}>
          <div className={s.actorFilmsLabel_btn}>Режиссер</div>
        </div>
        <div className={s.actorFilms}>
          <FilmsItem />
        </div>
        <div className={s.actorComments}>
          <h2>Комментарии</h2>
          <div>
            <input type="text" placeholder="расскажите первым о персоне" />
            <button>отправить</button>
          </div>
        </div>
        <div className={s.actorPopular}>
            <h2>Популярные персоны</h2>
            <div className={s.actorPopular_items}>
                <PopularItem />
                <PopularItem />
                <PopularItem />
                <PopularItem />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
