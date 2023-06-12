import mongoose from 'mongoose';
import Booking from '../models/Booking.js';

export const getBookingById = async (req, res) => {
  const { id } = req.params;
  let booking;

  try {
    booking = await Booking.findById(id);
  } catch (error) {
    console.log(error);
  }

  if (!booking) {
    res.status(500).json({ message: 'Could not find the Booking' });
  }
  return res.status(200).json({ booking });
};

export const newBooking = async (req, res) => {};

export const deleteBooking = async (req, res) => {
  const { id } = req.body;
  let booking;

  try {
    booking = await Booking.findByIdAndRemove(id).populate('user movie');
    console.log(booking);
    const session = await mongoose.startSession();
    session.startTransaction();
    await booking.user.bookings.pull(booking);
    await booking.movie.bookings.pull(booking);
    await booking.movie.save({ session });
    await booking.user.save({ session });
    session.commitTransaction();
  } catch (error) {
    console.log(error);
  }

  if (!booking) {
    return res.status(500).json({ message: 'Unable to Delete' });
  }

  return res.status(200).json({ message: 'Deletion Successfull', booking });
};
