import IconComponent from "../../ui-kit/IconComponent/Icon";
import s from "./ControlsBar.module.scss";
import Button from "@components/ui-kit/Button";
const ControlsBar = () => {
  return (
    <div className={s.controlsBar}>
      <div className={s.row}>
        <div className={s.search_block}>
          <Button className={s.btn} title="Фильтр" />
          <Button className={s.btn} title="Сортировка" />
          <div className={s.input_block}>
            <input className={s.input} type="text" placeholder="Поиск" />
            <Button
              className={s.icon}
              title={<IconComponent name="search" />}
            />
          </div>
        </div>
        <div className={s.buttons_block}>
          <Button className={s.btn} title="Обновить" />
          <Button className={s.btn} title="Редактировать" />
        </div>
      </div>
    </div>
  );
};

export default ControlsBar;
