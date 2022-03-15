import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {MyButton} from 'UI';
import style from './BlockMenu.module.scss';

type Props = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const BlockMenu: React.FC<Props> = ({setFilter}) => {
  const {pathname} = useLocation();
  const navigation = useNavigate();

  return (
    <div className={style.menu}>
      <h2 className={style.menu__heading}>Сортировка</h2>
      <nav>
        <ul className={style.menu__list}>
          <li className={style.menu__item}>
            <MyButton
              type="button"
              onClick={() => setFilter('city')}
              disabled={pathname !== '/'}
            >
              по городу
            </MyButton>
          </li>
          <li className={style.menu__item}>
            <MyButton
              type="button"
              onClick={() => setFilter('company')}
              disabled={pathname !== '/'}
            >
              по компании
            </MyButton>
          </li>
        </ul>
      </nav>
      {pathname !== '/' && (
        <div className={style.menu__btn_back}>
          <MyButton type="button" onClick={() => navigation('/')}>
            На главную
          </MyButton>
        </div>
      )}
    </div>
  );
};

export default BlockMenu;
