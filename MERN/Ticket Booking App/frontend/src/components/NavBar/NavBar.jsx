import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button, Typography, Modal, Box, Stack } from '@mui/material';
import Btn from './Btn';
import search from '../../utils/search.svg';
import logo from '../../utils/logo.png';

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} width="300px" alt="logo" className="logo" />
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
        <Btn name={'SIGN UP'} />
        <Btn name={'LOGIN'} />
      </div>
    </div>
  );
};

export default NavBar;
