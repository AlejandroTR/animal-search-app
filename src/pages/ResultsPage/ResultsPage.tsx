import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Animal } from "../../utils/generateAnimals.ts";
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

  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    if (query) {
      dispatch(getAnimals(query));
    }
  }, [query, dispatch]);

  useEffect(() => {
    if (selectedAnimal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedAnimal]);

  const handleAnimalClick = (animal: any) => {
    setSelectedAnimal(animal);
  };

  const handleClosePreview = () => {
    setSelectedAnimal(null);
  };

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
            ) : (
              <RenderResults
                query={query}
                animals={animals}
                onAnimalClick={handleAnimalClick}
              />
            )}
          </div>
          {selectedAnimal && (
            <div
              className={styles.resultsSearch__previewOverlay}
              onClick={handleClosePreview}
            >
              <div
                className={styles.resultsSearch__preview}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.resultsSearch__box}>
                  <img src={selectedAnimal.image} alt={selectedAnimal.title} />
                  <span className={styles.resultsSearch__previewUrl}>
                    {selectedAnimal.url}
                  </span>
                  <h2 className={styles.resultsSearch__previewTitle}>
                    {selectedAnimal.title}
                  </h2>
                  <span className={styles.resultsSearch__previewDescription}>
                    {selectedAnimal.description}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

interface RenderResultsProps {
  query: string;
  animals: Array<Animal>;
  onAnimalClick: (animal: Animal) => void;
}

const RenderResults = ({
  query,
  animals,
  onAnimalClick,
}: RenderResultsProps) => {
  if (query && animals.length > 0) {
    return (
      <ul>
        {animals.map((animal) => (
          <li
            key={animal.id}
            className={styles.resultsSearch__item}
            onClick={() => onAnimalClick(animal)}
          >
            <span className={styles.resultsSearch__url}>{animal.url}</span>
            <h2 className={styles.resultsSearch__title}>{animal.title}</h2>
            <span className={styles.resultsSearch__description}>
              {animal.description}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={styles.resultsSearch__empty}>
      {query && (
        <p>
          No results found for{" "}
          <span className={styles.resultsSearch__highlight}>'{query}'</span>
        </p>
      )}
      <p>
        Try looking for:{" "}
        <span className={styles.resultsSearch__highlight}>
          insect, fish, horse, crocodilia, bear, cetacean, cow, lion, rabbit,
          cat, snake, dog, bird
        </span>
      </p>
    </div>
  );
};

export default ResultsPage;
