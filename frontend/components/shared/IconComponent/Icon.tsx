import { FC } from "react";
import style from './Icon.module.scss';
import { Search } from "../../../public/svg/index";
import { Notify } from "../../../public/svg/index";
import { Avatar } from "../../../public/svg/index";
import { Mouthpiece } from "../../../public/svg/index";
import { Message } from "../../../public/svg/index";
import { Tel } from "../../../public/svg/index";
import { Apple } from "../../../public/svg/index";
import { Android } from "../../../public/svg/index";
import { TV } from "../../../public/svg/index";
import { Desktop } from "../../../public/svg/index";
import { VK } from "../../../public/svg/index";
import { OK } from "../../../public/svg/index";
import { Twitter } from "../../../public/svg/index";
import { Callback } from "../../../public/svg/index";
import { In } from "../../../public/svg/index";
import { TG } from "../../../public/svg/index";
import { I } from "../../../public/svg/index";
import { NotifyBig } from "../../../public/svg/index";
import { Favorite } from "../../../public/svg/index";
import { Video } from "../../../public/svg/index";
import { History } from "../../../public/svg/index";
import { Diamond } from "../../../public/svg/index";
import { Certificate } from "../../../public/svg/index";
import { TvChannels } from "../../../public/svg/index";
import { Wallet } from "../../../public/svg/index";
import { ShareSmall } from "../../../public/svg/index";
import { ArrowRight } from "../../../public/svg/index";
import { StarRounded } from "../../../public/svg/index";
import { Bookmark } from "../../../public/svg/index";
import { MagicWand } from "../../../public/svg/index";
import { Lightning } from "../../../public/svg/index";
import { US } from "../../../public/svg/index";
import { RUS } from "../../../public/svg/index";

import s from "./Icon.module.scss";
import { FC } from "react";

type IconComponentProps = { name: string; clsassName?: string };
type IconTypes = { [name: string]: ReactSVGComponent };

const iconTypes: IconTypes = {
  search: Search,
  notify: Notify,
  avatar: Avatar,
  mouthpiece: Mouthpiece,
  message: Message,
  tel: Tel,
  apple: Apple,
  android: Android,
  tv: TV,
  desktop: Desktop,
  vk: VK,
  ok: OK,
  twitter: Twitter,
  callback: Callback,
  in: In,
  tg: TG,
  arrowRight: ArrowRight,
  starRounded: StarRounded,
  bookmark: Bookmark,
  magicWand: MagicWand,
  lightning: Lightning,
  us: US,
  rus: RUS,
  i: I,
  notifyBig: NotifyBig,
  favorite: Favorite,
  video: Video,
  history: History,
  diamond: Diamond,
  certificate:Certificate,
  tv_channels:TvChannels,
  wallet:Wallet,
  share_small:ShareSmall,
};

const IconComponent: FC<IconComponentProps> = ({
  name,
  ...props
}: IconComponentProps) => {
  let Icon = iconTypes[name];
  return !!Icon && <Icon className={s.icon} {...props} />;
};

export default IconComponent;
