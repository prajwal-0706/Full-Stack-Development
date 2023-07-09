import axios from 'axios';

const url = 'http://localhost:5000';

export const signup = async (userDetails) => {
  try {
    const response = await axios.post(`${url}/user/signup`, userDetails);
    return response;
  } catch (error) {
    return error.response.status;
  }
};

export const login = async (userDetails) => {
  try {
    const response = await axios.post(`${url}/user/login`, userDetails);
    return response;
  } catch (error) {
    return error.response.data.message;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get(`${url}/user/logout`);
    return response;
  } catch (error) {
    return error.response.data.message;
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${url}/user`);
    return response;
  } catch (error) {
    return error.response.data.message;
  }
};

// Path: MERN\Ticket Booking App\frontend\user\src\components\Signup.js
