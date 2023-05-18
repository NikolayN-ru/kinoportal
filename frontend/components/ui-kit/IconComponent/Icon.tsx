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
  ComedyMask,
  DramaMask,
  Thriller,
  Adventures,
  Globe,
  Hearts,
  SciFi,
  Fantasy,
  Family,
  Gun,
} from "@public/svg";

import s from "./Icon.module.scss";

type IconComponentProps = { name: string; className?: string };
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
  comedyMask: ComedyMask,
  dramaMask: DramaMask,
  thriller: Thriller,
  adventures: Adventures,
  globe: Globe,
  hearts: Hearts,
  sciFi: SciFi,
  fantasy: Fantasy,
  family: Family,
  gun: Gun,
};

const IconComponent: FC<IconComponentProps> = ({
  name,
  className,
  ...props
}) => {
  const classNames = [s.icon];
  className && classNames.push(className);

  let Icon = iconTypes[name];
  return !!Icon && <Icon className={classNames.join(" ")} {...props} />;
};

export default IconComponent;
