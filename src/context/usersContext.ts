import {createContext} from 'react';
import {User} from 'serverApi/types';

type ContextProps = {
  users: User[];
};

export const UserContext = createContext({} as ContextProps);
