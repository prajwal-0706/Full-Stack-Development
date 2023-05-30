import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

let app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
dotenv.config();

const MONGODB_URL = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@ticket-booking-site.ouyrdih.mongodb.net/?retryWrites=true&w=majority`;
let PORT = process.env.PORT || '5000';

app.get('/', (req, res) => {
  res.send('Hiiii');
});

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
