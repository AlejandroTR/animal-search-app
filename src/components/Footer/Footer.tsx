import { FunctionComponent } from "react";

import styles from "./Footer.module.scss";

const Footer: FunctionComponent<any> = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__left}>
      <span>© Google 2021</span>
    </div>
    <div className={styles.footer__right}>
      <span>Version: 0.1.0</span>
    </div>
  </footer>
);

export default Footer;
