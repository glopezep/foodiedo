import React from 'react';
import Button from '../../shared/components/Button';
import styles from './ProductPagination.css'

const ProductPagination = (props) => (
  <div className={styles.container}>
    <Button>Back</Button>
    <Button>Next</Button>
  </div>
);

export default ProductPagination;
