import Link from "next/link";
import s from "./MobileNavigation.module.scss";
import { Links } from "@components/Header/DropDownPage/DropDownContent/interfaces/LinksEnum";
import ExpansionPanel from "./ExpansionPanel/ExpansionPanel";
import Button from "@components/ui-kit/Button";
import Icon from "@components/ui-kit/IconComponent/Icon";
import { t } from "i18next";
interface IButtonCaption {
  id: string;
  text: string;
  href: string;
}
interface IComunityLink {
  id: string;
  iconName: string;
}
export const linksButton: IButtonCaption[] = [
  { id: "1", text: "Мой Иви", href: "/" },
  { id: "2", text: "Что нового", href: "/new" },
];

const titles = [
  { id: "1", title: "Фильмы", image: "film", link: Links.Films },
  { id: "2", title: "Сериалы", image: "videoIcon", link: Links.Serials },
  { id: "3", title: "Мультфильмы", image: "rocket", link: Links.Multfilms },
  { id: "4", title: "TV+", image: "video_cam", link: Links.TV },
];

const comunityLinks: IComunityLink[] = [
  { id: "1", iconName: "vk" },
  { id: "2", iconName: "ok" },
  { id: "3", iconName: "twitter" },
  { id: "4", iconName: "callback" },
  { id: "5", iconName: "in" },
  { id: "6", iconName: "tg" },
];

const MobileNavigation = () => {
  return (
    <div className={s.mobileNavigation}>
      <div className={s.row}>
        <div className={s.button_caption}>
          {linksButton.map((link) => {
            return (
              <div className={s.button_item}>
                <Link href={link.href}>{link.text}</Link>
              </div>
            );
          })}
          <div className={s.title_wrap}>
            {titles.map((title) => {
              return (
                <div className={s.title}>
                  <Icon name={title.image} />
                  <ExpansionPanel title={title.title} link={title.link} />
                </div>
              );
            })}
          </div>
          <div className={s.button_item}>
            <Link href="https://www.ivi.ru/goodmovies">Что посмотреть</Link>
          </div>
        </div>
        <div className={s.button_caption}>
          <Link href="https://www.ivi.ru/all?ivi_rating">
            Иви.Рейтинг фильмы
          </Link>
          <Link href="https://www.ivi.ru/all?ivi_rating">
            Иви.Рейтинг сериалы
          </Link>
        </div>
        <div className={s.button_caption}>
          <div className={s.title_wrap}>
            <div className={s.title}>
              <Icon name="help" />
              <ExpansionPanel title="О нас" link={Links.About} />
            </div>
          </div>
        </div>
        <Link href="https://www.ivi.ru/code">Вход по коду</Link>
        <div className={s.buttons}>
          <Button
            color="blue"
            className={s.overturn_btn}
            title={<Icon name="tv" />}
            preamble={String(t("footer.look"))}
            text="Smart TV"
          />
          <Button
            color="blue"
            className={s.overturn_btn}
            title={<Icon name="desktop" />}
            text={String(t("footer.allDevices"))}
          />
        </div>
        <div className={s.community}>
          {comunityLinks.map((comunityLink) => {
            return (
              <div className={s.community_link} key={comunityLink.id}>
                <Button
                  color="blue"
                  className={s.social}
                  title={<Icon name={comunityLink.iconName} />}
                />
              </div>
            );
          })}
        </div>
        <div className={s.copyright}>© 2023 ООО «Иви.ру»</div>
      </div>
    </div>
  );
};

export default MobileNavigation;
