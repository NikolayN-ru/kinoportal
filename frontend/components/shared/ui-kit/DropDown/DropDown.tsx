import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import s from "./DropDown.module.scss";
import { TRANSITION } from "@components/shared/constants/transition";


interface IDropDownProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
}

export const DropDown: React.FC<IDropDownProps> = ({
  className,
  children,
  isOpen,
}) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      className={className}
      in={isOpen}
      nodeRef={nodeRef}
      timeout={TRANSITION}
      unmountOnExit
    >
      <div ref={nodeRef}>
        <div className={classNames("DropDown")}>{children}</div>
      </div>
    </CSSTransition>
  );
};

