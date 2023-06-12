import express from 'express';
import {
  addMovie,
  getAllMovies,
  getMovieById,
} from '../controllers/movie-controllers.js';

let movieRoutes = express.Router();

movieRoutes.get('/', getAllMovies);
movieRoutes.post('/', addMovie);
movieRoutes.get('/:id', getMovieById);

export default movieRoutes;
