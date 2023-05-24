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
  Horror,
  Arthouse,
  Biography,
  Western,
  War,
  Detective,
  Children,
  Historical,
  Catastrophe,
  Criminal,
  Mystic,
  Music,
  Comics,
  Russian,
  Soviet,
  Sports,
  Declension,
  Top10,
  Top10Number0,
  Top10Number1,
  Top10Number2,
  Top10Number3,
  Top10Number4,
  Top10Number5,
  Top10Number6,
  Top10Number7,
  Top10Number8,
  Top10Number9,
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
  declension: Declension,
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
  horror: Horror,
  arthouse: Arthouse,
  biography: Biography,
  western: Western,
  war: War,
  detective: Detective,
  children: Children,
  historical: Historical,
  catastrophe: Catastrophe,
  criminal: Criminal,
  mystic: Mystic,
  music: Music,
  comics: Comics,
  russian: Russian,
  soviet: Soviet,
  sports: Sports,
  top10: Top10,
  top10Number0: Top10Number0,
  top10Number1: Top10Number1,
  top10Number2: Top10Number2,
  top10Number3: Top10Number3,
  top10Number4: Top10Number4,
  top10Number5: Top10Number5,
  top10Number6: Top10Number6,
  top10Number7: Top10Number7,
  top10Number8: Top10Number8,
  top10Number9: Top10Number9,
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
