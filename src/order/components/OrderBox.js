import React from 'react';
import OrderProductList from './OrderProductList';
import Button from '../../shared/components/Button';

const OrderBox = (props) => (
  <div>
    <OrderProductList />
    <Button>Order</Button>
  </div>
);

export default OrderBox;
