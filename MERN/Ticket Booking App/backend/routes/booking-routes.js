import express from 'express';
import {
  deleteBooking,
  getBookingById,
  newBooking,
} from '../controllers/booking-controllers.js';

const bookingRoutes = express.Router();

bookingRoutes.get('/:id', getBookingById);
bookingRoutes.post('/book', newBooking);
bookingRoutes.delete('/:id', deleteBooking);

export default bookingRoutes;
