import { ReactElement, useEffect } from "react";
import s from "./ModalAdminActor.module.scss";
import GrayButton from "@components/GrayButton";
import Input from "app/admin/Input/Input";

interface ModalProps {
  title: string;
  placeholder: string;
  visible: boolean;
  footer: ReactElement | string;
  onClose: () => void;
}

const ModalAdminActor = ({
  visible = false,
  onClose,
  title,
  placeholder,
}: ModalProps) => {
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
              <Input placeholder="Имя" type="text" className={s.input_search} />
              <Input
                placeholder="Участие в фильмах"
                type="text"
                className={s.input_search}
              />
              <Input
                placeholder="Биография"
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
              <GrayButton className={s.add_btn} title="Сохранить" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdminActor;
