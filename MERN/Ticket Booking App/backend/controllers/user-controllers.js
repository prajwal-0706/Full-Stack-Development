import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const addUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (name === '' || email === '' || password === '') {
    return res.status(401).json({ message: 'Please fill all the details' });
  }

  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    console.log(error);
  }

  if (existingUser) {
    return res.status(402).json({ message: 'User Already Exists' });
  }

  const hashedPassword = bcrypt.hashSync(password);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
  } catch (error) {
    console.log(error);
  }

  if (!newUser) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }

  return res.status(201).json({ message: 'User Created', newUser });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    return res.status(401).json({ message: 'please fill the details' });
  }

  let existingUser;

  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    console.log(error);
  }

  if (!existingUser) {
    return res.status(400).json({ message: 'Invalid Credentials' });
  }

  let isPasswordValid;
  try {
    isPasswordValid = await bcrypt.compareSync(password, existingUser.password);
  } catch (error) {
    console.log(error);
  }

  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid Password' });
  }

  const token = jwt.sign(
    {
      id: existingUser._id,
    },
    process.env.MY_SECRET,
    {
      expiresIn: '7d',
    }
  );

  return res
    .status(200)
    .json({ message: 'Logged in successfully', token, id: existingUser._id });
};
