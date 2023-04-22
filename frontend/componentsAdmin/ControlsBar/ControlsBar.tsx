import IconComponent from "../../components/shared/IconComponent/Icon";
import s from "./ControlsBar.module.scss";
import GrayButton from '../../components/GrayButton/index';
const ControlsBar = () => {
  return (
    <div className={s.controlsBar}>
      <div className={s.row}>
        <div className={s.search_block}>
          <GrayButton className={s.btn} title="Фильтр" />
          <GrayButton className={s.btn} title="Сортировка" />
          <div className={s.input_block}>
            <input className={s.input} type="text" placeholder="Поиск" />
            <GrayButton className={s.icon} title={<IconComponent name='search'/>} />
          </div>
        </div>
        <div className={s.buttons_block}>
          <GrayButton className={s.btn} title="Обновить" />
          <GrayButton className={s.btn} title="Редактировать" />
        </div>
      </div>
    </div>
  );
};

export default ControlsBar;
