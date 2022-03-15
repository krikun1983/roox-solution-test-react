import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {UserFull} from 'serverApi/types';
import {MyButton} from 'UI';
import style from './UserForm.module.scss';

type Props = UserFull;

type MyErrorType = {
  name: boolean;
  username: boolean;
  email: boolean;
  street: boolean;
  city: boolean;
  zipcode: boolean;
  phone: boolean;
  website: boolean;
};

const isCheckEmail = `^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]{2,20}\\.+[a-zA-Z0-9-.]{1,30}$`;

const myError = {
  name: false,
  username: false,
  email: false,
  street: false,
  city: false,
  zipcode: false,
  phone: false,
  website: false,
};

const validateInput = (
  name: string,
  value: string,
  setState: React.Dispatch<React.SetStateAction<MyErrorType>>,
): void => {
  if (value === undefined) return;

  if (value.length === 0 || (value.length > 0 && value.trim().length === 0)) {
    setState(prev => ({...prev, [name]: true}));
  } else {
    setState(prev => ({...prev, [name]: false}));
  }
};

const UserForm: React.FC<Props> = props => {
  const [profile, setProfile] = useState({...props, comment: ''});
  const [formActive, setFormActive] = useState(false);
  const [error, setError] = useState(myError);
  const [send, setSend] = useState(false);

  const validateSend = () => {
    if (formActive && Object.values(error).includes(true)) {
      setSend(false);
    } else {
      setSend(true);
    }
  };

  useEffect(() => {
    validateInput('name', profile.name, setError);
    validateInput('username', profile.username, setError);
    validateInput('email', profile.email, setError);
    validateInput('phone', profile.phone, setError);
    validateInput('website', profile.website, setError);
    validateInput('street', profile.address?.street, setError);
    validateInput('zipcode', profile.address?.zipcode, setError);
    validateInput('city', profile.address?.city, setError);
  }, [
    formActive,
    profile.name,
    profile.username,
    profile.email,
    profile.phone,
    profile.website,
    profile.address?.street,
    profile.address?.zipcode,
    profile.address?.city,
  ]);

  useEffect(() => {
    validateSend();
  }, [error]);

  const handleProfile = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.value.length > 60) return;
    if (
      e.target.name === 'street' ||
      e.target.name === 'city' ||
      e.target.name === 'zipcode'
    ) {
      setProfile({
        ...profile,
        address: {
          ...profile.address,
          [e.target.name]: e.target.value.replace(/\s+/g, ' '),
        },
      });
    } else {
      setProfile({
        ...profile,
        [e.target.name]: e.target.value.replace(/\s+/g, ' '),
      });
    }
  };

  const handleEditProfile = () => {
    setFormActive(!formActive);
    setProfile({...props, comment: ''});
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(
      JSON.stringify({
        id: profile.id,
        name: profile.name.trim(),
        username: profile.username,
        email: profile.email.trim(),
        address: {
          street: profile.address?.street.trim(),
          city: profile.address?.city.trim(),
          zipcode: profile.address?.zipcode.trim(),
        },
        phone: profile.phone.trim(),
        website: profile.website.trim(),
        comment: profile.comment.trim(),
      }),
    );

    setFormActive(false);
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmitForm}>
        <div className={style.form__btn_edit}>
          <MyButton type="button" onClick={handleEditProfile}>
            {!formActive ? 'Редактировать' : 'Отменить'}
          </MyButton>
        </div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={profile.name}
          onChange={handleProfile}
          readOnly={!formActive}
          required
          type="text"
        />
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          name="username"
          value={profile.username}
          onChange={handleProfile}
          readOnly={!formActive}
          required
          type="text"
        />
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          value={profile.email}
          onChange={handleProfile}
          readOnly={!formActive}
          pattern={isCheckEmail}
          required
          type="email"
        />
        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          value={profile.address?.street}
          onChange={handleProfile}
          readOnly={!formActive}
          required
          type="text"
        />
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          value={profile.address?.city}
          onChange={handleProfile}
          readOnly={!formActive}
          required
          type="text"
        />
        <label htmlFor="zipcode">Zip Code</label>
        <input
          id="zipcode"
          name="zipcode"
          value={profile.address?.zipcode}
          onChange={handleProfile}
          readOnly={!formActive}
          required
          type="text"
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          value={profile.phone}
          onChange={handleProfile}
          readOnly={!formActive}
          required
          type="text"
        />
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          value={profile.website}
          onChange={handleProfile}
          readOnly={!formActive}
          required
          type="text"
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          name="comment"
          value={profile.comment}
          readOnly={!formActive}
          onChange={handleProfile}
        />
        <div className={style.form__btn_send}>
          <MyButton
            type="submit"
            disabled={!(formActive === true) || send === false}
          >
            Отправить
          </MyButton>
        </div>
      </form>
    </>
  );
};

export default UserForm;
