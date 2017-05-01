import React from 'react';
import ProductList from './ProductList';
import ProductPagination from './ProductPagination';
import styles from './ProductBox.css'

const ProductBox = () => (
  <div className={styles.container}>
    <ProductList />
    <ProductPagination />
  </div>
);

export default ProductBox;
