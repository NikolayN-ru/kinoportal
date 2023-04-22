import GrayButton from "../../components/GrayButton";
import Icon from "../../components/shared/IconComponent/Icon";
import s from "./home/HomeAdmin.module.scss";
import ControlsBar from "../../componentsAdmin/ControlsBar/ControlsBar";
import Navbar from "../../componentsAdmin/Navbar/Navbar";

const HomeAdmin = () => {
  return (
    <div className={s.HomeAdmin}>
      <Navbar />
      <div className={s.row}>
        <div className={s.header}>
          <div className={s.title}>Главная</div>
          <div className={s.header_btns}>
            <GrayButton className={s.add_btn} title="Добавить +" />
            <div className={s.search_btn}>
              <Icon name="search" />
            </div>
          </div>
        </div>
        <ControlsBar />
      </div>
    </div>
  );
};

export default HomeAdmin;
