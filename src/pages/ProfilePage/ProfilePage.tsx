import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import UserForm from 'components/UserForm';
import serviceApi from 'serverApi/service-api';
import {UserFull} from 'serverApi/types';
import {MyLoader} from 'UI';
import style from './ProfilePage.module.scss';

const ProfilePage: React.FC = () => {
  const {id} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserFull>({} as UserFull);

  const fetchUser = async (ids: string) => {
    try {
      setIsLoading(true);
      const responsive = await serviceApi.getUserById(ids);
      setUser(responsive);
    } catch (error) {
      console.error((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(id as string);
  }, []);

  return (
    <div className={style.profile}>
      {isLoading ? (
        <>
          <MyLoader />
        </>
      ) : (
        <>
          <h1 className={style.profile__heading}>Профиль пользователя</h1>
          <div className={style.profile__form}>
            <UserForm {...user} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
