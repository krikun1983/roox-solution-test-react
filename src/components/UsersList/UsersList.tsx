import React from 'react';
import {User} from 'serverApi/types';
import style from './UsersList.module.scss';
import UsersListItem from './UsersListItem';

type Props = {
  users: User[];
};

const UsersList: React.FC<Props> = ({users}) => {
  return (
    <ul className={style.list}>
      {users.map(({id, name, address, company}) => (
        <UsersListItem key={id} user={{id, name, address, company}} />
      ))}
    </ul>
  );
};

export default UsersList;
