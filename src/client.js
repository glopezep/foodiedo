import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { fromJS, Iterable } from 'immutable';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import Pages from './pages/components/Pages';
import reducers from './reducers';

const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) return state.toJS();
  else return state;
};

const logger = createLogger({
  stateTransformer,
});

const initialState = fromJS({
  currentProduct: {
    id: 1,
    name: 'Orange Juice',
    price: 120
  },
  productList: {
    isFetching: false,
    page: 1,
    visibleProducts: [
      { id: 1, name: 'Orange Juice 1', price: 120, selected: true},
      { id: 2, name: 'Orange Juice 2', price: 120, selected: false},
      { id: 3, name: 'Orange Juice 3', price: 120, selected: false},
      { id: 4, name: 'Orange Juice 4', price: 120, selected: false},
      { id: 5, name: 'Orange Juice 5', price: 120, selected: false},
      { id: 6, name: 'Orange Juice 6', price: 120, selected: false},
    ],

    entities: [
      { id: 1, name: 'Orange Juice 1', price: 120, selected: false},
      { id: 2, name: 'Orange Juice 2', price: 120, selected: false},
      { id: 3, name: 'Orange Juice 3', price: 120, selected: false},
      { id: 4, name: 'Orange Juice 4', price: 120, selected: false},
      { id: 5, name: 'Orange Juice 5', price: 120, selected: false},
      { id: 6, name: 'Orange Juice 6', price: 120, selected: false},
      { id: 7, name: 'Orange Juice 7', price: 120, selected: false},
      { id: 8, name: 'Orange Juice 8', price: 120, selected: false},
      { id: 9, name: 'Orange Juice 9', price: 120, selected: false},
      { id: 10, name: 'Orange Juice 10', price: 120, selected: false},
    ]
  },
  order: {
    requested: false,
    paid: false,
    entities: [
      { id: 1, name: 'Orange Juice', price: 120, cant: 1},
      { id: 2, name: 'Lemon Juice', price: 120, cant: 1},
      { id: 3, name: 'Apple Juice', price: 120, cant: 1},
    ],
    totalPrice: 360,
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
