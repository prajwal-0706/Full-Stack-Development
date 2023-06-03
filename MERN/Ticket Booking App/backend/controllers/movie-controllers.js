import Movie from '../models/Movie.js';
import jwt from 'jsonwebtoken';

export const addMovie = async (req, res) => {
  const extractedToken = req.headers.authorization.split(' ')[1];

  if (!extractedToken) {
    return res.status(404).json({ message: 'Token Not Found' });
  }

  let adminId;

  jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(400).json({ messge: `${err.message}` });
    } else {
      adminId = decrypted.id;
      return;
    }
  });

  let { title, description, actors, releaseDate, posterUrl, featured } =
    req.body;

  if (
    !title &&
    title.trim === '' &&
    !description &&
    description.trim === '' &&
    !posterUrl &&
    posterUrl.trim === ''
  ) {
    return res.status(422).json({ meseage: 'Invlaid Inputs' });
  }

  let movie;
  try {
    movie = new Movie({
      description,
      title,
      releaseDate: new Date(`${releaseDate}`),
      featured,
      actors,
      admin: adminId,
      posterUrl,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllMovies = async (req, res) => {
  let allMovies;
  try {
    allMovies = await Movie.find({});
  } catch (error) {
    console.log(error);
  }

  if (!allMovies) {
    return console.log('Internal error');
  }

  return res.status(200).json({ allMovies });
};

export const getMovieById = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  let movie;
  try {
    movie = await Movie.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!movie) {
    return console.log('Internal Server Error');
  }

  return res.status(200).json({ movie });
};
