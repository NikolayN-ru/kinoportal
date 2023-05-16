import { FC } from "react";
import PopularItem from "@components/PopularItem";
import Comment from "@components/Comment";
import s from "./actor.module.scss";
import Link from "next/link";

const _: FC<any> = ({ children }) => {
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
          <Link href={"/actor/1/director"}>
            <div className={s.actorFilmsLabel_btn}>Режиссер</div>
          </Link>
          <Link href={"/actor/1/actor"}>
            <div className={s.actorFilmsLabel_btn}>Aктер</div>
          </Link>
        </div>
        {children}
        <div className={s.actorFilmsLabel}>
          <div className={s.actorFilmsLabel_btn}>Популярные</div>
        </div>
        <div className={s.comments}>
          <Comment count={5} />
          <Comment count={1} />
          <Comment count={8} />
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

export default _;
