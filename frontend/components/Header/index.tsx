import React, { useEffect, useRef, useState } from "react";
import Icon from "../shared/IconComponent/Icon";
import Logo from "../shared/Logo/Logo";
import s from "./Header.module.scss";
import ModalSearch from "./ModalSearch/ModalSearch";
import { DropDown } from "@components/shared/ui-kit";
import DropDownContentTV from "./DropDownPage/DropDownContentTV/DropDownContentTV";
import DropDownContent, {
  Links,
} from "./DropDownPage/DropDownContent/DropDownContent";
import DropDownNotify from "./DropDownPage/DropDownNotify/DropDownNotify";

const Header = () => {
  const [isModal, setModal] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<Links | undefined>();

  function showDropDownBySelectedLink(link: Links): JSX.Element | undefined {
    
      if (selectedLink === Links.Notify) {
        return (
          <DropDown className={s.DropDownBody} isOpen={isDropDownOpen}>
            <div className={s.menu_block}>
              <ul className={s.menuDropDown}>
                <DropDownNotify />
              </ul>
            </div>
          </DropDown>
        );
      }
      if (selectedLink === Links.TV) {
        return (
          <DropDown className={s.DropDownBody} isOpen={isDropDownOpen}>
            <div className={s.menu_block}>
              <ul className={s.menuDropDown}>
                <DropDownContentTV />
              </ul>
            </div>
          </DropDown>
        );
    }
    if (selectedLink === link) {
      return (
        <DropDown className={s.DropDownBody} isOpen={isDropDownOpen}>
          <div className={s.menu_block}>
            <ul className={s.menuDropDown}>
              <DropDownContent link={link} />
            </ul>
          </div>
        </DropDown>
      );
    }
  }

  const handleToggleDropDown = (link: Links | undefined) => {
    console.log("link", link);
    setSelectedLink(link);
    setIsDropDownOpen((prevState) => !prevState);
  };

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
            <section className={s.section}>
              <div className={s.navigation}>
                <div className={s.list_item}>
                  <div>
                    <span className={s.text}>Мой Иви</span>
                  </div>
                  <div>
                    <span className={s.text}>Что нового</span>
                  </div>
                  <div
                    onMouseEnter={() => handleToggleDropDown(Links.Films)}
                    onMouseLeave={() => handleToggleDropDown(undefined)}
                  >
                    <span className={s.text}>Фильмы</span>{" "}
                    {showDropDownBySelectedLink(Links.Films)}
                  </div>
                  <div
                    onMouseEnter={() => handleToggleDropDown(Links.Serials)}
                    onMouseLeave={() => handleToggleDropDown(undefined)}
                  >
                    <span className={s.text}>Сериалы</span>
                    {showDropDownBySelectedLink(Links.Serials)}
                  </div>
                  <div
                    onMouseEnter={() => handleToggleDropDown(Links.Multfilms)}
                    onMouseLeave={() => handleToggleDropDown(undefined)}
                  >
                    <span className={s.text}>Мультфильмы</span>
                    {showDropDownBySelectedLink(Links.Multfilms)}
                  </div>
                  <div
                    onMouseEnter={() => handleToggleDropDown(Links.TV)}
                    onMouseLeave={() => handleToggleDropDown(undefined)}
                    // onMouseEnter={handleToggleDropDownTV}
                    // onMouseLeave={handleToggleDropDownTV}
                  >
                    <span className={s.text}>TV+</span>
                    {showDropDownBySelectedLink(Links.TV)}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className={s.user_block}>
            <div className={s.btn__subscribe}>Оплатить подписку</div>
            <>
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
            </>

            <div
              className={s.btn__notify}
              onMouseEnter={() => handleToggleDropDown(Links.Notify)}
              onMouseLeave={() => handleToggleDropDown(undefined)}
            >
              <span className={s.text}>
                <Icon name="notify" />
              </span>

              {/* {showDropDownBySelectedLink(Links.Notify)} */}
            </div>

            <div className={s.btn__avatar}>
              <span className={s.text}>
                <Icon name="avatar" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
