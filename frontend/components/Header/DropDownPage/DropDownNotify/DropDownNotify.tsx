import Icon from "@components/ui-kit/IconComponent/Icon";
import s from "./DropDownNotify.module.scss";

const DropDownNotify = () => {
  return (
    <div className={s.dropDown_notify}>
      <div className={s.content}>
        <div className={s.main_content}>
          <div className={s.icon}>
            <Icon name="notify_big"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownNotify;
