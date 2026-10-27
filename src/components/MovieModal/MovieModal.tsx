import React from 'react';
import { Movie } from '../../types/movie';
import css from './MovieModal.module.css';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>×</button>
        <h2>{movie.title}</h2>
        <p><b>Release Date:</b> {movie.release_date}</p>
        <p><b>Rating:</b> {movie.vote_average}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieModal;
