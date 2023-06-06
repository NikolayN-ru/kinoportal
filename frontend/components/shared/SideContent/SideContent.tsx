import React, { FC } from "react";
import s from "./SideContent.module.scss";
import {
  DropDownContentProps,
  content,
} from "@components/Header/DropDownPage/DropDownContent/DropDownContent";
import Link from "next/link";

const SideContent: FC<DropDownContentProps> = ({ link }) => {
  return (
    <div className={s.content_block}>
      <div className={s.sideContent_list_item}>
        {content.sideContent
          .filter((sideLink) => sideLink.usedFor.includes(link))
          .map((sideLink) => {
            return (
              <div className={s.item_wrap} key={sideLink.id}>
                <Link href={sideLink.url}>
                  <span className={s.sideContent_item}>{sideLink.name}</span>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SideContent;
