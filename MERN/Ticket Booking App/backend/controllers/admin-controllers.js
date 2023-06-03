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
