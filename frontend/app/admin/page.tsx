import Button from "@components/ui-kit/Button";
import s from "./settings/SettingsAdmin.module.scss";

const SettingsAdmin = () => {
  return (
    <div className={s.main}>
      <div className={s.row}>
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
            <div className={s.save_btn}>
              <Button title="Сохранить изменения" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsAdmin;
