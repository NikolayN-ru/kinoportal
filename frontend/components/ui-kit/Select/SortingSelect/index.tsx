import { FC, useState } from "react";
import cn from "classnames/bind";

import Icon from "@components/ui-kit/IconComponent/Icon";
import { useSelectToggling } from "hooks/useSelectToggling";

import s from "./SortingSelect.module.scss";

interface SortingSelect {
  name: string;
  sortings: string[];
}

const SortingSelect: FC<SortingSelect> = ({name, sortings}) => {
  const selectedValueInit = sortings.length ? sortings[0] : "";

  const [isOpen, setIsOpen, onSelectClick] = useSelectToggling(name);
  const [selectedValue, setSelectedValue] = useState<string>(selectedValueInit);

  const onSelectItemClick = (sorting: string) => {
    setSelectedValue(sorting);
    setIsOpen(false);
  };

  const styles = {
    container: s.container,
    isOpen: s.isOpen,
  };

  const classNames = cn.bind(styles);
  const containerClassName = classNames("container", { isOpen });

  return (
    <div className={containerClassName} data-name={name}>
      <div className={s.selectedContainer} onClick={onSelectClick}>
        <div className={s.sortingIcon}>
          <span className={s.lines}></span>
        </div>
        <div className={s.title}>{sortings[0]}</div>
        <div className={s.icon}>
          <Icon name="arrowRight" />
        </div>
      </div>

      {isOpen &&
      <div className={s.dropdown}>
        <div className={s.dropdownTitle}>Сортировать</div>
        {sortings.map((sorting) => {
          const itemClassName = [s.sortingItem];
          (sorting === selectedValue) && itemClassName.push(s.activeItem);

          return (
            <div
              key={sorting}
              className={itemClassName.join(" ")}
              onClick={() => {onSelectItemClick(sorting)}}
            >
              {sorting}
            </div>
          )
        })}  
      </div>}
    </div>
  );
};

export default SortingSelect;
