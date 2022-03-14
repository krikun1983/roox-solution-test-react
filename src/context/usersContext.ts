import {createContext} from 'react';
import {User} from 'serverApi/types';

type ContextProps = {
  users: User[];
  isLoading: boolean;
};

export const UserContext = createContext({} as ContextProps);
