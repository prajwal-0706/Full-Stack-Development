import Admin from '../models/Admin.js';
import bcrypt from 'bcryptjs'; // for hashing passwords
import jwt from 'jsonwebtoken'; // for generating tokens

export const getAdmins = async (req, res) => {
  let admins;
  try {
    admins = await Admin.find({});
  } catch (error) {
    console.log(error);
  }
  if (!admins) {
    return res.status(500).json({ meassge: 'Internal Server Error' });
  }

  return res.status(200).json({ admins });
};

export const getAdminById = async (req, res) => {
  const { id } = req.body;
  let admin;
  try {
    admin = await Admin.findById(id).populate('addedmovies');
  } catch (error) {
    console.log(error);
  }

  if (!admin) {
    return console.log("Can't Find the admin");
  }

  return res.status(200).json({ admin });
};

export const addAdmin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  if (email === '' || password === '') {
    return res.status(401).json({ message: 'Please fill all the fields' });
  }

  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ email });
  } catch (error) {
    console.log(error);
  }

  if (existingAdmin) {
    return res.status(402).json({ message: 'Admin already exists' });
  }

  let admin;
  const hashedPassword = bcrypt.hashSync(password);
  try {
    admin = await Admin({
      email,
      password: hashedPassword,
    });
    await admin.save();
  } catch (error) {
    console.log(error);
  }

  if (!admin) {
    return res.status(500).json({ message: 'Internal Server Error' });
  }
  return res.status(201).json({ message: 'Admin Created', admin });
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    return res.status(400).json({ message: 'Please fill all the fields' });
  }

  let existingAdmin;
  try {
    existingAdmin = await Admin.findOne({ email });
  } catch (error) {
    console.log(error);
  }

  if (!existingAdmin) {
    return res.status(400).json({ message: 'Invalid Credentials' });
  }

  let isPasswordValid;
  try {
    isPasswordValid = bcrypt.compareSync(password, existingAdmin.password);
  } catch (error) {
    console.log(error);
  }

  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid Password' });
  }

  const token = jwt.sign({ id: existingAdmin._id }, process.env.MY_SECRET, {
    expiresIn: '7d',
  });

  return res
    .status(200)
    .json({ message: 'Logged In', token, existingAdminId: existingAdmin._id });
};
