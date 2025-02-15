import { useNavigate } from "react-router-dom";

import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <h1 className={styles.notFound__title}>404 - Página No Encontrada</h1>
      <p className={styles.notFound__message}>
        Lo sentimos, la página que buscas no existe.
      </p>
      <button className={styles.notFound__button} onClick={() => navigate("/")}>
        Volver al Inicio
      </button>
    </div>
  );
};

export default NotFoundPage;
