import Button from "@components/ui-kit/Button";
import IconComponent from "../../ui-kit/IconComponent/Icon";
import s from "./ControlsBar.module.scss";
const ControlsBar = () => {
  return (
    <div className={s.controlsBar}>
      <div className={s.row}>
        <div className={s.search_block}>
          <div className={s.btn}>
            <Button title="Фильтр" />
          </div>
          <div className={s.btn}>
            <Button title="Сортировка" />
          </div>
          <div className={s.input_block}>
            <input className={s.input} type="text" placeholder="Поиск" />
            <div className={s.icon}>
              <Button title={<IconComponent name="search" />} />
            </div>
          </div>
        </div>
        <div className={s.buttons_block}>
          <div className={s.btn}>
            <Button title="Обновить" />
          </div>
          <div className={s.btn}>
            <Button title="Редактировать" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlsBar;
