import { FC } from "react";
import Link from "next/link";

import s from "./ShowAllCard.module.scss";

export interface ShowAllCardProps {
  link: string;
}

const ShowAllCard: FC<ShowAllCardProps> = ({ link }) => {
  return (
    <Link className={s.cardContainer} href={link}>
      <div className={s.title}>Посмотреть все</div>
    </Link>
  );
};

export default ShowAllCard;
