import React, { ReactElement } from "react";
import s from "./ModalSearch.module.scss";
// интерфейс для пропсов
interface ModalProps {
  visible: boolean;
  footer: ReactElement | string;
  onClose: () => void;
}

const Modal = ({ visible = false, footer = "", onClose }: ModalProps) => {
  // создаем обработчик нажатия клавиши Esc
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  // c помощью useEffect цепляем обработчик к нажатию клавиш
  React.useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  // если компонент невидим, то не отображаем его
  if (!visible) return null;

  // или возвращаем верстку модального окна
  return (
    <div className={s.modal} onClick={onClose}>
      <div className={s.container}>
        <span className={s.modal_close} onClick={onClose}>
          &times;
        </span>
        <div className={s.modal_dialog} onClick={(e) => e.stopPropagation()}>
          <div className={s.modal_body}>
            <div className={s.modal_title}>Поиск</div>
            <div className={s.search_input_form}>
              <input
                className={s.input_search}
                type="text"
                placeholder="Фильмы, персоны, жанры"
              />
            </div>
          </div>
          {footer && <div className={s.modal_content}>
            <div className={s.preset_inner}><a href="/" className={s.link_response}>Премьеры фильмов</a></div>
            <div className={s.preset_inner}><a href="/" className={s.link_response}>Новинки подписки</a></div>
            <div className={s.preset_inner}><a href="/" className={s.link_response}>Сериалы Amediateka</a></div>
            <div className={s.preset_inner}><a href="/" className={s.link_response}>Высокий рейтинг</a></div>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
