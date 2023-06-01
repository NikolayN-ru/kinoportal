import Link from "next/link";
import s from "./MobileNavigation.module.scss";
import Tooltip from "@components/ui-kit/Tooltip";
import TooltipMobile from "./TooltipMobile/TooltipMobile";
import { content } from "@components/Header/DropDownPage/DropDownContent/DropDownContent";
interface IButtonCaption {
  id: string;
  text: string;
  href: string;
}
export const linksButton: IButtonCaption[] = [
  { id: "1", text: "Мой Иви", href: "/" },
  { id: "2", text: "Что нового", href: "/new" },
];

const titles = [
  { id: "1", title: "Фильмы" },
  { id: "2", title: "Сериалы" },
  { id: "3", title: "Мультфильмы" },
  { id: "4", title: "TV+" },
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
          {/* {content.genres
            .map((genres) => {
              return (
                <div className={s.genre} key={genres.id}>
                  <Link href={genres.url}>
                    <span className={s.item}>{genres.name}</span>
                  </Link>
                </div>
              );
            })} */}
        {titles.map((title) => {
          return (
            
            <TooltipMobile
              title={title.title}
              titleCategory={title.title}
              links={title.title}
            />
          );
        })}
      </div>
      </div>

    </div>
  );
};

export default MobileNavigation;
