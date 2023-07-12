import React, { useState } from 'react';
import './form.css';
import img1 from '../../utlis/forms/1.png';
import img2 from '../../utlis/forms/2.png';
import img3 from '../../utlis/forms/3.png';
import eyeon from '../../utlis/forms/eyeon.svg';
import eyeoff from '../../utlis/forms/eyeoff.svg';
import { addAdmin, loginAdmin } from '../../api/auth';

const clickhandler = (toggleVisibility, setToggleVisibility) => {
  setToggleVisibility(!toggleVisibility);
};

const Login = () => {
  const [toggleVisibility, setToggleVisibility] = useState(false);

  const [animate, setAnimate] = useState({
    animateSignup: false,
    animateSignIn: false,
  });

  const [adminDetails, setAdminDetails] = useState({});

  const handleChange = (e) => {
    setAdminDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(adminDetails);
    const data = await addAdmin(adminDetails);
    console.log(data);
  };

  return (
    <>
      <ImageDesign />

      <div
        className={`form ${
          animate.animateSignup
            ? 'animate-signUp'
            : animate.animateSignIn
            ? 'animate-signIn'
            : ''
        }`}
      >
        <div className={`form__container flexColCenter sign-up`}>
          <div className="form__container__header">
            <h1>Login</h1>
          </div>
          <div className="form__container__body">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const data = await loginAdmin(adminDetails);
                console.log(data);
              }}
            >
              <div className="form__container__body__input">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form__container__body__input">
                <input
                  type={toggleVisibility ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={handleChange}
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
            <div className="form__container__body__input">
              <p>
                Register as Admin ?{' '}
                <a
                  onClick={() => {
                    setAnimate({
                      animateSignup: true,
                      animateSignIn: false,
                    });
                  }}
                  href="#"
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className={`form__container sign-in `}>
          <div className="form__container__header">
            <h1>Add Admin</h1>
          </div>
          <div className="form__container__body">
            <form onSubmit={handleSubmit}>
              <div className="form__container__body__input">
                <input
                  type="text"
                  placeholder="Name of Admin"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </div>

              <div className="form__container__body__input">
                <input
                  type="email"
                  placeholder="Email Id "
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>

              <div className="form__container__body__input">
                <input
                  type={toggleVisibility ? 'text' : 'password'}
                  placeholder="Password for Admin"
                  name="password"
                  id="password"
                  onChange={handleChange}
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
            <div className="form__container__body__input">
              <p>
                Login as Admin ?{' '}
                <a
                  onClick={() => {
                    setAnimate({
                      animateSignup: false,
                      animateSignIn: true,
                    });
                  }}
                  href="#"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
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
