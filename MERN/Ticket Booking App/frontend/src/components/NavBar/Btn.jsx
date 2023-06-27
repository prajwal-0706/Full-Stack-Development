import React, { useState } from 'react';
import eyeoff from '../../utils/form/eye-off.svg';
import eyeon from '../../utils/form/eye-on.svg';
import googleSvg from '../../utils/form/google.svg';
import {
  Button,
  Typography,
  Modal,
  Box,
  Stack,
  TextField,
} from '@mui/material';
import './Navbar.css';

const Btn = ({ name }) => {
  const [open, setopen] = useState(false);

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
    borderRadius: '10px',
  };

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
        {name === 'LOGIN' ? (
          <form>
            <Stack sx={styles}>
              <Typography
                id="modal-modal-title"
                variant="h5"
                component="h1"
                sx={{
                  mb: 5,
                }}
              >
                {name}
              </Typography>
              <TextField
                required
                sx={{
                  mb: 2,
                }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                required
                sx={{
                  mb: 5,
                }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Stack>
          </form>
        ) : (
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
                    <input
                      type="Paasword"
                      required
                      placeholder="Enter Password"
                    />
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
                <a href="">Forgot password?</a>
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
                  Don't have an account? <a href="">Sign up</a>
                </p>
              </div>
            </form>
          </Stack>
        )}
      </Modal>
    </>
  );
};

export default Btn;
