import React, { FC } from 'react';
import s from './GrayButton.module.scss';

type Button = {
  title?: string | JSX.Element;
  className?:string;
  text?: string;
  preamble?: string;
  ico?: any;
};

const GrayButton: FC<Button> = ({ title, text, preamble, className, ico }) => {
  return (
    <div className={`${s.Btn} ${className}`}>
      {ico && ico}
      {title && title}
      {text && (
        <div className={s.content}>
          {preamble && <span className={s.preamble}>{preamble}</span>}
          {text}
        </div>
      )}
      {/* {ico && <div className={s.ico}></div>} */}
    </div>
  );
};

export default GrayButton;
