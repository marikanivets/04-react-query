import React, { useState, FormEvent } from 'react';
import css from './SearchForm.module.css';

interface SearchFormProps {
  onSubmit: (query: string) => void;
  initialValue: string;
}

const SearchForm = ({ onSubmit, initialValue }: SearchFormProps) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
