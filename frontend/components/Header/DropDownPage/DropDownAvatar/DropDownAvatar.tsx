import React, { useState } from "react";
import Link from "next/link";

import Icon from "@components/ui-kit/IconComponent/Icon";
import Button from "@components/ui-kit/Button";
import SubscriptionSector from "./SubscriptionSector/SubscriptionSector";

import s from "./DropDownAvatar.module.scss";

const DropDownAvatar = () => {
  const [isHovered, setIsHovered] = useState(false);
  interface ICaption {
    id: string;
    name: string;
    url: string;
  }
  const captions: ICaption[] = [
    { id: "1", name: "Изи Иви", url: "/subscription-izi-ivi" },
    { id: "2", name: "Иви", url: "/subscription" },
    { id: "3", name: "Иви + Amediateka", url: "/subscription-ivi-amediateka" },
    { id: "4", name: "Amediateka", url: "/subscription-amediateka" },
    { id: "5", name: "Матч Премьер", url: "/subscription-matchpremier" },
    { id: "6", name: "Матч Футбол", url: "/subscription-matchfootball" },
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("handleMouseEnter", isHovered);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log(isHovered);
  };

  const triggerElement = (
    <div className={s.button_item_sub} onMouseEnter={handleMouseEnter}>
      <div className={s.icon_sub}>
        <Icon name="diamond" />
      </div>
      <Button className={s.button_sub} text="Подписки" small="Подключить" />
    </div>
  );
  const content = (
    <div className={s.auth_content}>
      <Button
        className={s.button_auth}
        text="Войти или зарегистрироваться"
      />
      <div className={s.links_list}>
        <a href="" className={s.link_settings}>
          Настройки
        </a>
        <a href="" className={s.link_settings}>
          Помощь
        </a>
      </div>
    </div>
  );

  const hoverContent = (
    <div className={s.SubscriptionSector}>
      <div className={s.title}>Подписки</div>
      <div className={s.sub_list}>
        {captions.map((caption) => {
          return (
            <div className={s.item} key={caption.id}>
              <Link href={caption.url}>{caption.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
  return (
    <div className={s.dropDown_notify}>
      <div className={s.content}>
        <div className={s.main_content}>
          <div className={s.buttons_list}>
            <div className={s.button_item} onMouseEnter={handleMouseLeave}>
              <div className={s.icon}>
                <Icon name="video" />
              </div>
              <Button className={s.button} text="Покупки" />
            </div>
            <div className={s.button_item} onMouseEnter={handleMouseLeave}>
              <div className={s.icon}>
                <Icon name="favorite" />
              </div>
              <Button className={s.button} text="Смотреть позже" />
            </div>
            <div className={s.button_item} onMouseEnter={handleMouseLeave}>
              <div className={s.icon}>
                <Icon name="history" />
              </div>
              <Button className={s.button} text="История просмотров" />
            </div>
            {triggerElement}
            <div className={s.button_item} onMouseEnter={handleMouseLeave}>
              <div className={s.icon}>
                <Icon name="certificate" />
              </div>
              <Button className={s.button} text="Активация сертификата" />
            </div>
            <div className={s.button_item} onMouseEnter={handleMouseLeave}>
              <div className={s.icon}>
                <Icon name="tv_channels" />
              </div>
              <Button className={s.button} text="Вход по коду" />
            </div>
            <div className={s.button_item} onMouseEnter={handleMouseLeave}>
              <div className={s.icon}>
                <Icon name="wallet" />
              </div>
              <Button className={s.button} text="Способы оплаты" />
            </div>
            <div className={s.button_item} onMouseEnter={handleMouseLeave}>
              <div className={s.icon}>
                <Icon name="share_small" />
              </div>
              <Button className={s.button} text="Пригласить друзей" />
            </div>
          </div>
        </div>
        <div className={s.side_content}>
          <div className={s.side_content_inner}>
            <SubscriptionSector
              className={s.sub_sector}
              content={content}
              hoverContent={hoverContent}
              isHovered={isHovered}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownAvatar;
