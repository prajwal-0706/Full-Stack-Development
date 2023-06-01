import express from 'express';
import {
  getAllMovies,
  getMovieById,
} from '../controllers/movie-controllers.js';

let movieRoutes = express.Router();

movieRoutes.get('/', getAllMovies);
movieRoutes.post('/');
movieRoutes.get('/:id', getMovieById);

export default movieRoutes;
