import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GrayButton from "../GrayButton";
import Button from "../shared/Button/Button";
import Icon from "../shared/IconComponent/Icon";
import Logo from "../shared/Logo/Logo";
import s from "./Header.module.scss";
import ModalSearch from "./ModalSearch/ModalSearch";

const Header = () => {
  const [isModal, setModal] = useState(false);
  const onClose = () => {
    setModal(false);
  };
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.row}>
          <div className={s.menu}>
            <div className={s.logo}>
              <Logo />
            </div>
            <div className={s.listItem}>
              <div className={s.link}>
                <a className={s.link} href="/" target="_blank">
                  Мой Иви
                </a>
              </div>
              <div className={s.link}>
                <a className={s.link} href="/" target="_blank">
                  Что нового
                </a>
              </div>
              <div className={s.link}>
                <a className={s.link} href="/" target="_blank">
                  Фильмы
                </a>
              </div>
              <div className={s.link}>
                <a className={s.link} href="/" target="_blank">
                  Сериалы
                </a>
              </div>
              <div className={s.link}>
                <a className={s.link} href="/" target="_blank">
                  Мультфильмы
                </a>
              </div>
              <div className={s.link}>
                <a className={s.link} href="/" target="_blank">
                  TV+
                </a>
              </div>
            </div>
          </div>
          <div className={s.userBlock}>
            <div className={s.btn__subscribe}>Оплатить подписку</div>
            <React.Fragment>
            <div className={s.btn__search} onClick={() => setModal(true)}>
              <div className={s.imgWrapper}>
                <Icon name="search" />
              </div>
              Поиск
            </div>
            <ModalSearch
                    visible={isModal}
                    footer={<button onClick={onClose}>Закрыть</button>}
                    onClose={onClose}
                  />
            </React.Fragment>
            <div className={s.btn__notify}>
              <Icon name="notify" />
            </div>
            <div className={s.btn__avatar}>
              <Icon name="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
