import Link from "next/link";
import Icon from "../ui-kit/IconComponent/Icon";
import Logo from "../ui-kit/Logo/Logo";
import React, { useState } from "react";
import ModalSearch from "./ModalSearch";
import s from "./Header.module.scss";
import { DropDown } from "@components/shared/ui-kit";
import DropDownContentTV from "./DropDownPage/DropDownContentTV/DropDownContentTV";
import DropDownContent from "./DropDownPage/DropDownContent/DropDownContent";
import DropDownNotify from "./DropDownPage/DropDownNotify/DropDownNotify";
import DropDownAvatar from "./DropDownPage/DropDownAvatar/DropDownAvatar";
import { Links } from "./DropDownPage/DropDownContent/interfaces/LinksEnum";
import { useTranslation } from "react-i18next";
import "../../i18n.js";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isModal, setModal] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<Links | undefined>();

  function showDropDownBySelectedLink(link: Links): JSX.Element | undefined {
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

  function showDropDownNotifyBySelectedLink(): JSX.Element | undefined {
    if (selectedLink === Links.Notify) {
      return (
        <DropDown className={s.DropDownBodyNotify} isOpen={isDropDownOpen}>
          <div className={s.menu_block}>
            <ul className={s.menuDropDown}>
              <DropDownNotify />
            </ul>
          </div>
        </DropDown>
      );
    }
  }

  function showDropDownAvatarBySelectedLink(): JSX.Element | undefined {
    if (selectedLink === Links.Avatar) {
      return (
        <DropDown className={s.DropDownBodyAvatar} isOpen={isDropDownOpen}>
          <div className={s.menu_block}>
            <ul className={s.menuDropDown}>
              <DropDownAvatar />
            </ul>
          </div>
        </DropDown>
      );
    }
  }
  const handleToggleDropDown = (link: Links | undefined) => {
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
              <Link href="/">
                <Logo />
              </Link>
            </div>
              <div className={s.navigation}>
                <div>
                  <span className={s.text}>{t("header.myIvi")}</span>
                </div>
                <div>
                  <span className={s.text}> {t("header.whatsNew")}</span>
                </div>
                <div
                  onMouseEnter={() => handleToggleDropDown(Links.Films)}
                  onMouseLeave={() => handleToggleDropDown(undefined)}
                >
                  <Link href='/movies'><span className={s.text}> {t("header.films")}</span></Link>{" "}
                  {showDropDownBySelectedLink(Links.Films)}
                </div>
                <div
                  onMouseEnter={() => handleToggleDropDown(Links.Serials)}
                  onMouseLeave={() => handleToggleDropDown(undefined)}
                >
                  <span className={s.text}> {t("header.serials")}</span>
                  {showDropDownBySelectedLink(Links.Serials)}
                </div>
                <div
                  onMouseEnter={() => handleToggleDropDown(Links.Multfilms)}
                  onMouseLeave={() => handleToggleDropDown(undefined)}
                >
                  <span className={s.text}> {t("header.cartoon")}</span>
                  {showDropDownBySelectedLink(Links.Multfilms)}
                </div>
                <div
                  onMouseEnter={() => handleToggleDropDown(Links.TV)}
                  onMouseLeave={() => handleToggleDropDown(undefined)}
                >
                  <span className={s.text}>{t("header.TV")}</span>
                  {showDropDownBySelectedLink(Links.TV)}
                </div>
              </div>
              <div className={s.user_block}>
                <button
                  className={s.lang}
                  onClick={() =>
                    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
                  }
                >{`${
                  i18n.language === "en" ? "RUS" : "EN"
                }`}</button>
                {i18n.language === "en" ? (
                  <Icon className={s.icon_lang} name="us" />
                ) : (
                  <Icon className={s.icon_lang} name="rus" />
                )}
                <div className={s.btn__subscribe}>{t("header.pay")}</div>
                <>
                  <div className={s.btn__search} onClick={() => setModal(true)}>
                    <div className={s.imgWrapper}>
                      <Icon name="search" />
                    </div>
                    {t("header.search")}
                  </div>
                  <ModalSearch
                    visible={isModal}
                    footer={
                      <button onClick={onClose}>{t("header.close")}</button>
                    }
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
                  {showDropDownNotifyBySelectedLink()}
                </div>
                <div
                  className={s.btn__avatar}
                  onMouseEnter={() => handleToggleDropDown(Links.Avatar)}
                  onMouseLeave={() => handleToggleDropDown(undefined)}
                >
                  <span className={s.text_avatar}>
                    <Icon name="avatar" />
                  </span>
                  {showDropDownAvatarBySelectedLink()}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
