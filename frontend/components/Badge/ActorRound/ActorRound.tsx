import { FC } from "react";
import Link from "next/link";
import s from "./ActorRound.module.scss";

interface ActorRoundI {
  title: string;
  role: string;
  link?: string;
}

const ActorRound: FC<ActorRoundI> = ({ title, role, link }) => {
  return (
    <Link href={link ? link : "/actor/1"}>
      <div className={s.wrapper}>
        <div className={s.round}></div>
        <div className={s.title}>{title}</div>
        <div className={s.role}>{role}</div>
      </div>
    </Link>
  );
};

export default ActorRound;
