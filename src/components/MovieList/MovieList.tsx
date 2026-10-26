import { Movie } from '../../types/movie';
import MovieCard from '../MovieCard/MovieCard';
import css from './MovieList.module.css';

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className={css.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
