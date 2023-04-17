import s from "./Quality.module.scss";
import { FC } from "react";

const Quality: FC<any> = ({ title }) => {
  return <div className={s.Quality}>{title}</div>;
};

export default Quality;
