import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductList from './ProductList';
import ProductPagination from './ProductPagination';
import styles from './ProductBox.css'
import * as actions from '../../actions';

class ProductBox extends Component {
  constructor(props){
    super(props)
    this.setCurrentProduct = this.props.actions.setCurrentProduct.bind(this);
  }
  render() {
    return (
      <div className={styles.container}>
        <ProductList
          products={this.props.productList.get('visibleProducts')}
          setCurrentProduct={this.setCurrentProduct}
        />
        <ProductPagination />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    productList: state.get('productList'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
