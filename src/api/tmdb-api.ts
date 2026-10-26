import axios from 'axios';
import { TmdbResponse } from '../types/movie';

const TMDB_API = axios.create({
  baseURL: 'https://themoviedb.org',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzE4MjIxZWIzOWMyZDEwMDM5YTAzODFlNDFjZWI1ZCIsIm5iZiI6MTc5MzAyNTk5OC41NjcwMDAyLCJzdWIiOiI2YWRmNjdjZTI4MWM4MzBkNGVjMTg3ZjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UzjNB8UVl05mium7bUCv3WR5qlA4jNNRZxeUUsgApzo' 
  }
});

export const searchMovies = async (query: string, page: number): Promise<TmdbResponse> => {
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
