import { ReactNode } from "react";

import MenuIcon from "../../assets/icons/menu.svg?react";
import UserIcon from "../../assets/icons/user.jpg";
import styles from "./Header.module.scss";

interface HeaderProps {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

const Header = ({ leftContent, rightContent }: HeaderProps) => (
  <header className={styles.header}>
    <nav className={styles.header__nav}>
      <div className={styles.header__left}>
        {leftContent ? (
          leftContent
        ) : (
          <>
            <div className={styles.header__title}>Agile Content</div>
            <div className={styles.header__subtitle}>Frontend test</div>
          </>
        )}
      </div>
      <div className={styles.header__right}>
        {rightContent ? (
          rightContent
        ) : (
          <>
            <div className={styles.header__menu}>
              <MenuIcon width="24" height="24" data-testid="menu-icon" />
            </div>
            <div className={styles.header__user}>
              <img src={UserIcon} alt="User Icon" />
            </div>
          </>
        )}
      </div>
    </nav>
  </header>
);

export default Header;
