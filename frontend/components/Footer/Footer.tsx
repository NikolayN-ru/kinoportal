import GrayButton from "../GrayButton";
import Icon from "../shared/IconComponent/Icon";
import s from "./Footer.module.scss";
import { FC } from "react";

const Footer: FC<any> = () => {
  return (
    <>
      <div className={s.footer}>
        <div className={s.container}>
          <div className={s.row}>
            <div className={s.column}>
              <div className={s.title}>О нас</div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  О компании
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Вакансии
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Программа бета-тестирования
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Информация для партнёров
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Размещение рекламы
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Пользовательское соглашение
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Политика конфиденциальности
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Комплаенс
                </a>
              </div>
            </div>
            <div className={s.column}>
              <div className={s.title}>Разделы</div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Мой иви
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Что нового
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Фильмы
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Сериалы
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Мультфильмы
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  TV+
                </a>
              </div>
              <div className={s.item}>
                <a className={s.link} href="/" target="_blank">
                  Что посмотреть
                </a>
              </div>
              <div className={s.item}>
                <a href="/" target="_blank">
                  <span className={s.gradient}>Активация сертификата</span>
                </a>
              </div>
            </div>
            <div className={s.column}>
              <div className={s.title}>Служба поддержки</div>
              <div className={s.description_block}>
                <div className={s.description}>
                  Мы всегда готовы вам помочь.
                </div>
                <div className={s.description}>Наши операторы онлайн 24/7</div>
              </div>
              <div className={s.support_block}>
                <div className={s.chat}>
                  <GrayButton className={s.chat_btn} title="Написать в чате" />
                </div>
                <div className={s.contact__icons}>
                  <GrayButton
                    className={s.contact_btn}
                    title={<Icon name="message" />}
                  />
                  <GrayButton
                    className={s.contact_btn}
                    title={<Icon name="tel" />}
                  />
                </div>
                <div className={s.ask_block}>
                  <span className={s.ask_text}>ask.ivi.ru</span>
                  Ответы на вопросы
                </div>
              </div>
            </div>
            <div className={s.column}>
              <div className={s.footer__widget}>
                <div className={s.image_wrap}>
                  <Icon name="mouthpiece" />
                </div>
                <div className={s.footer_widget_text}>
                  Смотрите фильмы, сериалы и мультфильмы без рекламы
                </div>
              </div>
            </div>
          </div>
          <div className={s.subFooter}>
            <div className={s.stores}>
              <div className={s.overturn}>
                <div className={s.overturn_btn_wrap}>
                  <GrayButton
                    className={s.overturn_btn}
                    title={<Icon name="apple" />}
                    preamble="Загрузить в"
                    text="App Store"
                  />
                </div>
                <div className={s.overturn_btn_wrap}>
                  <GrayButton
                    className={s.overturn_btn}
                    title={<Icon name="android" />}
                    preamble="Доступно в"
                    text="Google Play"
                  />
                </div>
                <div className={s.overturn_btn_wrap}>
                  <GrayButton
                    className={s.overturn_btn}
                    title={<Icon name="tv" />}
                    preamble="Смотрите на"
                    text="Smart TV"
                  />
                </div>
                <div className={s.overturn_btn_wrap}>
                  <GrayButton
                    className={s.overturn_btn}
                    title={<Icon name="desktop" />}
                    text="Все устройства"
                  />
                </div>
              </div>

              <div className={s.copyrights_block}>
                <div className={s.copyrights_site}>© 2023 ООО «Иви.ру»</div>
                <div className={s.copyrights_content}>
                  HBO ® and related service marks are the property of Home Box
                  Office, Inc
                </div>
              </div>
            </div>
            <div className={s.community}>
              <div className={s.community_link}>
                <GrayButton className={s.social} title={<Icon name="vk" />} />
              </div>
              <div className={s.community_link}>
                <GrayButton className={s.social} title={<Icon name="ok" />} />
              </div>
              <div className={s.community_link}>
                <GrayButton
                  className={s.social}
                  title={<Icon name="twitter" />}
                />
              </div>
              <div className={s.community_link}>
                <GrayButton
                  className={s.social}
                  title={<Icon name="callback" />}
                />
              </div>
              <div className={s.community_link}>
                <GrayButton className={s.social} title={<Icon name="in" />} />
              </div>
              <div className={s.community_link}>
                <GrayButton className={s.social} title={<Icon name="tg" />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
