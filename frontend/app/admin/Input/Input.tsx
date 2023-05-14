import React, { FC } from "react";

export type InputType = {
  value?: string;
  label?: string;
  name?: string;
  placeholder: string;
  type: string;
  className: string;
};

const Input: FC<InputType> = ({
  value,
  label,
  name,
  placeholder,
  type,
  className,
}) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className={`${className}`}
      placeholder={placeholder}
    />
  </div>
);
export default Input;
