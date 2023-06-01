import express from 'express';

const bookingRoutes = express.Router();

bookingRoutes.get('/');
bookingRoutes.post('/book');
bookingRoutes;

export default bookingRoutes;
