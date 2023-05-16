import { FC } from "react";
import s from "./BtnMore.module.scss";

const BtnMore: FC<{ title: string }> = ({ title }) => (
  <div className={s.button}>
    <button>{title}</button>
  </div>
);

export default BtnMore;
