import MenuIcon from "../../assets/icons/menu.svg?react";
import UserIcon from "../../assets/icons/user.jpg";
import styles from "./Header.module.scss";

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.header__nav}>
      <div className={styles.header__title}>Agile Content</div>
      <div className={styles.header__subtitle}>Frontend test</div>
      <div className={styles.header__icons}>
        <div className={styles.header__menu}>
          <MenuIcon width="24" height="24" />
        </div>
        <div className={styles.header__user}>
          <img src={UserIcon} alt="User Icon" />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
