import React from 'react';
import style from './MyButton.module.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const MyButton: React.FC<Props> = ({children, ...props}) => {
  return (
    <button {...props} className={style.btn}>
      {children}
    </button>
  );
};

export default MyButton;
