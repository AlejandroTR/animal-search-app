import styles from "./Skeleton.module.scss";

const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeleton__item}>
        <div className={styles.skeleton__url}></div>
        <div className={styles.skeleton__title}></div>
        <div className={styles.skeleton__description}></div>
      </div>
      <div className={styles.skeleton__item}>
        <div className={styles.skeleton__url}></div>
        <div className={styles.skeleton__title}></div>
        <div className={styles.skeleton__description}></div>
      </div>
      <div className={styles.skeleton__item}>
        <div className={styles.skeleton__url}></div>
        <div className={styles.skeleton__title}></div>
        <div className={styles.skeleton__description}></div>
      </div>
      <div className={styles.skeleton__item}>
        <div className={styles.skeleton__url}></div>
        <div className={styles.skeleton__title}></div>
        <div className={styles.skeleton__description}></div>
      </div>
    </div>
  );
};

export default Skeleton;
