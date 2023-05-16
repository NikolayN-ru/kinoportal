import { FC, ReactElement, useEffect } from "react";
import { useTranslation } from "react-i18next";
import s from "./ModalSearch.module.scss";

interface ModalProps {
  visible: boolean;
  footer: ReactElement | string;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ visible = false, footer = "", onClose }) => {
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
    <div className={s.modal} onClick={onClose}>
      <div className={s.container}>
        <span className={s.modal_close} onClick={onClose}>
          &times;
        </span>
        <div className={s.modal_dialog} onClick={(e) => e.stopPropagation()}>
          <div className={s.modal_body}>
            <div className={s.modal_title}>{t("header.search")}</div>
            <div className={s.search_input_form}>
              <input
                className={s.input_search}
                type="text"
                placeholder={String(t("HeaderModal.MoviesPersonsGenres"))}
              />
            </div>
          </div>
          {footer && (
            <div className={s.modal_content}>
              <div className={s.preset_inner}>
                <a href="/" className={s.link_response}>
                  {t("HeaderModal.MoviePremieres")}
                </a>
              </div>
              <div className={s.preset_inner}>
                <a href="/" className={s.link_response}>
                  {t("HeaderModal.SubscriptionNews")}
                </a>
              </div>
              <div className={s.preset_inner}>
                <a href="/" className={s.link_response}>
                  {t("HeaderModal.Amediateka")}
                </a>
              </div>
              <div className={s.preset_inner}>
                <a href="/" className={s.link_response}>
                  {t("HeaderModal.SubscriptionNews")}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
