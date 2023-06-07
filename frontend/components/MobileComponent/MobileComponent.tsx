import { useEffect, useState } from "react";
import s from "./MobileComponent.module.scss";
import Icon from "@components/ui-kit/IconComponent/Icon";
import Link from "next/link";
import ModalSearch from "@components/Header/ModalSearch";
import { t } from "i18next";
import ModalPage from "./ModalPage";

interface ITabButtons {
  id: string;
  iconName: string;
  href: string;
  text: string;
}
export const tabButtons: ITabButtons[] = [
  { id: "1", iconName: "home", href: "/", text: "Мой иви" },
  { id: "2", iconName: "videoIcon", href: "/movies", text: "Каталог" },
  { id: "3", iconName: "search", href: "/", text: "Поиск" },
  { id: "4", iconName: "tvIcon", href: "/tvplus", text: "TV+" },
  { id: "5", iconName: "more", href: "/", text: "Ещё" },
];

const MobileComponent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobilePage, setIsMobilePage] = useState(false);
  const [isModal, setModal] = useState(false);
  const [selectedActiveButton, setSelectedActiveButton] = useState(-1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1150);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClose = () => {
    setModal(false);
  };

  const onCloseMobilePage = () => {
    setIsMobilePage(false);
  };

  const selectButtonByIndex = (index: number) => {
    if (selectedActiveButton !== index) {
      setSelectedActiveButton(index);
    }
  };
  const getClassNameButtonByIndex = (index: number) => {
    return selectedActiveButton === index;
  };
  if (!isMobile) return null;

  return (
    <div className={s.mobile_bar}>
      <div className={s.row}>
        {tabButtons.map((button, index) => {
          if (index === 2) {
            return (
              <Link
                key={button.id}
                href={button.href}
                onClick={() => setModal(true)}
              >
                <div
                  className={s.item}
                  // className={
                  //   getClassNameButtonByIndex(index) ? s.activeItem : s.item
                  // }
                  // onClick={() => selectButtonByIndex(index)}
                >
                  <div
                    className={
                      getClassNameButtonByIndex(index)
                        ? s.activeItemGlowImage
                        : s.itemGlowImage
                    }
                    onClick={() => selectButtonByIndex(index)}
                  >
                    <Icon name={button.iconName} />
                    <div className={getClassNameButtonByIndex(index)
                        ? s.activeText
                        : s.text}>{button.text}</div>
                  </div>
                </div>
              </Link>
            );
          } else if (index === 4) {
            return (
              <Link
                key={button.id}
                href={button.href}
                onClick={() => setIsMobilePage(true)}
              >
                <div
                  className={s.item}
                  // className={
                  //   getClassNameButtonByIndex(index) ? s.activeItem : s.item
                  // }
                  // onClick={() => selectButtonByIndex(index)}
                >
                  <div
                    className={
                      getClassNameButtonByIndex(index)
                        ? s.activeItemGlowImage
                        : s.itemGlowImage
                    }
                    onClick={() => selectButtonByIndex(index)}
                  >
                    <Icon name={button.iconName} />
                    <div className={getClassNameButtonByIndex(index)
                        ? s.activeText
                        : s.text}>{button.text}</div>
                  </div>
                </div>
              </Link>
            );
          } else {
            return (
              <Link key={button.id} href={button.href}>
                <div
                  className={s.item}
                  // className={
                  //   getClassNameButtonByIndex(index) ? s.activeItem : s.item
                  // }
                  // onClick={() => selectButtonByIndex(index)}
                >
                  <div
                    className={
                      getClassNameButtonByIndex(index)
                        ? s.activeItemGlowImage
                        : s.itemGlowImage
                    }
                    onClick={() => selectButtonByIndex(index)}
                  >
                    <Icon name={button.iconName} />
                    <div className={getClassNameButtonByIndex(index)
                        ? s.activeText
                        : s.text}>{button.text}</div>
                  </div>
                </div>
              </Link>
            );
          }
        })}
        <ModalSearch
          visible={isModal}
          footer={<button onClick={onClose}>{t("header.close")}</button>}
          onClose={onClose}
          className={s.modal}
        />
        <ModalPage
          visible={isMobilePage}
          footer={
            <button onClick={onCloseMobilePage}>{t("header.close")}</button>
          }
          onClose={onCloseMobilePage}
          className={s.modalPage}
        />
      </div>
    </div>
  );
};
export default MobileComponent;
