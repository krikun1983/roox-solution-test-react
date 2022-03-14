import React from 'react';
import {Link} from 'react-router-dom';
import {User} from 'serverApi/types';
import style from './UsersListItem.module.scss';

type Props = {
  user: User;
};

const UsersListItem: React.FC<Props> = ({user}) => {
  return (
    <li key={user.id} className={style.list__item}>
      <div className={style.list__item__heading}>
        <span>фио:</span> {user.name}
      </div>
      <div>
        <span>город:</span> {user.address?.city}
      </div>
      <div>
        <span>компания:</span> {user.company?.name}
      </div>
      <Link to={`profile/${user.id}`} className={style.list__item__link}>
        Подробнее
      </Link>
    </li>
  );
};

export default UsersListItem;
