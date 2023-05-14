import React, { FC } from 'react';
import s from './GrayButton.module.scss';

type Button = {
  title?: string | JSX.Element;
  className?:string;
  text?: string;
  preamble?: string;
  ico?: any;
  small?: string;
};

const GrayButton: FC<Button> = ({ title, text, preamble, className, small, ico }) => {
  return (
    <div className={`${s.Btn} ${className}`}>
      {ico && ico}
      {title && title}
      {text && (
        <div className={s.content}>
          {preamble && <span className={s.preamble}>{preamble}</span>}
          {text}
          <span className={s.small}>{small}</span>
        </div>
      )}
      {/* {ico && <div className={s.ico}></div>} */}
    </div>
  );
};

export default GrayButton;
