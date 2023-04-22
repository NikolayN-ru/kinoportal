import GrayButton from "../../components/GrayButton";
import Icon from "../../components/shared/IconComponent/Icon";
import s from "./films/FilmsAdmin.module.scss";
import ControlsBar from "../../componentsAdmin/ControlsBar/ControlsBar";
import Navbar from "../../componentsAdmin/Navbar/Navbar";

const FilmsAdmin = () => {
  return (
    <div className={s.FilmsAdmin}>
      <Navbar />
      <div className={s.row}>
        <div className={s.header}>
          <div className={s.title}>Фильмы</div>
          <div className={s.header_btns}>
            <GrayButton className={s.add_btn} title="Добавить фильм +" />
            <div className={s.search_btn}>
              <Icon name="search" />
            </div>
          </div>
        </div>
        <ControlsBar />
        <div className={s.main}>
          <div className={s.list}>
            <div className={s.table_head}>
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
            </div>
            <div className={s.table_body}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmsAdmin;
