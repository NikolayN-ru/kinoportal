import DropDownWidget from "../DropDownWidget/DropDownWidget";
import Button from "@components/ui-kit/Button";
import Icon from "@components/ui-kit/IconComponent/Icon";
import s from "./DropDownContentTV.module.scss";
import ChannelsSlider, {
  federalChannel,
  sportChannel,
} from "./ChannelsSlider/ChannelsSlider";
import SideContentTV from "@components/shared/SideContentTV/SideContentTV";

export interface IGenreTV {
  id: string;
  name: string;
  url: string;
}

export const genreTv: IGenreTV[] = [
  { id: "1", name: "ТВ-каналы", url: "/tvplus" },
  { id: "2", name: "Развлекательное", url: "/razvlekatelnoe" },
  { id: "3", name: "Дети", url: "/deti" },
  { id: "4", name: "Спортивное ТВ", url: "/sport" },
  { id: "5", name: "Документальное", url: "/documentalnoe" },
];

const DropDownContentTV = () => {
  return (
    <div className={s.content}>
      <SideContentTV />
      <div className={s.main_content}>
        <div className={s.main_content_popular}>
          <div className={s.main_title}>Федеральные каналы</div>
          <ChannelsSlider federalChannel={federalChannel} />
          <div className={s.main_title}>Спортивные каналы</div>
          <ChannelsSlider sportChannel={sportChannel} />
        </div>
        <div className={s.main_content_Widget_block}>
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

export default DropDownContentTV;
