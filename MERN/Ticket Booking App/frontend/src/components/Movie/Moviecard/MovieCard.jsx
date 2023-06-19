import React from 'react';
import './MovieCard.css';

const MovieCard = () => {
  return (
    <div className="movieCard">
      <img
        draggable="false"
        src="https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00023164.jpg"
        alt="card"
      />
      <span className="movieDetails">
        <h4 className="movieName">Zara hatke zara bachke</h4>
        <p className="movieGenre">HINDI (U/A) Romance</p>
        <div className="movieBtns">
          <button className="playTrailer">BOOK TICKETS</button>
          <button className="playTrailer">PLAY TRAILER</button>
        </div>
      </span>
    </div>
  );
};

export default MovieCard;
