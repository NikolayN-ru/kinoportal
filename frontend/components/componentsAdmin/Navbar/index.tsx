"use client";

import s from "./Navbar.module.scss";
import Link from "next/link";
// import { useRouter } from "next/router";
interface INavigationAdmin {
  id: number;
  title: string;
  path: string;
}

const navigationAdmin: INavigationAdmin[] = [
  {
    id: 1,
    title: "Главная",
    path: "/admin/",
  },
  {
    id: 2,
    title: "Фильмы",
    path: "/admin/films",
  },
  {
    id: 3,
    title: "Актеры",
    path: "/admin/actors",
  },
  // {
  // id: 4,
  // title: "Персональные настройки",
  // path: "/admin/settings",
  // },
];

const Navbar = () => {
  // const { pathname } = useRouter();
  function showLinks() {
    return navigationAdmin.map(({ id, title, path }) => {
      {
        return (
          <Link
            key={id}
            // className={pathname === path ? s.active : s.link}
            className={s.link}
            href={path}
          >
            <div className={s.item}>{title}</div>
          </Link>
        );
      }
    });
  }
  return (
    <>
      <nav className={s.sidebar}>
        <div className={s.column}>
          <div className={s.title}>Админ</div>
          <div className={s.nav}>{showLinks()}</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
