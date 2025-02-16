import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  clearQuery,
  setQuery,
  selectSearch,
} from "../../store/search/searchSlice.ts";
import SearchIcon from "../../assets/icons/search.svg?react";
import CloseIcon from "../../assets/icons/close.svg?react";
import styles from "./SearchBar.module.scss";

interface SearchProps {
  variant?: "home" | "header";
}

const SearchBar = ({ variant = "home" }: SearchProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>(useSelector(selectSearch) || "");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (search && search.trim()) {
      dispatch(setQuery(search));
      navigate("/resultsSearch");
    }
  };

  const handleClear = () => {
    dispatch(clearQuery());
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`${styles.searchBar} ${variant === "header" ? styles.searchBar__header : ""}`}
    >
      <div className={styles.searchBar__inputWrapper}>
        <SearchIcon
          className={styles.searchBar__searchIcon}
          width="20"
          height="20"
        />
        <input
          type="search"
          className={styles.searchBar__input}
          value={search}
          onChange={handleInputChange}
        />
        {search && (
          <CloseIcon
            className={styles.searchBar__clearIcon}
            width="24"
            height="24"
            onClick={handleClear}
          />
        )}
      </div>
      {variant === "home" && search && (
        <button type="submit" className={styles.searchBar__button}>
          Buscar
        </button>
      )}
    </form>
  );
};

export default SearchBar;
