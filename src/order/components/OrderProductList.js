import React from 'react';
import OrderProduct from './OrderProduct';

const OrderProductList = ({ products, removeProductOrder }) => (
  <div>
    {products.map(product => {
      return <OrderProduct
        key={product.get('id')}
        product={product}
        removeProductOrder={removeProductOrder}
      />
    })}
  </div>
);

export default OrderProductList;
