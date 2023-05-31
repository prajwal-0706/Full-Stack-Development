import User from '../models/User.js';

export const getUsers = async (req, res) => {
  let usersData;
  try {
    usersData = await User.find({});
  } catch (error) {
    console.log(error);
  }

  if (!usersData) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
  return res.status(200).json({ usersData });
};

export const getUserById = async (req, res) => {
  let { id } = req.body;
  let user;
  try {
    user = await User.findById(id);
  } catch (error) {
    console.log(error);
  }

  if (!user) {
    return console.log("Can't Find User");
  }

  return res.status(200).json({ user });
};
