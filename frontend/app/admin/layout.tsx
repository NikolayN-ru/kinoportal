import { FC, ReactNode } from "react";
import GrayButton from "@components/GrayButton";
import Icon from "@components/ui-kit/IconComponent/Icon";
import ControlsBar from "@components/componentsAdmin/ControlsBar";
import Navbar from "@components/componentsAdmin/Navbar";
import s from "./layout.module.scss";

const HomeAdmin: FC<{ children: ReactNode }> = ({ children }) => {
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
        {children}
      </div>
    </div>
  );
};

export default HomeAdmin;
