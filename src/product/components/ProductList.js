import React from 'react';
import Product from './Product';
import styles from './ProductList.css';

const ProductList = ({ products, setCurrentProduct }) => (
  <div className={styles.container}>
    {products.map(product => (
     <Product
        key={product.get('id')}
        product={product}
        setCurrentProduct={setCurrentProduct}
      />
    ))}
  </div>
);

export default ProductList;
