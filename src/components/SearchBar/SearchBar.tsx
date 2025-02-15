import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  clearQuery,
  selectSearch,
  setQuery,
} from "../../store/search/searchSlice.ts";
import SearchIcon from "../../assets/icons/search.svg?react";
import CloseIcon from "../../assets/icons/close.svg?react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const query = useSelector(selectSearch);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.target.value));
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      navigate("/resultsSearch");
    }
  };

  const handleClear = () => {
    dispatch(clearQuery());
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchBar}>
      <div className={styles.searchBar__inputWrapper}>
        <SearchIcon
          className={styles.searchBar__searchIcon}
          width="24"
          height="24"
        />
        <input
          type="search"
          className={styles.searchBar__input}
          value={query}
          onChange={handleInputChange}
        />
        {query && (
          <CloseIcon
            className={styles.searchBar__clearIcon}
            width="24"
            height="24"
            onClick={handleClear}
          />
        )}
      </div>
      {query && (
        <button type="submit" className={styles.searchBar__button}>
          Buscar
        </button>
      )}
    </form>
  );
};

export default SearchBar;
