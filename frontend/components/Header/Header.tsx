import GrayButton from "../GrayButton";
import Button from "../shared/Button/Button";
import Icon from "../shared/IconComponent/Icon";
import Logo from "../shared/Logo/Logo";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.menu}>
            <div className={style.logo}>
              <Logo />
            </div>
            <div className={style.listItem}>
              <div className={style.link}>
                <a href="/" target="_blank">
                  Мой Иви
                </a>
              </div>
              <div className={style.link}>
                <a href="/" target="_blank">
                  Что нового
                </a>
              </div>
              <div className={style.link}>
                <a href="/" target="_blank">
                  Фильмы
                </a>
              </div>
              <div className={style.link}>
                <a href="/" target="_blank">
                  Сериалы
                </a>
              </div>
              <div className={style.link}>
                <a href="/" target="_blank">
                  Мультфильмы
                </a>
              </div>
              <div className={style.link}>
                <a href="/" target="_blank">
                  TV+
                </a>
              </div>
            </div>
          </div>
          <div className={style.userBlock}>
            <div className={style.btn__subscribe}>Оплатить подписку</div>
            <div className={style.btn__search}>
              <div className={style.imgWrapper}>
                <Icon name="search" />
              </div>
              Поиск
            </div>
            <div className={style.btn__notify}>
              <Icon name="notify" />
            </div>
            <div className={style.btn__avatar}>
              <Icon name="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
