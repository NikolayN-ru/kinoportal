import { FC, ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import s from "./ModalPage.module.scss";
import Button from "@components/ui-kit/Button";
import Icon from "@components/ui-kit/IconComponent/Icon";
import MobileNavigation from "./MobileNavigation/MobileNavigation";

interface ModalProps {
  visible: boolean;
  footer: ReactElement | string;
  onClose: () => void;
  className?: string;
}

const ModalPage: FC<ModalProps> = ({
  visible = false,
  footer = "",
  onClose,
  className,
}) => {
  const { t } = useTranslation();

  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!visible) return null;

  return (
    <div className={`${s.modal} ${className}`}>
      <div className={s.container}>
        <span className={s.modal_close} onClick={onClose}>
          &times;
        </span>
        <div className={s.body}>
          <div className={s.row}>
            <div className={s.subscription_block}>
              <div className={s.button_item}>
                <div className={s.icon}>
                  <Icon name="diamond" />
                </div>
                <Button
                  color="blue"
                  className={s.button_sub}
                  text="Подключить подписку"
                />
              </div>
              <div className={s.button_item}>
                <div className={s.icon}>
                  <Icon name="certificate" />
                </div>
                <Button
                  color="blue"
                  className={s.button}
                  text="Активация сертификата"
                />
              </div>
            </div>
          </div>
        </div>
        <MobileNavigation />
      </div>
    </div>
  );
};

export default ModalPage;
