import GrayButton from "@components/GrayButton";
import Icon from "@components/ui-kit/IconComponent/Icon";
import Navbar from "@components/componentsAdmin/Navbar";
import s from "./settings/SettingsAdmin.module.scss";

const SettingsAdmin = () => {
  return (
    <div className={s.main}>
      <Navbar />
      <div className={s.row}>
        <div className={s.header}>
          <div className={s.title}>Настройки</div>
          <div className={s.header_btns}>
            <GrayButton className={s.add_btn} title="Добавить +" />
            <div className={s.search_btn}>
              <Icon name="search" />
            </div>
          </div>
        </div>
        <div className={s.settings_block}>
          <div className={s.settings_title}>Учетная запись</div>
          <div className={s.setting}>
            <input
              className={s.setting_input}
              type="text"
              placeholder="Никнейм"
            />
            Сменить никнейм
          </div>
          <div className={s.setting}>
            <input
              className={s.setting_input}
              type="email"
              placeholder="E-mail"
            />
            Сменить E-mail
          </div>
          <div className={s.setting}>
            <input
              className={s.setting_input}
              type="password"
              placeholder="Пароль"
            />
            Введите пароль
          </div>
          <div className={s.setting}>
            <input
              className={s.setting_input}
              type="password"
              placeholder="Пароль"
            />
            Повторите пароль
          </div>
          <div className={s.setting}>
            <GrayButton className={s.save_btn} title="Сохранить изменения" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsAdmin;
