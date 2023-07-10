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

