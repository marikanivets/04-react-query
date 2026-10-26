export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date?: string;
}

export interface TmdbResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}
