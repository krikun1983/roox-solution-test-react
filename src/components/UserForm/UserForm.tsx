import React, {ChangeEvent, useState} from 'react';
import {UserFull} from 'serverApi/types';
import {MyButton} from 'UI';
import style from './UserForm.module.scss';

type Props = UserFull;

const UserForm: React.FC<Props> = props => {
  const [profile, setProfile] = useState({...props, comment: ''});
  const [formActive, setFormActive] = useState(true);

  const handleProfile = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setProfile({...profile, [e.target.name]: e.target.value});
  };

  return (
    <>
      <form className={style.form}>
        <div className={style.form__btn_edit}>
          <MyButton type="button" onClick={() => setFormActive(false)}>
            Редактировать
          </MyButton>
        </div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={profile.name}
          onChange={handleProfile}
          readOnly={formActive}
          required
          type="text"
        />
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          name="username"
          value={profile.username}
          onChange={handleProfile}
          readOnly={formActive}
          required
          type="text"
        />
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          value={profile.email}
          onChange={handleProfile}
          readOnly={formActive}
          required
          type="email"
        />
        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          value={profile.address?.street}
          onChange={handleProfile}
          readOnly={formActive}
          required
          type="text"
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          value={profile.address?.city}
          onChange={handleProfile}
          readOnly={formActive}
          required
          type="text"
        />
        <label htmlFor="zipcode">Zip Code</label>
        <input
          id="zipcode"
          name="zipcode"
          value={profile.address?.zipcode}
          onChange={handleProfile}
          readOnly={formActive}
          required
          type="text"
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          value={profile.phone}
          onChange={handleProfile}
          readOnly={formActive}
          required
          type="text"
        />
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          value={profile.website}
          onChange={handleProfile}
          readOnly={formActive}
          required
          type="text"
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          name="comment"
          value={profile.comment}
          readOnly={formActive}
          onChange={handleProfile}
        />
        <div className={style.form__btn_send}>
          <MyButton type="submit" disabled>
            Отправить
          </MyButton>
        </div>
      </form>
    </>
  );
};

export default UserForm;
