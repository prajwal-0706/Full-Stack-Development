import React, { useState } from 'react';
import eyeoff from '../../utils/form/eye-off.svg';
import eyeon from '../../utils/form/eye-on.svg';
import googleSvg from '../../utils/form/google.svg';
import info from '../../utils/form/info.svg';
import {
  Button,
  Typography,
  Modal,
  Box,
  Stack,
  TextField,
} from '@mui/material';
import './Navbar.css';

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  bgcolor: 'background.paper',
  boxShadow: 24,
  textAlign: 'center',
  p: 4,
  borderRadius: '27px',
};

const Btn = ({ name, children }) => {
  const [open, setopen] = useState(false);
  return (
    <>
      <Button
        sx={{
          ml: 2,
          textAlign: 'center',
          outline: 'none',
          fontWeight: '500',
        }}
        variant="outlined"
        onClick={() => setopen(true)}
      >
        {name}
      </Button>
      <Modal
        open={open}
        onClose={() => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    </>
  );
};

export const Signup = () => {
  return (
    <Stack sx={styles}>
      <form className="form">
        <div className="form-heading">
          <h3>Sign up!!</h3>
          <p
            style={{
              marginTop: '13px',
            }}
          >
            Create an account to continue.
          </p>
        </div>
        <div className="form-inputs">
          <div className="form-input-1">
            <p className="form-input-label">Name</p>
            <input type="text" required placeholder="Enter your Name" />
          </div>
          <div className="form-input-1">
            <p className="form-input-label">Email</p>
            <input type="text" required placeholder="Enter your Email" />
          </div>
          <div className="form-input-2">
            <p className="form-input-label">Password</p>
            <div className="input-password-section">
              <input type="Paasword" required placeholder="Enter Password" />
              <img
                src={eyeoff}
                className="toggle-password-visibility"
                alt="eye"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            justifyContent: 'center',
          }}
          className="form-forgot-password"
        >
          <div
            style={{
              gap: '13px',
            }}
            className="form-remember"
          >
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">I Agree to terms and conditions</label>
          </div>
        </div>
        <div className="form-btns">
          <button className="btn form-submit" type="submit">
            Sign up
          </button>
          <button className="btn form-google">
            <img src={googleSvg} alt="google" />
            <span> Sign up with Google</span>
          </button>
        </div>
        <div className="form-sign">
          <p>
            Already have an account? <a href="/new">Login</a>
          </p>
        </div>
      </form>
    </Stack>
  );
};

export const Login = () => {
  const [password, setPassword] = useState(false);

  return !password ? (
    <Stack sx={styles}>
      <form className="form">
        <div className="form-heading">
          <h3>Welcome Back!</h3>
          <p
            style={{
              marginTop: '13px',
            }}
          >
            We missed you! Please Enter your details.
          </p>
        </div>
        <div className="form-inputs">
          <div className="form-input-1">
            <p className="form-input-label">Email</p>
            <input type="text" required placeholder="Enter your Email" />
          </div>
          <div className="form-input-2">
            <p className="form-input-label">Password</p>
            <div className="input-password-section">
              <input type="Paasword" required placeholder="Enter Password" />
              <img
                src={eyeoff}
                className="toggle-password-visibility"
                alt="eye"
              />
            </div>
          </div>
        </div>
        <div className="form-forgot-password">
          <div className="form-remember">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <span onClick={() => setPassword(false)}>Forgot password?</span>
        </div>
        <div className="form-btns">
          <button className="btn form-submit" type="submit">
            Sign in
          </button>
          <button className="btn form-google">
            <img src={googleSvg} alt="google" />
            <span> Sign in with Google</span>
          </button>
        </div>
        <div className="form-sign">
          <p>
            Don't have an account?
            <span onClick={() => setPassword(true)}>Sign up</span>
          </p>
        </div>
      </form>
    </Stack>
  ) : (
    <ForgotPassword password={password} setPassword={setPassword} />
  );
};

export const ForgotPassword = ({ password, setPassword }) => {
  return (
    <Stack sx={styles}>
      <form className="form">
        <div className="form-heading">
          <h3>Forgot Password?</h3>
          <p style={{ marginTop: '13px' }}>
            No Worries! we'll send you the reset instructions.
          </p>
        </div>
        <div className="form-inputs">
          <div className="form-input-1">
            <p className="form-input-label">Email</p>
            <input type="text" required placeholder="Enter your Email" />
          </div>
        </div>
        <div className="form-info">
          <img src={info} alt="info" />
          <div className="form-info-content">
            We can't find correct address. Resend the email that you have
            registered
          </div>
        </div>

        <div className="form-btns">
          <button className="btn form-submit" type="submit">
            Send reset link
          </button>
        </div>
        <div className="form-sign">
          <p>
            Don't have an account?
            <a onClick={() => setPassword(true)}>Sign up</a>
          </p>
        </div>
      </form>
    </Stack>
  );
};
export default Btn;
