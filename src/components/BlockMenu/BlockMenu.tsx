import React from 'react';
import {useLocation} from 'react-router-dom';
import {MyButton} from 'UI';
import style from './BlockMenu.module.scss';

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const BlockMenu: React.FC<Props> = ({setFilter}) => {
  const {pathname} = useLocation();
  return (
    <div className={style.menu}>
      <h2 className={style.menu__heading}>Сортировка</h2>
      <nav>
        <ul className={style.menu__list}>
          <li className={style.menu__item}>
            <MyButton
              onClick={() => setFilter('city')}
              disabled={pathname !== '/'}
            >
              по городу
            </MyButton>
          </li>
          <li className={style.menu__item}>
            <MyButton
              onClick={() => setFilter('company')}
              disabled={pathname !== '/'}
            >
              по компании
            </MyButton>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BlockMenu;
