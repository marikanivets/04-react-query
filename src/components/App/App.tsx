import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '../../services/tmdb-api';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './App.module.css';

import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";
import type { ComponentType } from "react";

type ModuleWithDefault<T> = { default: T };

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<ComponentType<ReactPaginateProps>>
).default;

const App = () => {
  const [searchQuery, setSearchQuery] = useState<string>('Batman');
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['movies', searchQuery, page],
    queryFn: () => searchMovies(searchQuery, page),
    placeholderData: (previousData) => previousData, 
    enabled: !!searchQuery.trim(),
  });

  const handleSearchSubmit = (newQuery: string) => {
    setSearchQuery(newQuery);
    setPage(1); 
  };

  const totalPages = data?.total_pages || 0;
  const movies = data?.results || [];

  return (
    <div className={css.container}>
      <header className={css.header}>
        <span className={css.logo}>Powered by TMDB</span>
        <SearchBar onSubmit={handleSearchSubmit} initialValue={searchQuery} />
      </header>

      <main>
        {isLoading && <Loader />}
        
        {isError && <ErrorMessage message={(error as Error).message} />}

        {!isLoading && !isError && movies.length === 0 && searchQuery && (
          <ErrorMessage message="🚫 No movies found for your request." />
        )}

        {movies.length > 0 && <MovieGrid movies={movies} />}

        {totalPages > 1 && (
          <div className={css.paginationContainer}>
            <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              onPageChange={({ selected }) => setPage(selected + 1)}
              forcePage={page - 1}
              containerClassName={css.pagination}
              activeClassName={css.active}
              nextLabel="→"
              previousLabel="←"
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
