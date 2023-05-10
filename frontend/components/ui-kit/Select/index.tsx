import { FC, MouseEventHandler, ReactNode, useState, useEffect } from "react";
import cn from "classnames/bind";

import Icon from "@components/shared/IconComponent/Icon";

import s from "./Select.module.scss";

interface SelectProps {
  className?: string;
  title: string;
  selectedValues: string[];
  name: string;
  children: ReactNode;
}

const Select: FC<SelectProps> = ({
  className,
  title,
  selectedValues,
  name,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const styles = {
    container: s.container,
    isOpen: s.isOpen,
  };

  const classNames = cn.bind(styles);
  const containerClassName = classNames("container", { isOpen });

  const onDocumentClick = (e: MouseEvent) => {
    if (e.target instanceof Element) {
      if (!e.target.closest('[data-name="' + name + '"]')) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", onDocumentClick);

    return () => {
      document.removeEventListener("click", onDocumentClick);
    };
  }, []);

  const onSelectClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={containerClassName} data-name={name}>
      <div className={s.selectedContainer} onClick={onSelectClick}>
        <div className={s.titleContainer}>
          <div className={s.title}>{title}</div>
          <div className={s.selectedValues}>
            {!!selectedValues && selectedValues.join(", ")}
          </div>
        </div>

        <div className={s.icon}>
          <Icon name="arrowRight" />
        </div>
      </div>

      <div className={s.dropdown}>{children}</div>
    </div>
  );
};

export default Select;
