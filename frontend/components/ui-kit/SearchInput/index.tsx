"use client";

import {
  ChangeEventHandler,
  FC,
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
  isReset: boolean;
  foundResults: string[];
  setReset: (reset: boolean) => void;
  onConfirm: (value: string) => void;
  onChange: (value: string) => void;
  onClear: () => void;
}

const INIT_VALUE = "";

const SearchInput: FC<SearchInputProps> = ({
  className,
  placeholder,
  name,
  initValue,
  isReset,
  foundResults,
  setReset,
  onConfirm,
  onChange,
  onClear,
}) => {
  const [value, setValue] = useState<string>(initValue ?? INIT_VALUE);
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

  useEffect(() => {
    if (!isReset) return;

    setValue(INIT_VALUE);
    onClear();
    setIsFocused(false);
  }, [isReset]);

  useEffect(() => {
    initValue && setValue(initValue);
  }, [initValue]);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    setValue(e.currentTarget.value);
    onChange(e.currentTarget.value);
    setReset(false);
  };

  const clearInput = (): void => {
    setValue(INIT_VALUE);
    setIsFocused(true);
    onClear();
  };

  const setInputFocus: MouseEventHandler<HTMLDivElement> = () => {
    !isFocused && setIsFocused(true);
    inputRef.current?.focus();
  };

  const submitInput = (value: string): void => {
    onConfirm(value);
    clearInput();
  };

  const onInputKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== "Enter") return;

    submitInput(e.currentTarget.value);
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
          value={value.split("+").join(" ")}
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
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

      <SearchDropdown
        className={s.dropdown}
        results={foundResults}
        onChoise={submitInput}
      />
    </div>
  );
};

export default SearchInput;
