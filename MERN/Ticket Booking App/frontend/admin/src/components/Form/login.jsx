import React, { useState } from 'react';
import './form.css';
import img1 from '../../utlis/forms/1.png';
import img2 from '../../utlis/forms/2.png';
import img3 from '../../utlis/forms/3.png';
import eyeon from '../../utlis/forms/eyeon.svg';
import eyeoff from '../../utlis/forms/eyeoff.svg';

const clickhandler = (toggleVisibility, setToggleVisibility) => {
  setToggleVisibility(!toggleVisibility);
};

const Login = () => {
  const [toggleVisibility, setToggleVisibility] = useState(false);
  return (
    <div className="form">
      <ImageDesign />
      <div className="form__container">
        <div className="form__container__header">
          <h1>Login</h1>
        </div>
        <div className="form__container__body">
          <form>
            <div className="form__container__body__input">
              <input type="email" placeholder="Email" name="email" id="email" />
            </div>
            <div className="form__container__body__input">
              <input
                type={toggleVisibility ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                id="password"
              />
              <img
                src={toggleVisibility ? eyeon : eyeoff}
                className="toggle-password-visibility"
                alt="eyeon"
                onClick={() =>
                  clickhandler(toggleVisibility, setToggleVisibility)
                }
              />
            </div>
            <div className="form__container__body__input">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

export function ImageDesign() {
  const styles = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '1',
  };

  return (
    <div className="imageDesign">
      <img draggable="false" style={styles} src={img1} alt="" />
      <img
        draggable="false"
        style={{
          ...styles,
          zIndex: '3',
        }}
        src={img2}
        alt=""
      />
      <img
        draggable="false"
        style={{
          ...styles,
          zIndex: '2',
        }}
        src={img3}
        alt=""
      />
    </div>
  );
}
