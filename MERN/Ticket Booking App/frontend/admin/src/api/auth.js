import axios from 'axios';

const url = 'http://localhost:5000/admin';

export const addAdmin = async (adminDetails) => {
  try {
    const { data } = await axios.post(`${url}/signup`, adminDetails);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const loginAdmin = async (adminDetails) => {
  try {
    const { data } = await axios.post(`${url}/login`, adminDetails);
    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const getAdmin = async (id) => {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
