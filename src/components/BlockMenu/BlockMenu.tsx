import React from 'react';
import {MyButton} from 'UI';
import style from './BlockMenu.module.scss';

const BlockMenu: React.FC = () => {
  return (
    <div className={style.menu}>
      <h2 className={style.menu__heading}>Сортировка</h2>
      <nav>
        <ul className={style.menu__list}>
          <li className={style.menu__item}>
            <MyButton>по городу</MyButton>
          </li>
          <li className={style.menu__item}>
            <MyButton>по компании</MyButton>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlockMenu;
