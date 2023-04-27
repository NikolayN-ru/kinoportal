import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "../../i18n";

import Icon from "../shared/IconComponent/Icon";
import Logo from "../shared/Logo/Logo";
import ModalSearch from "./ModalSearch";
import s from "./Header.module.scss";

const Header = () => {
  const { t, i18n } = useTranslation();
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
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className={s.listItem}>
              <div className={s.link}>
                <a className={s.link} href="/" target="_blank">
                  {t("header.myIvi")}
                </a>
              </div>
              <div className={s.link}>
                <a className={s.link} href="/" target="_blank">
                  {t("header.whatsNew")}
                </a>
              </div>
              <div className={s.link}>
                <a className={s.link} href="/" target="_blank">
                  {t("header.films")}
                </a>
              </div>
              <div className={s.link}>
                <a className={s.link} href="/" target="_blank">
                  {t("header.serials")}
                </a>
              </div>
              <div className={s.link}>
                <a className={s.link} href="/" target="_blank">
                  {t("header.cartoon")}
                </a>
              </div>
              <div className={s.link}>
                <a className={s.link} href="/" target="_blank">
                  {t("header.TV")}
                </a>
              </div>
            </div>
          </div>
          <div className={s.userBlock}>
            <button
              onClick={() =>
                i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
              }
            >{`${
              i18n.language === "en" ? "изменить на RUS" : "change to EN"
            }`}</button>
            {i18n.language === "en" ? <Icon name="us" /> : <Icon name="rus" />}
            <div className={s.btn__subscribe}>{t("header.pay")}</div>
            <div className={s.btn__search} onClick={() => setModal(true)}>
              <div className={s.imgWrapper}>
                <Icon name="search" />
              </div>
              {t("header.search")}
            </div>
            <ModalSearch
              visible={isModal}
              footer={<button onClick={onClose}>{t("header.close")}</button>}
              onClose={onClose}
            />
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
