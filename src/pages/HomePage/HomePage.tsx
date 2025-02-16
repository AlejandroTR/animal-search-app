import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

import SearchBar from "../../components/SearchBar/SearchBar.tsx";

import googleLogo from "/google.svg";
import styles from "./HomePage.module.scss";

const HomePage = () => (
  <div className={styles.homePage}>
    <Header />
    <div className={styles.homePage__logo}>
      <img src={googleLogo} alt="Google logo" />
    </div>
    <SearchBar />
    <Footer />
  </div>
);

export default HomePage;
