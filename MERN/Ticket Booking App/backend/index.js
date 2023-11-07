import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user-routes.js';
import adminRouter from './routes/admin-routes.js';
import movieRoutes from './routes/movie-routes.js';
import bookingRoutes from './routes/booking-routes.js';
dotenv.config();
let app = express();

const MONGODB_URL = `mongodb+srv://${process.env.MONGODB_DATABASE}:${process.env.MONGODB_PASSWORD}@ticket-booking-site.ouyrdih.mongodb.net/?retryWrites=true&w=majority`;
let PORT = process.env.PORT || '5000';

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use('/user', userRouter);
app.use('/admin', adminRouter);
app.use('/movie', movieRoutes);
app.use('/booking', bookingRoutes);

mongoose
  .connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening to the port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
