import s from './Button.module.scss';
import { FC } from "react";


const Button: FC<any> = ({ content }) => {
  return <div className={s.Button}>{content}</div>;
};

export default Button;
