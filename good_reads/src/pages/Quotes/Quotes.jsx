import React from "react";
import styles from "./Quotes.module.css";
const Quotes = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.cont__left}>
        <p>Popular Quotes</p>
      </div>
      <div className={styles.cont__right}></div>
    </div>
  );
};

export { Quotes };
