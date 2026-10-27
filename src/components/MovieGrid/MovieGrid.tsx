import { Movie } from '../../types/movie';
import MovieCard from '../MovieCard/MovieCard';
import css from './MovieGrid.module.css';

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const MovieGrid = ({ movies, onSelect }: MovieGridProps) => {
  return (
    <div className={css.grid}>
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => onSelect(movie)}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
