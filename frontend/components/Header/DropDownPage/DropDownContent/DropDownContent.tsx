import { FC } from "react";
import Link from "next/link";
import Button from "@components/ui-kit/Button";
import s from "./DropDownContent.module.scss";
import Icon from "@components/ui-kit/IconComponent/Icon";
import DropDownWidget from "../DropDownWidget/DropDownWidget";
import { genres, countries, years, sideContent } from "./allCollectionsContent";
import { IFilms } from "./interfaces/FilmsInteface";
import { Links } from "./interfaces/LinksEnum";
import SideContent from "@components/shared/SideContent/SideContent";
import ContentByLink from "@components/shared/ContentByLink/ContentByLink";

export const content: IFilms = {
  genres: genres,
  countries: countries,
  years: years,
  sideContent,
};

export interface DropDownContentProps {
  link: Links;
}

const DropDownContent: FC<DropDownContentProps> = ({ link }) => {
  return (
    <div className={s.content}>
      <ContentByLink link={link} />

      <div className={s.sideContent}>
        <SideContent link={link} />
        <div className={s.sideContent_Widget_block}>
          <DropDownWidget />
          <Button
            color="grey"
            className={s.tv}
            title={<Icon name="tv" />}
            text="Смотреть на Smart TV"
          />
        </div>
      </div>
    </div>
  );
};

export default DropDownContent;
