import React from 'react';
import Button from '../../shared/components/Button';
import styles from './CurrentProduct.css';

const CurrentProduct = (props) => (
  <article className={styles.container}>
    <div className={styles.image} />
    <footer className={styles.footer}>
      <div className={styles.product}>
        <span className={styles.name}>Orange Juice</span>
        <span className={styles.price}>RD$120</span>
      </div>
      <Button>Add</Button>
    </footer>
  </article>
);

export default CurrentProduct;
