import { FunctionComponent } from "react";

import styles from "./Header.module.scss";
import MenuIcon from "../../assets/icons/menu.svg";
import UserIcon from "../../assets/icons/user.jpg";

const Header: FunctionComponent<any> = () => (
  <header className={styles.header}>
    <nav className={styles.header__nav}>
      <div className={styles.header__title}>Agile Content</div>
      <div className={styles.header__subtitle}>Frontend test</div>
      <div className={styles.header__icons}>
        <div className={styles.header__menu}>
          <img src={MenuIcon} alt="Menu Icon" />
        </div>
        <div className={styles.header__user}>
          <img src={UserIcon} alt="User Icon" />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
