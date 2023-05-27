import { FC } from "react";
import s from "./BadgeActor.module.scss";

interface IBadgeActor {
  img?: string;
  title: string;
  rating?: number;
}

const BadgeActor: FC<IBadgeActor> = ({ img, title, rating }) => {
  return (
    <div className={s.BadgeActor}>
      <div className={s.BadgeActorCenter}>{rating}</div>
      <div className={s.BadgeActorDescriptiton}>{title}</div>
    </div>
  );
};

export default BadgeActor;
