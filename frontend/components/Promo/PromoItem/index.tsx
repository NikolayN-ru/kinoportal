import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { PromoItemType } from '@components/types/film';
import BadgeAge from '@components/BadgeAge';
import Button from '@components/Button';

import s from "./PromoItem.module.scss";

export interface PromoItemProps {
  className?: string;
  data: PromoItemType;
  isCurrent: boolean;
}

const IMAGE_PATH = "/images/";

const PromoItem: FC<PromoItemProps> = ({ className, data, isCurrent }) => {
  const { name, age, image, link } = data;

  const containerClassNames = [s.container];
  className && containerClassNames.push(className);

  return (
    <Link href={`/watch/${link}`} className={containerClassNames.join(" ")}>
      <Image src={IMAGE_PATH + image} alt={name} width={1216} height={370} />
      <BadgeAge className={s.badgeAge} value={age} />
      {isCurrent && <Button className={s.button} text="Смотреть бесплатно" color="red" />}
    </Link>
  );
};

export default PromoItem;
