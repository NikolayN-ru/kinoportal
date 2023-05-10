import { FC } from "react";

import {
  Android,
  Apple,
  ArrowRight,
  Avatar,
  Bookmark,
  Callback,
  Checkmark,
  Desktop,
  In,
  Lightning,
  MagicWand,
  Message,
  Mouthpiece,
  Notify,
  OK,
  RUS,
  Search,
  StarRounded,
  TG,
  TV,
  Tel,
  Twitter,
  US,
  VK,
} from "@public/svg";

import s from "./Icon.module.scss";

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
  checkmark: Checkmark,
};

const IconComponent: FC<IconComponentProps> = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return !!Icon && <Icon className={s.icon} {...props} />;
};

export default IconComponent;
