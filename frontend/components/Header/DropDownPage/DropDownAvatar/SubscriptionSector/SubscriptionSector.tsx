import { useState } from "react";
import React from "react";
import s from "./SubscriptionSector.module.scss";

type Props = {
  isHovered: boolean;
  className: string;
  content: JSX.Element;
  hoverContent: JSX.Element;
};

const SubscriptionSector = ({
  className,
  content,
  hoverContent,
  isHovered,
}: Props) => {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`${className} ${s.sub_content}`}>
      {isHovered ? hoverContent : content}
    </div>
  );
};

export default SubscriptionSector;
