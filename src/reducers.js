import { combineReducers } from 'redux-immutable';
import { Map as map, List as list } from 'immutable';
import {
  SET_CURRENT_PRODUCT,
  GET_PREVIOUS_PRODUCTS,
  GET_NEXT_PRODUCTS,
  RECEIVE_NEXT_PRODUCTS,
  ADD_PRODUCT_TO_ORDER,
  REMOVE_PRODUCT_OF_ORDER,
  REQUEST_ORDER,
} from './actions';

function currentProduct(state = map(), action) {
  switch (action.type) {
    case SET_CURRENT_PRODUCT:
      return map(action.payload)
    default:
      return state
  }
}

function productList(state = map(), action) {
  switch (action.type) {
    case GET_PREVIOUS_PRODUCTS:
      const end = state.get('page') * 6;
      const start = (end - 6) - 1;
      return map({
        isFetching: false,
        page: state.get('page') - 1,
        visibleProducts: state.get('entities').slice(start, end),
        entities: state.get('entities')
      })
    case GET_NEXT_PRODUCTS:
      return map({
        isFetching: true,
        page: state.get('page'),
        visibleProducts: state.get('visibleProducts'),
        entities: state.get('entities')
      })
    case RECEIVE_NEXT_PRODUCTS:
      return map({
        isFetching: false,
        page: state.get('page') + 1,
        visibleProducts: action.payload,
        entities: state.get('entities').concat(action.payload)
      })
    default:
      return state
  }
}

function order(state = map(), action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_ORDER:
      console.log(action.payload.toJS());
      return map({
        requested: false,
        paid: false,
        entities: state.get('entities').push(action.payload),
        totalPrice: state.get('totalPrice') + action.payload.get('price')
      })
    case REMOVE_PRODUCT_OF_ORDER:
      return map({
        requested: false,
        paid: false,
        entities: state.get('entities').filter(product => {
          return product.get('id') !== action.payload.get('id')
        }),
        totalPrice: state.get('totalPrice') - action.payload.get('price')

      })
    case REQUEST_ORDER:
      return map({
        requested: true,
        paid: false,
        entities: state.get('entities'),
        totalPrice: state.get('totalPrice'),
      })
    default:
      return state
  }
}

export default combineReducers({
  currentProduct,
  productList,
  order,
});
