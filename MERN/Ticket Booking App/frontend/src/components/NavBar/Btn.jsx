import React, { useState } from 'react';
import {
  Button,
  Typography,
  Modal,
  Box,
  Stack,
  TextField,
} from '@mui/material';

const Btn = ({ name }) => {
  const [open, setopen] = useState(false);

  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    textAlign: 'center',
    p: 4,
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
                  mb: 2,
                }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
              <Button type="submit" variant="contained">
                {name}
              </Button>
            </Stack>
          </form>
        )}
      </Modal>
    </>
  );
};

export default Btn;
