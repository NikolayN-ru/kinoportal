import { FC, useState } from "react";
import s from "./ExpansionPanel.module.scss";
import ContentByLink from "@components/shared/ContentByLink/ContentByLink";
import SideContent from "@components/shared/SideContent/SideContent";
import { Links } from "@components/Header/DropDownPage/DropDownContent/interfaces/LinksEnum";
import SideContentTV from "@components/shared/SideContentTV/SideContentTV";
import Image from "next/image";
import ChannelsSlider from "@components/Header/DropDownPage/DropDownContentTV/ChannelsSlider/ChannelsSlider";
import Link from "next/link";
import { about } from "@components/Header/DropDownPage/DropDownContent/allCollectionsContent";
import Icon from "@components/ui-kit/IconComponent/Icon";
import { federalChannel, sportChannel } from "@components/Header/DropDownPage/DropDownContentTV/ChannelsSlider/channels";

interface TooltipProps {
  title: string;
  link: Links;
}

const IMAGE_PATH = "/images/tvChannel/";
const ExpansionPanel: React.FC<TooltipProps> = ({ title, link }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className={s.tooltip}>
      <div className={s.tooltiptext} onClick={() => setShowText(!showText)}>
        {title} {showText && <span>▲</span>} {!showText && <span>▼</span>}
      </div>

      {showText && link === Links.TV && (
        <div className={s.blockTV}>
          <SideContentTV />
          <div className={s.main_content_popular}>
            <div className={s.main_title}>Федеральные каналы</div>
            <div className={s.list}>
              {federalChannel
                .map((channel) => {
                  return (
                    <div className={s.channel} key={channel.id}>
                      <Link href={channel.href} />
                      <Image
                        className={s.image}
                        src={IMAGE_PATH + channel.image}
                        alt={"channel"}
                        width={132}
                        height={87}
                      />
                    </div>
                  );
                })
                .splice(0, 8)}
            </div>
            <div className={s.main_title}>Спортивные каналы</div>
            <div className={s.list}>
              {sportChannel
                .map((channel) => {
                  return (
                    <div className={s.channel} key={channel.id}>
                      <Link href={channel.href}>
                        <Image
                          className={s.image}
                          src={IMAGE_PATH + channel.image}
                          alt={"channel"}
                          width={132}
                          height={87}
                        />
                      </Link>
                    </div>
                  );
                })
                .splice(0, 8)}
            </div>
          </div>
        </div>
      )}

      {showText && link !== Links.TV && link !== Links.About &&(
        <div className={s.block}>
          <ContentByLink link={link} />
          <SideContent link={link} />
        </div>
      )}

      {showText && link === Links.About && (
        <div className={s.about}>
          {about.map((link) => {
            return (
              <div className={s.channel} key={link.id}>
                <Link href={link.url}>{link.name}</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExpansionPanel;
