import React, { useState } from 'react';
import './form.css';
import { ImageDesign } from './login';
import eyeon from '../../utlis/forms/eyeon.svg';
import eyeoff from '../../utlis/forms/eyeoff.svg';

const Signup = () => {
  const [toggleVisibility, setToggleVisibility] = useState(false);

  return (
    <div className="form">
      <ImageDesign />
      <di className="form__container">
        <div className="form__container__header">
          <h1>Add Admin</h1>
        </div>
        <div className="form__container__body">
          <form>
            <div className="form__container__body__input">
              <input
                type="text"
                placeholder="Name of Admin"
                name="name"
                id="name"
              />
            </div>

            <div className="form__container__body__input">
              <input
                type="email"
                placeholder="Email Id "
                name="email"
                id="email"
              />
            </div>

            <div className="form__container__body__input">
              <input
                type={toggleVisibility ? 'text' : 'password'}
                placeholder="Password for Admin"
                name="password"
                id="password"
              />
              <img
                src={toggleVisibility ? eyeon : eyeoff}
                className="toggle-password-visibility"
                alt="eyeon"
                onClick={() => setToggleVisibility(!toggleVisibility)}
              />
            </div>

            <div className="form__container__body__input">
              <button type="submit">Add Admin</button>
            </div>
          </form>
        </div>
      </di>
    </div>
  );
};

export default Signup;
