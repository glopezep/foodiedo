import React from 'react';
import styles from './Product.css'

const Product = ({ product, setCurrentProduct }) => (
  <article className={styles.container} onClick={() => setCurrentProduct(product)}>
    <span>{product.get('name')}</span>
    <span>RD${product.get('price')}</span>
  </article>
);

export default Product;
