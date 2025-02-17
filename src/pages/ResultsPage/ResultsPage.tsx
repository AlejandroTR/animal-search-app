import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../store/store";
import {
  getAnimals,
  selectAnimals,
  selectLoading,
} from "../../store/animal/animalSlice.ts";

import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import SearchBar from "../../components/SearchBar/SearchBar.tsx";
import Skeleton from "./components/Skeleton.tsx";

import googleLogo from "/google.svg";
import styles from "./ResultsSearch.module.scss";

const ResultsPage = () => {
  const query = useSelector((state: RootState) => state.search.query);
  const dispatch = useDispatch<AppDispatch>();

  const animals = useSelector(selectAnimals);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    if (query) {
      dispatch(getAnimals(query));
    }
  }, [query, dispatch]);

  return (
    <>
      <Header
        leftContent={
          <>
            <div className={styles.resultsSearch__logo}>
              <img src={googleLogo} alt="Google logo" />
            </div>
            <SearchBar variant="header" />
          </>
        }
      />
      <div className={styles.resultsSearch}>
        <div className={styles.resultsSearch__container}>
          <div className={styles.resultsSearch__list}>
            {loading ? (
              <Skeleton />
            ) : query && animals.length > 0 ? (
              <ul>
                {animals.map((animal) => (
                  <li key={animal.id} className={styles.resultsSearch__item}>
                    <span className={styles.resultsSearch__url}>
                      {animal.url}
                    </span>
                    <a
                      href={animal.url}
                      className={styles.resultsSearch__title}
                    >
                      {animal.title}
                    </a>
                    <span className={styles.resultsSearch__description}>
                      {animal.description}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className={styles.resultsSearch__empty}>
                {query && (
                  <p>
                    No results found for{" "}
                    <span className={styles.resultsSearch__highlight}>
                      '{query}'
                    </span>
                  </p>
                )}
                <p>
                  Try looking for:{" "}
                  <span className={styles.resultsSearch__highlight}>
                    insect, fish, horse, crocodilia, bear, cetacean, cow, lion,
                    rabbit, cat, snake, dog, bird
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResultsPage;
