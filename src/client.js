import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import Pages from './pages/components/Pages';
import reducers from './reducers';

const initialState = fromJS({
  currentProduct: {
    name: 'Orange Juice',
    price: 120
  },
  productList: {
    isFetching: false,
    page: 1,
    visibleProducts: [
      { name: 'Orange Juice', price: 120, selected: true},
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
    ],

    entities: [
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
      { name: 'Orange Juice', price: 120, selected: false},
    ]
  },
  order: {
    requested: false,
    paid: false,
    entities: [
      { name: 'Orange Juice', price: 120, cant: 1},
      { name: 'Orange Juice', price: 120, cant: 1},
      { name: 'Orange Juice', price: 120, cant: 1},
    ],
  }
});

const store = createStore(reducers, initialState, applyMiddleware(
  thunk,
))

render(
  <Provider store={store}>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </Provider>,
  document.querySelector('.App-container')
);
