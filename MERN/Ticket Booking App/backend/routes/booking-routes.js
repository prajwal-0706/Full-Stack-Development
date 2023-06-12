import express from 'express';

const bookingRoutes = express.Router();

bookingRoutes.get('/:id');
bookingRoutes.post('/book');
bookingRoutes.delete('/:id');

export default bookingRoutes;
