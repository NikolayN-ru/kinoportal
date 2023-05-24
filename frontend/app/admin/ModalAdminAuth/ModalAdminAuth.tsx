import { ReactElement, useEffect } from "react";
import s from "./ModalAdminAuth.module.scss";
import Input from "../Input/Input";
import GrayButton from "@components/GrayButton";

interface ModalProps {
  title: string;
  placeholder: string;
  visible: boolean;
  onClose: () => void;
}

const ModalAdminAuth = ({ visible = false, onClose, title }: ModalProps) => {
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
        <div className={s.modal_dialog} onClick={(e) => e.stopPropagation()}>
          <div className={s.modal_body}>
            <div className={s.modal_title}>{title}</div>
            <div className={s.search_input_form}>
              <Input
                placeholder="Логин"
                type="text"
                className={s.input_search}
              />
              <Input
                placeholder="Пароль"
                type="password"
                className={s.input_search}
              />
            </div>
            <div className={s.add_btn_block} onClick={onClose}>
              <GrayButton className={s.log_btn} title="Войти" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdminAuth;
