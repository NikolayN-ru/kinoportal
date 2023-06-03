"use client";

import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import cn from "classnames/bind";

import Icon from "../IconComponent/Icon";
import SearchDropdown from "./SearchDropdown";

import s from "./SearchInput.module.scss";

interface SearchInputProps {
  className?: string;
  initValue?: string;
  placeholder?: string;
  name: string;
  reset: boolean;
  setReset: (reset: boolean) => void;
  onValueConfirm: (value: string) => void;
}

const INIT_VALUE = "";

const SearchInput: FC<SearchInputProps> = ({
  className,
  placeholder,
  name,
  initValue,
  reset,
  setReset,
  onValueConfirm,
}) => {
  const [value, setValue] = useState<string>(initValue ?? INIT_VALUE);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
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

  useEffect(() => {
    if (!reset) return;

    setValue(INIT_VALUE);
    setIsFocused(false);
  }, [reset]);

  useEffect(() => {
    initValue && setValue(initValue);
  }, [initValue]);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setValue(e.currentTarget.value);
    setReset(false);
  };

  const clearInput = (): void => {
    setValue(INIT_VALUE);
    setIsFocused(true);
  };

  const setInputFocus: MouseEventHandler<HTMLDivElement> = () => {
    !isFocused && setIsFocused(true);
    inputRef.current?.focus();
  };

  const onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== "Enter") return;

    onValueConfirm(e.currentTarget.value);
    clearInput();
  };

  const onInputFocus: FocusEventHandler<HTMLInputElement> = () => {
    setIsDropdownActive(true);
  };

  const onInputBlur: FocusEventHandler<HTMLInputElement> = () => {
    setIsDropdownActive(false);
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
    activePlaceholder: isFocused || !!value,
  });
  const inputButtonClassName = classNames("button", {
    deleteButton: !!value,
    searchIcon: !value,
  });

  const placeholderText = placeholder ?? "";

  return (
    <div className={s.inputSection}>
      <div className={s.container} onClick={setInputFocus} data-name={name}>
        <input
          className={inputClassName}
          type="text"
          value={value}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          ref={inputRef}
        />

        <div className={placeholderClassName}>{placeholderText}</div>

        <button
          className={inputButtonClassName}
          type="button"
          disabled={!value}
          onClick={() => clearInput()}
        >
          <Icon className={s.icon} name="search" />
        </button>
      </div>

      {isDropdownActive && (
        <SearchDropdown className={s.dropdown} searchValue={value} />
      )}
    </div>
  );
};

export default SearchInput;
