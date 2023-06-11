import React, { useState } from "react";
import Link from "next/link";
import Icon from "@components/ui-kit/IconComponent/Icon";
import Button from "@components/ui-kit/Button";
import SubscriptionSector from "./SubscriptionSector/SubscriptionSector";
import s from "./DropDownAvatar.module.scss";
import { buttons, captions } from "./avatar";
export interface ICaption {
  id: string;
  name: string;
  url: string;
}
export interface IButtonsDropDown {
  id: string;
  iconName: string;
  text: string;
}
const DropDownAvatar = () => {
  const [isHovered, setIsHovered] = useState(false);

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
      <Button
        className={s.button_sub}
        color="grey"
        text="Подписки"
        small="Подключить"
      />
    </div>
  );
  const content = (
    <div className={s.auth_content}>
      <div className={s.button_auth_wrap}>
        <Button className={s.button_auth} text="Войти или зарегистрироваться" />
      </div>
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
            {buttons.map((button) => {
              return (
                <div
                  className={s.button_item}
                  onMouseEnter={handleMouseLeave}
                  key={button.id}
                >
                  <div className={s.icon}>
                    <Icon name={button.iconName} />
                  </div>
                  <Button
                    color="grey"
                    className={s.button}
                    text={button.text}
                  />
                </div>
              );
            })}
            {triggerElement}
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
