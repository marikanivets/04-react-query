import React, { useEffect, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { Movie } from '../../types/movie';
import css from './MovieModal.module.css';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const modalRoot = document.getElementById('root') || document.body;

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const backdropUrl = movie.backdrop_path
    ? `https://tmdb.org{movie.backdrop_path}`
    : null;

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.closeButton} onClick={onClose}>×</button>
        
        {backdropUrl && (
          <img src={backdropUrl} alt={movie.title} className={css.backdrop} />
        )}

        <h2>{movie.title}</h2>
        <p><b>Release Date:</b> {movie.release_date}</p>
        <p><b>Rating:</b> {movie.vote_average}</p>
        <p>{movie.overview}</p>
      </div>
    </div>,
    modalRoot
  );
};

export default MovieModal;
