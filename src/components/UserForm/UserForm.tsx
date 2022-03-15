import React, {ChangeEvent, FormEvent, useState} from 'react';
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
    if (
      e.target.name === 'street' ||
      e.target.name === 'city' ||
      e.target.name === 'zipcode'
    ) {
      setProfile({
        ...profile,
        address: {...profile.address, [e.target.name]: e.target.value},
      });
    } else {
      setProfile({...profile, [e.target.name]: e.target.value});
    }
  };

  const handleEditProfile = () => {
    setFormActive(!formActive);
    setProfile({...props, comment: ''});
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      id: profile.id,
      name: profile.name,
      username: profile.username,
      email: profile.email,
      address: {
        street: profile.address?.street,
        city: profile.address?.city,
        zipcode: profile.address?.zipcode,
      },
      phone: profile.phone,
      website: profile.website,
      comment: profile.comment,
    });

    setFormActive(true);
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmitForm}>
        <div className={style.form__btn_edit}>
          <MyButton type="button" onClick={handleEditProfile}>
            {formActive ? 'Редактировать' : 'Отменить'}
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
          <MyButton type="submit" disabled={formActive}>
            Отправить
          </MyButton>
        </div>
      </form>
    </>
  );
};

export default UserForm;
