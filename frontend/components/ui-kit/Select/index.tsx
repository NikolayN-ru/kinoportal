import {
  FC,
  MouseEventHandler,
  ReactNode,
  useState,
  useEffect,
  createContext,
} from "react";
import cn from "classnames/bind";

import Icon from "@components/ui-kit/IconComponent/Icon";
import { capitalizeFirstLetter } from "utils";

import s from "./Select.module.scss";

export enum DropdownPosition {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

interface SelectProps {
  title: string;
  selectedValues: string[];
  name: string;
  children: ReactNode;
  dropdownPosition: DropdownPosition;
}

export const SelectContext = createContext<boolean | null>(null);

const Select: FC<SelectProps> = ({
  title,
  selectedValues,
  name,
  children,
  dropdownPosition,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const styles = {
    container: s.container,
    isOpen: s.isOpen,
    dropdown: s.dropdown,
    dropdownPosition: s[dropdownPosition] || "",
  };

  const classNames = cn.bind(styles);
  const containerClassName = classNames("container", { isOpen });
  const dropdownClassName = classNames("dropdown", { dropdownPosition });

  const onDocumentClick = (e: MouseEvent) => {
    if (
      !(e.target instanceof Element) ||
      e.target.closest('[data-name="' + name + '"]')
    )
      return;

    setIsOpen(false);
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
            {!!selectedValues &&
              selectedValues
                .map((value) => capitalizeFirstLetter(value))
                .join(", ")}
          </div>
        </div>

        <div className={s.icon}>
          <Icon name="arrowRight" />
        </div>
      </div>

      <SelectContext.Provider value={isOpen}>
        <div className={dropdownClassName}>{children}</div>
      </SelectContext.Provider>
    </div>
  );
};

export default Select;
