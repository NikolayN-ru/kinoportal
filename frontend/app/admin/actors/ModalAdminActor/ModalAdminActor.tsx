import { ReactElement, useEffect } from "react";
import s from "./ModalAdminActor.module.scss";
import Input from "app/admin/Input/Input";
import Button from "@components/ui-kit/Button";
import { useForm, SubmitHandler } from "react-hook-form";

interface ModalProps {
  title: string;
  placeholder: string;
  visible: boolean;
  footer: ReactElement | string;
  onClose: () => void;
}

type Inputs = {
  name: string;
  filmParticipation: string;
  biography: string;
  image: string;
};

const ModalAdminActor = ({
  visible = false,
  onClose,
  title,
  placeholder,
}: ModalProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    onClose();
  };

  // console.log(watch("name"));

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

            <form
              onSubmit={handleSubmit(onSubmit)}
              className={s.search_input_form}
            >
              <input
                placeholder="Имя"
                type="text"
                className={s.input_search}
                {...register("name")}
              />
              <input
                placeholder="Участие в фильмах"
                type="text"
                className={s.input_search}
                {...register("filmParticipation")}
              />
              <input
                placeholder="Биография"
                type="text"
                className={s.input_search}
                {...register("biography")}
              />
              <input
                placeholder="Картинка"
                type="text"
                className={s.input_search}
                {...register("image")}
              />

              <div className={s.add_btn}>
                <Button title="Сохранить" type="submit" />
              </div>
            </form>
            <div className={s.add_btn_block} onClick={onClose}>
              <div className={s.add_btn}>
                <Button title="Сохранить" type="submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdminActor;
