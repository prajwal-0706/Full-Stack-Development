import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    default: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  addedmovies: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Movie',
    },
  ],
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
