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
    this.getPreviousProducts = this.props.actions.getPreviousProducts.bind(this)
    this.getNextProducts = this.props.actions.getNextProducts.bind(this)
  }

  render() {
    const { productList } = this.props;

    return (
      <div className={styles.container}>
        <ProductList
          products={productList.get('visibleProducts')}
          setCurrentProduct={this.setCurrentProduct}
        />
        <ProductPagination
          page={productList.get('page')}
          getPreviousProducts={this.getPreviousProducts}
          getNextProducts={this.getNextProducts}
        />
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
