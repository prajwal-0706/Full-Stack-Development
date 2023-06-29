import React from 'react';
import './Navbar.css';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Btn, { Login, Signup } from './Btn';
import search from '../../utils/search.svg';
import logo from '../../utils/logo.png';

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        style={{
          cursor: 'pointer',
          scale: '0.8',
        }}
        onClick={() => {
          window.location.href = '/';
        }}
        src={logo}
        width="300px"
        alt="logo"
        className="logo"
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          width: '40%',
          height: '30px',
        }}
      >
        <img
          style={{
            width: '50px',
            height: '30px',
          }}
          src={search}
          alt="search"
        />
        <TextField
          sx={{
            width: '100%',
            height: '30px',
          }}
          id="input-with-sx"
          label="Search Movie"
          variant="standard"
        />
      </Box>
      <div className="btns">
        <Btn name={'LOGIN'}>
          <Login />
        </Btn>

        <Btn name={'Sign up'}>
          <Signup />
        </Btn>
      </div>
    </div>
  );
};

export default NavBar;
