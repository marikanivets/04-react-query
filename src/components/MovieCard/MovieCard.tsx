import { Movie } from '../../types/movie';
import css from './MovieCard.module.css';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const imageUrl = movie.poster_path
    ? `https://tmdb.org{movie.poster_path}`
    : 'https://placeholder.com';

  return (
    <div className={css.card}>
      <img src={imageUrl} alt={movie.title} className={css.poster} />
      <div className={css.info}>
        <h3 className={css.title}>{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
