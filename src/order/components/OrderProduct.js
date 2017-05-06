import React from 'react';
import styles from './OrderProduct.css';

const OrderProduct = ({ product, requested, removeProductOrder }) => (
  <article className={styles.container}>
    <span>{product.get('name')}</span>
    <span>RD${product.get('price')}</span>
    {requested ?
      null :
      <span onClick={() => removeProductOrder(product)}>X</span>
    }

  </article>
);

export default OrderProduct;
