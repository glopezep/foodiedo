export const ADD_PRODUCT_TO_ORDER = 'ADD_PRODUCT_TO_ORDER';
export function addProductToOrder(product) {
  return {
    type: ADD_PRODUCT_TO_ORDER,
    padyload: product,
  }
}

export const REMOVE_PRODUCT_OF_ORDER = 'REMOVE_PRODUCT_OF_ORDER';
export function removeProductOrder(product) {
  return {
    type: REMOVE_PRODUCT_OF_ORDER,
    padyload: product,
  }
}

export const REQUEST_ORDER = 'REQUEST_ORDER';
export function requestOrder() {
  return {
    type: REQUEST_ORDER
  }
}

export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';
export function setCurrentProduct(product) {
  return {
    type: SET_CURRENT_PRODUCT,
    payload: product,
  }
}

export const GET_PREVIOUS_PRODUCTS = 'GET_PREVIOUS_PRODUCTS';
export function getPreviousProduct() {
  return {
    type: GET_PREVIOUS_PRODUCTS,
  }
}

export const GET_NEXT_PRODUCTS = 'GET_NEXT_PRODUCTS';
export function getNextProducts() {
  return {
    type: GET_NEXT_PRODUCTS,
  }
}

export const RECEIVE_NEXT_PRODUCTS = 'RECEIVE_NEXT_PRODUCTS';
export function receiveNextProducts(products) {
  return {
    type: RECEIVE_NEXT_PRODUCTS,
    payload: products,
  }
}

export const RECEIVE_NEXT_PRODUCTS_FAILURE = 'RECEIVE_NEXT_PRODUCTS_FAILURE';
export function receiveNextProductsFailure(err) {
  return {
    type: RECEIVE_NEXT_PRODUCTS_FAILURE,
    payload: err,
    error: true,
  }
}

export function fetchProducts() {
  return async dispatch => {
    try {
      dispatch(getNextProducts())
      const response = await fetch('/api');
      const products = await response.json();
      dispatch(receiveNectProducts(products))
    } catch (e) {
      dispatch(receiveNextProductsFailure(e));
    }
  }
}
