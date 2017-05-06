import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../../shared/components/Button';
import styles from './CurrentProduct.css';
import * as actions from '../../actions';

class CurrentProduct extends Component {
  constructor(props) {
    super(props)
    this.addProductToOrder = props.actions.addProductToOrder.bind(this)
  }

  render() {
    const { currentProduct, actions } = this.props;
    return (
      <article className={styles.container}>
        <div className={styles.image} />
        <footer className={styles.footer}>
          <div className={styles.product}>
            <span className={styles.name}>{currentProduct.get('name')}</span>
            <span className={styles.price}>RD${currentProduct.get('price')}</span>
          </div>
          <Button
            onClick={() => this.addProductToOrder(currentProduct)}
          >
            Add
          </Button>
        </footer>
      </article>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentProduct: state.get('currentProduct')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentProduct);
