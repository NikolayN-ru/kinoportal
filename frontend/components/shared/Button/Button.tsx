import React, { FC } from 'react';
import s from './GrayButton.module.scss';

type Button = {
  title: string;
  text?: string;
  preamble?: string;
  ico?: any;
};

const GrayButton: FC<Button> = ({ title, text, preamble, ico }) => {
  return (
    <div className={s.Btn}>
      {title}
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