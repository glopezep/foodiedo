import React from 'react';
import Button from '../../shared/components/Button';
import styles from './ProductPagination.css'

const ProductPagination = ({ page, getPreviousProducts, getNextProducts }) => (
  <div className={styles.container}>
    <Button onClick={getPreviousProducts}>Back</Button>
    <span>{page}</span>
    <Button onClick={getNextProducts}>Next</Button>
  </div>
);

export default ProductPagination;
