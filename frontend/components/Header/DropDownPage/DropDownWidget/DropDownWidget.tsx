import GrayButton from '@components/GrayButton';
import Carousel from '@components/Header/Carousel/Carousel';
import Icon from '@components/shared/IconComponent/Icon';
import React from 'react';
import s from './DropDownWidget.module.scss';
const DropDownWidget = () => {
    return (
        <div className={s.widget}>
        <div className={s.poster_block}>
          <Carousel />
          <Carousel className={s.reverse} />
          <Carousel />
        </div>
        <div className={s.subscribe}>
          <Icon name="i" />
          <div className={s.subscribe_text}>
            Подписка Иви
            <span className={s.small_text}>От 199 ₽ за месяц</span>
          </div>
        </div>
        <div className={s.emerge_block}>
          <GrayButton className={s.subscribtion_btn} title="Подключить" />
          <span className={s.note}>Отключить можно в любой момент</span>
        </div>
      </div>
    );
};

export default DropDownWidget;