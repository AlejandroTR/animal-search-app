import Header from "../../components/Header/Header.tsx";
import Footer from "../../components/Footer/Footer.tsx";

import styles from "./HomePage.module.scss";
import googleLogo from "/google.svg";

const HomePage = () => (
  <div className={styles.homePage}>
    <Header />
    <div className={styles.homePage__logo}>
      <img src={googleLogo} alt="Vite logo" />
    </div>
    <Footer />
  </div>
);

export default HomePage;
