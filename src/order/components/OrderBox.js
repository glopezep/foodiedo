import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import OrderProductList from './OrderProductList';
import TotalPrice from './TotalPrice';
import Button from '../../shared/components/Button';
import * as actions from '../../actions';

class OrderBox extends Component {
  constructor(props) {
    super(props)
    this.removeProductOrder = this.props.actions.removeProductOrder.bind(this);
  }
  render() {
    return (
      <div>
        <OrderProductList
          products={this.props.order.get('entities')}
          removeProductOrder={this.removeProductOrder}
        />
        <TotalPrice totalPrice={this.props.order.get('totalPrice')} />
        <Link to="/waiting">
          <Button>Order</Button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    order: state.get('order')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderBox);
