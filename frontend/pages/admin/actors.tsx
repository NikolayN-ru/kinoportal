import s from "./actors/ActorsAdmin.module.scss";
import GrayButton from "../../components/GrayButton";
import Icon from "../../components/shared/IconComponent/Icon";
import ControlsBar from "../../componentsAdmin/ControlsBar/ControlsBar";
import Image from "next/image";
import img from "../../public/stallone.jpg";
import Navbar from "../../componentsAdmin/Navbar/Navbar";
const ActorsAdmin = () => {
  return (
    <div className={s.FilmsAdmin}>
      <Navbar />
      <div className={s.row}>
        <div className={s.header}>
          <div className={s.title}>Актеры</div>
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
                <div className={s.head_title}>Имя</div>
                <div className={s.head_title}>Участие в фильмах</div>
                <div className={s.head_title}>Биография</div>
                <div className={s.head_title}>Картинка</div>
              </div>
            </div>
            <div className={s.table_body}>
              <div className={s.body_row}>
                <div className={s.body_column}>
                  <input className={s.checkbox} type="checkbox" name="" id="" />
                  <div className={s.body_title}>Сильвестр Сталлоне</div>
                  <div className={s.body_title}>Рокки, Рокки 2, Рокки 3</div>
                  <div className={s.body_title}>
                    Сильвестр Сталлоне (Sylvester Stallone) — знаменитый
                    американский актёр, режиссёр, сценарист и продюсер.
                    Прежде...
                  </div>
                  <div className={s.body_title}>
                    <Image
                      className={s.actor_img}
                      src={img}
                      width={60}
                      height={60}
                      alt="actor"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorsAdmin;
