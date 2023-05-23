import { FC } from "react";

import s from "./BadgeAge.module.scss";

interface BadgeAgeProps {
  className?: string;
  value: number;
}

const BadgeAge: FC<BadgeAgeProps> = ({ className, value }) => {
  const badgeClassNames = [s.badge];
  className && badgeClassNames.push(className);

  return <div className={badgeClassNames.join(" ")}>{value}+</div>;
};

export default BadgeAge;
