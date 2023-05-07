import DropDownWidget from '../DropDownWidget/DropDownWidget';
import s from './DropDownNotify.module.scss';

const DropDownNotify = () => {
    return (
        <div className={s.dropDown_notify}>
            <div className={s.content}>
      <div className={s.side_content}>
        <div className={s.list_item}>
            <div className={s.title}>Колокольчик куку</div>
         
        </div>
      </div>
      <div className={s.main_content}>
        <div className={s.main_content_popular}></div>
        <div className={s.main_content_Widget_block}>
          <DropDownWidget />
          
        </div>
      </div>
    </div>
        </div>
    );
};

export default DropDownNotify;