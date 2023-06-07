import { FC } from "react";
import Link from "next/link";

import s from "./Breadcrumbs.module.scss";

export type Breadcrumb = {
  title: string;
  link?: string;
};

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className={s.container}>
      {items.map(({ title, link }, index) =>
        link ? (
          <span key={index} className={s.linkItem}>
            <Link className={s.link} href={link}>
              {title}
            </Link>
          </span>
        ) : (
          <span key={index} className={s.item}>
            {title}
          </span>
        )
      )}
    </div>
  );
};

export default Breadcrumbs;
