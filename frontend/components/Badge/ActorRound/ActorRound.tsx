import { FC } from "react";
import s from "./ActorRound.module.scss";

const ActorRound: FC<any> = ({ title, role }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.round}></div>
      <div className={s.title}>{title}</div>
      <div className={s.role}>{role}</div>
    </div>
  );
};

export default ActorRound;
