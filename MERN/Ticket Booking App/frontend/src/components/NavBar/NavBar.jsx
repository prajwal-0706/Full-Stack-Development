import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button, Typography, Modal, Box } from '@mui/material';

const NavBar = () => {
  const [open, setopen] = useState(false);

  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

  return (
    <>
      <Button
        sx={{
          m: 5,
          textAlign: 'center',
          outline: 'none',
          fontWeight: '500',
        }}
        variant="outlined"
        onClick={() => setopen(true)}
      >
        Sign In
      </Button>
      <Modal
        open={open}
        onClose={() => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h1"
            sx={{
              mb: 2,
            }}
          >
            Login
          </Typography>
          <TextField
            sx={{
              mb: 2,
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            sx={{
              mb: 2,
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <Button variant="contained">Login</Button>
        </Box>
      </Modal>
    </>
  );
};

export default NavBar;
