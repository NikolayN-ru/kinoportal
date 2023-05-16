import React, { FC } from 'react';
import cn from 'classnames/bind';

import s from './Button.module.scss';

interface ButtonProps {
  title?: string | JSX.Element;
  className?: string;
  text?: string;
  preamble?: string;
  ico?: any;
  type?: 'button' | 'submit' | 'reset';
  color?: string;
}

const Button: FC<ButtonProps> = ({ title, text, preamble, className, ico, type, color }) => {
  type = type || 'button';

  const styles = {
    default: s.button || '',
    additional: className || '',
    color: (color && s[color]) || '',
  };

  const classNames = cn.bind(styles);
  const buttonClassName = classNames({
    default: !!styles.default,
    additional: !!styles.additional,
    color: !!styles.color,
  });

  return (
    <button className={buttonClassName} type={type}>
      {ico && ico}
      {title && title}
      {text && (
        <div className={s.content}>
          {preamble && <span className={s.preamble}>{preamble}</span>}
          {text}
        </div>
      )}
    </button>
  );
};

export default Button;
