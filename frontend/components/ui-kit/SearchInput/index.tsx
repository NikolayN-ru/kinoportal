import {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import cn from "classnames/bind";

import Icon from "../IconComponent/Icon";

import s from "./SearchInput.module.scss";

interface SearchInputProps {
  className?: string;
  value?: string;
  placeholder?: string;
  name: string;
}

const SearchInput: FC<SearchInputProps> = ({
  className,
  placeholder,
  name,
}) => {
  const [value, setValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const removeInputFocus = (e: MouseEvent) => {
    if (
      !(e.target instanceof Element) ||
      e.target.closest("[data-name='" + name + "']") ||
      inputRef.current?.value
    )
      return;

    setIsFocused(false);
  };

  useEffect(() => {
    document.addEventListener("click", removeInputFocus);

    return () => {
      document.removeEventListener("click", removeInputFocus);
    };
  }, []);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setValue(e.currentTarget.value);
  };

  const clearInput: MouseEventHandler<HTMLButtonElement> = () => {
    setValue("");
    setIsFocused(true);
  };

  const setInputFocus: MouseEventHandler<HTMLDivElement> = () => {
    !isFocused && setIsFocused(true);
    inputRef.current?.focus();
  };

  const styles = {
    input: s.input,
    inherited: className || "",
    button: s.button,
    deleteButton: s.deleteButton,
    searchIcon: s.searchIcon,
    placeholder: s.placeholder,
    activePlaceholder: s.activePlaceholder,
  };

  const classNames = cn.bind(styles);
  const inputClassName = classNames("input", { inherited: !!className });
  const placeholderClassName = classNames("placeholder", {
    activePlaceholder: isFocused,
  });
  const inputButtonClassName = classNames("button", {
    deleteButton: !!value,
    searchIcon: !value,
  });

  const placeholderText = placeholder ?? "";

  return (
    <div className={s.container} onClick={setInputFocus} data-name={name}>
      <input
        className={inputClassName}
        type="text"
        value={value}
        onChange={onInputChange}
        ref={inputRef}
      />

      <div className={placeholderClassName}>{placeholderText}</div>

      <button
        className={inputButtonClassName}
        type="button"
        disabled={!value}
        onClick={clearInput}
      >
        <Icon className={s.icon} name="search" />
      </button>
    </div>
  );
};

export default SearchInput;
