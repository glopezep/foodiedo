import React from 'react';
import OrderProduct from './OrderProduct';

const OrderProductList = ({ products, requested, removeProductOrder }) => (
  <div>
    {products.map(product => {
      return <OrderProduct
        key={product.get('id')}
        product={product}
        requested={requested}
        removeProductOrder={removeProductOrder}
      />
    })}
  </div>
);

export default OrderProductList;
