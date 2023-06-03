"use client";
import { useState } from "react";
import s from "./page.module.scss";
import ModalAdminFilm from "./ModalAdminFilm/ModalAdminFilm";
import { useAllFilmsQuery, useFilmItemQuery } from "@redux/filmsApi";

const FilmsAdmin = () => {
  const [isModal, setModal] = useState(false);

  const { data = [], error, isLoading } = useAllFilmsQuery("all");
  // console.log(data, "data");

  const onClose = () => {
    setModal(false);
  };

  if (isLoading) {
    return <div>LOADING</div>;
  }

  return (
    <div>
      <div className={s.add_btn_block}>
        <button className={s.add_btn} onClick={() => setModal(true)}>
          Добавить +
        </button>

        <ModalAdminFilm
          title="Добавить фильм"
          visible={isModal}
          footer={<button onClick={onClose}>Закрыть</button>}
          onClose={onClose}
          placeholder="Название"
        />
      </div>
      <div className={s.head_row}>
        <input className={s.checkbox} type="checkbox" name="" id="" />
        <div className={s.head_title}>Название</div>
        <div className={s.head_title}>Тип видео</div>
        <div className={s.head_title}>Год выпуска</div>
        <div className={s.head_title}>Категория</div>
        <div className={s.head_title}>Оценка</div>
        <div className={s.head_title}>Язык</div>
        <div className={s.head_title}>Картинка</div>
      </div>
      <div className={s.body_row}>
        {/* <div className={s.body_column}>
          <input className={s.checkbox} type="checkbox" name="" id="" />
          <div className={s.head_title}>Фильм 1</div>
          <div className={s.head_title}>Полнометражный</div>
          <div className={s.head_title}>2022</div>
          <div className={s.head_title}>Триллер</div>
          <div className={s.head_title}>8.0</div>
          <div className={s.head_title}>Русский</div>
          <div className={s.head_title}>Картинка</div>
        </div> */}
      </div>
      {data.map(
        ({ title, year, rating, quality }: { title: string; year: number; rating:number; quality:string }, id: number) => (
          <div className={s.body_column} key={id}>
            <input className={s.checkbox} type="checkbox" name="" id="" />
            <div className={s.head_title}>{title}</div>
            <div className={s.head_title}>{quality}</div>
            <div className={s.head_title}>{year}</div>
            <div className={s.head_title}>Триллер</div>
            <div className={s.head_title}>{rating}</div>
            <div className={s.head_title}>Русский</div>
            <div className={s.head_title}>Картинка</div>
          </div>
        )
      )}
    </div>
  );
};

export default FilmsAdmin;
