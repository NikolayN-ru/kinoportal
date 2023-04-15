import React, { FC } from "react";
import s from "./BadgeActor.module.scss";

const BadgeActor: FC<any> = ({ img, title }) => {
  return (
    <div className={s.BadgeActor}>
      <div className={s.BadgeActorCenter}>8,2</div>
      <div className={s.BadgeActorDescriptiton}>{title}</div>
    </div>
  );
};

export default BadgeActor;
