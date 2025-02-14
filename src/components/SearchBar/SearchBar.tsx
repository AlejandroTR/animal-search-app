import React, { useState } from "react";

import SearchIcon from "../../assets/icons/search.svg?react";
import CloseIcon from "../../assets/icons/close.svg?react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Buscando:", query);
  };

  const handleClear = () => {
    setQuery("");
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
