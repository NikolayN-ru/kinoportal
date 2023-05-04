"use client";
import { FC, ReactNode, useState } from "react";
import GrayButton from "@components/GrayButton";
import Icon from "@components/shared/IconComponent/Icon";
import ControlsBar from "../../components/componentsAdmin/ControlsBar";
import Navbar from "../../components/componentsAdmin/Navbar/Navbar";
import s from "./layout.module.scss";
import "./admin.scss";
import ModalAdmin from "./ModalAdmin/ModalAdmin";

const HomeAdmin: FC<{ children: ReactNode }> = ({ children }) => {
  // const [isModal, setModal] = useState(false);
  // const onClose = () => {
  //   setModal(false);
  // };
  return (
    <div className={s.HomeAdmin}>
      <Navbar />
      <div className={s.row}>

        <div className={s.header}>
          <div className={s.title}>Главная</div>
          <div className={s.header_btns}>
            {/* <button className={s.add_btn} onClick={() => setModal(true)}>
              Добавить +
            </button>
            <ModalAdmin
              visible={isModal}
              footer={<button onClick={onClose}>Закрыть</button>}
              onClose={onClose}
            /> */}
            <div className={s.search_btn}>
              <Icon name="search" />
            </div>
            <div className={s.login_block}>
          <div className={s.login}>
            <Icon name="avatar"/>
          </div>
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
