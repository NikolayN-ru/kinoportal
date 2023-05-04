import React, { useRef, useState } from "react";
import Icon from "../shared/IconComponent/Icon";
import Logo from "../shared/Logo/Logo";
import s from "./Header.module.scss";
import ModalSearch from "./ModalSearch/ModalSearch";
import Link from "next/link";
import { ROUTES } from "src/routes";
// import DropDownPage from "./DropDownPage/DropDownPage";
import { DropDown } from "@components/shared/ui-kit";
import DropDownContentTV from "./DropDownPage/DropDownContentTV/DropDownContentTV";
import DropDownContent, { Links } from "./DropDownPage/DropDownContent/DropDownContent";

const Header = () => {
  const [isModal, setModal] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<Links | undefined>();
  const [isDropDownTVOpen, setIsDropDownTVOpen] = useState(false);
  // const [isModal, setModal] = useState(false);
  // const onClose = () => {
  //   setModal(false);
  // };
  function showDropDownBySelectedLink(link: Links): JSX.Element | undefined {
    if (selectedLink === link) {
      return (
        <DropDown className={s.DropDownBody} isOpen={isDropDownOpen}>
          <div className={s.menu_block}>
            <ul className={s.menuT}>
              <DropDownContent link={link} />
            </ul>
          </div>
        </DropDown>
      );
    }
  }

  function handleToggleDropDownTV() {
    setIsDropDownTVOpen((prevState) => !prevState);
  }

  const handleToggleDropDown = (link: Links) => {
    setSelectedLink(link);
    setIsDropDownOpen((prevState) => !prevState);
  };
  const refToggleDropDown = useRef(null);
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
      <nav className={s.navigation}>
     
          
            <ul className={s.listItem}>
              <li className={s.link} ref={refToggleDropDown}>
                <span className={s.text}>Мой Иви</span>
              </li> 
              <li className={s.link} ref={refToggleDropDown}>
                <span className={s.text}>Что нового</span>
              </li>
              <li
                className={s.link}
                ref={refToggleDropDown}
                onMouseEnter={() => handleToggleDropDown(Links.Films)}
                onMouseLeave={() => handleToggleDropDown(Links.Films)}
              >
                <span className={s.text}>Фильмы</span>{" "}
                {showDropDownBySelectedLink(Links.Films)}
              </li>
              <li
                className={s.link}
                ref={refToggleDropDown}
                onMouseEnter={() => handleToggleDropDown(Links.Serials)}
                onMouseLeave={() => handleToggleDropDown(Links.Serials)}
              >
                <span className={s.text}>Сериалы</span>
                {showDropDownBySelectedLink(Links.Serials)}
              </li>
              <li
                className={s.link}
                ref={refToggleDropDown}
                onMouseEnter={() => handleToggleDropDown(Links.Multfilms)}
                onMouseLeave={() => handleToggleDropDown(Links.Multfilms)}
              >
                <span className={s.text}>Мультфильмы</span>
                {showDropDownBySelectedLink(Links.Multfilms)}
              </li>
              <li
                className={s.link}
                ref={refToggleDropDown}
                onMouseEnter={handleToggleDropDownTV}
                onMouseLeave={handleToggleDropDownTV}
              >
                <span className={s.text}>TV+</span>
                <DropDown className={s.DropDownBody} isOpen={isDropDownTVOpen}>
                  <div className={s.menu_block}>
                    <ul className={s.menuT}>
                      <DropDownContentTV />
                    </ul>
                  </div>
                </DropDown>
              </li>
            </ul>

      </nav>
    </section>





    
          </div>
          <div className={s.userBlock}>
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
