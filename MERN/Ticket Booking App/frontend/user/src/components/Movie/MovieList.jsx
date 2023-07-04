import React from 'react';
import MovieCard from './Moviecard/MovieCard';

const MovieList = () => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    marginTop: '20px',
  };
  return (
    <div style={styles} className="movieList">
      <MovieCard movieName={'The Flash'} movieGenere={'HINDI (U/A) Romance'} />
    </div>
  );
};

export default MovieList;
