import { FC, ReactNode } from "react";
import s from "./Title.module.scss";

type TitleTag = "h1" | "h2" | "h3";
type TitleType = "lg" | "md" | "base" | "sm";

interface TitleProps {
  tag?: TitleTag;
  size?: TitleType;
  text?: string;
  children?: ReactNode;
  className?: string;
}

const Title: FC<TitleProps> = ({ tag, size, text, className, children }) => {
  const classNames = [s.title];
  className && classNames.push(className);
  size && s[size] && classNames.push(s[size]);

  const Tag = tag || "h1";

  return <Tag className={classNames.join(" ")}>{children ?? text}</Tag>;
};

export default Title;
