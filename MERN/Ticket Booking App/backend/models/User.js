import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: true,
  },

  email: {
    type: String,
    unique: true,
    default: true,
  },

  password: {
    type: String,
    required: true,
  },

  allBookings: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Booking',
    },
  ],
});

const User = mongoose.model('User', userSchema);

export default User;
