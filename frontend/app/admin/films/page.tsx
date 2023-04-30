import s from "./page.module.scss";

const FilmsAdmin = () => {
  return (
    <div>
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
        <div className={s.body_column}>
          <input className={s.checkbox} type="checkbox" name="" id="" />
          <div className={s.head_title}>Фильм 1</div>
          <div className={s.head_title}>Полнометражный</div>
          <div className={s.head_title}>2022</div>
          <div className={s.head_title}>Триллер</div>
          <div className={s.head_title}>8.0</div>
          <div className={s.head_title}>Русский</div>
          <div className={s.head_title}>Картинка</div>
        </div>
      </div>
    </div>
  );
};

export default FilmsAdmin;
