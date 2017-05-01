import React from 'react';
import styles from './Product.css'

const Product = props => (
  <article className={styles.container}>
    <span>Orange Juice</span>
    <span>RD$120</span>
  </article>
);

export default Product;
