import axios from 'axios';
import { Movie } from '../types/movie';

export interface TmdbResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

const TMDB_API = axios.create({
  baseURL: 'https://themoviedb.org',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
  }
});

export const fetchMovies = async (query: string, page: number): Promise<TmdbResponse> => {
  if (!query.trim()) {
    return { results: [], page: 1, total_pages: 0, total_results: 0 };
  }
  
  const response = await TMDB_API.get<TmdbResponse>('/search/movie', {
    params: {
      query: query,
      page: page,
      include_adult: false,
      language: 'en-US'
    }
  });
  
  return response.data;
};
  