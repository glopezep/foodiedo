import React from 'react';
import Product from './Product';
import styles from './ProductList.css';

const ProductList = props => (
  <div className={styles.container}>
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </div>
);

export default ProductList;
