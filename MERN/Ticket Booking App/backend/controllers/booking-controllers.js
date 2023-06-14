import mongoose from 'mongoose';
import Booking from '../models/Booking.js';
import Movie from '../models/Movie.js';
import User from '../models/User.js';

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

export const newBooking = async (req, res) => {
  const { movie, date, seatNumber, user } = req.body;
  let existingUser, existingMovie;

  try {
    existingMovie = await Movie.findById(movie);
    existingUser = await User.findById(user);
  } catch (error) {
    console.log(error);
  }

  if (!existingMovie || !existingUser) {
    return res.status(404).json({ message: 'Invalid Details' });
  }

  let booking;

  try {
    booking = new Booking({
      movie,
      date: new Date(`${date}`),
      seatNumber,
      user,
    });

    const session = mongoose.startSession();
    session.startSession();
    existingMovie.bookings.push(booking);
    existingUser.allBookings.push(booking);
    await existingMovie.save({ session });
    await existingUser.save({ session });
    await booking.save({ session });
    await session.commitTransaction();
  } catch (error) {
    console.log(error);
  }

  if (!booking) {
    return res.status(500).json({ message: 'Something went Wrong' });
  }

  return res.status(201).json({ message: 'Booking Successfull' });
};

export const deleteBooking = async (req, res) => {
  const { id } = req.body;
  let booking;

  try {
    booking = await Booking.findByIdAndRemove(id).populate('user movie');
    console.log(booking);
    const session = await mongoose.startSession();
    session.startTransaction();
    await booking.user.allBookings.pull(booking);
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
