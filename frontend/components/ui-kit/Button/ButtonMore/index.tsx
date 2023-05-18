import { FC } from "react";
import s from "./ButtonMore.module.scss";

const ButtonMore: FC<{ title: string }> = ({ title }) => (
  <div className={s.button}>
    <button>{title}</button>
  </div>
);

export default ButtonMore;
