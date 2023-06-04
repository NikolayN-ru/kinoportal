import { ReactElement, useEffect } from "react";
import s from "./ModalAdminFilm.module.scss";

import Input from "app/admin/Input/Input";
import Button from "@components/ui-kit/Button";

interface ModalProps {
  title: string;
  placeholder: string;
  visible: boolean;
  footer: ReactElement | string;
  onClose: () => void;
}

const ModalAdminFilm = ({ visible = false, onClose, title }: ModalProps) => {
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
            <div className={s.modal_title}>{title}</div>
            <div className={s.search_input_form}>
              <Input
                placeholder="Название"
                type="text"
                className={s.input_search}
              />
              <Input
                placeholder="Тип Видео"
                type="text"
                className={s.input_search}
              />
              <Input
                placeholder="Год выпуска"
                type="text"
                className={s.input_search}
              />
              <Input
                placeholder="Категория"
                type="text"
                className={s.input_search}
              />
              <Input
                placeholder="Оценка"
                type="text"
                className={s.input_search}
              />
              <Input
                placeholder="Язык"
                type="text"
                className={s.input_search}
              />
              <Input
                placeholder="Картинка"
                type="text"
                className={s.input_search}
              />
            </div>
            <div className={s.add_btn_block} onClick={onClose}>
              <div className={s.add_btn}>
                <Button title="Сохранить" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdminFilm;
