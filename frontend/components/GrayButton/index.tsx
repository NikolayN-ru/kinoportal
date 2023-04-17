import React, { FC } from 'react'
import s from './GrayButton.module.scss';

const GrayButton:FC<any> = ({title, ico}) => {
  return (
    <div className={s.Btn}>
        {title}
        <div className={s.ico}></div>
    </div>
  )
}

export default GrayButton