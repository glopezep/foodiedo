import React from 'react';
import styles from './TotalPrice.css';

const TotalPrice = ({ totalPrice }) => (
  <article className={styles.container}>
    <span className={styles.label}>Total</span>
    <span className={styles.price}>RD${totalPrice}</span>
  </article>
);

export default TotalPrice;
