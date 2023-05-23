import { FC } from "react";

import s from "./ResetButton.module.scss";

interface ResetButtonProps {
  className?: string;
  text: string;
  disabled?: boolean;
}

const ResetButton: FC<ResetButtonProps> = ({ className, text, disabled }) => {
  const buttonClassNames = [s.button];
  className && buttonClassNames.push(className);

  return (
    <button
      className={buttonClassNames.join(" ")}
      type="reset"
      disabled={disabled ?? false}
    >
      {text}
    </button>
  );
};

export default ResetButton;
