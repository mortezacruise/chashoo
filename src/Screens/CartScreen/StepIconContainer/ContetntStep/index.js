import React, { Component } from "react";
import CartItemListContainer from "../../../Containers/CartItemListContainer";
export default class ContentStep extends Component {
  constructor(props) {
    super(props);
    this.state = { counts: 0, total: 0 };
  }
  _Cart = (id, counts, total) => {
    this.setState({ counts, total });
    this.props.active(id);
  };
  render() {
    // switch (this.props.step) {
    //   case 0:
    return (
      <CartItemListContainer
        navigation={this.props.navigation}
        cartItem={this._Cart}
      />
    );
    //     );
    //   case 1:
    //   // return <Payment counts={this.state.counts} total={this.state.total} />;
    //   case 2:
    //   // return <Ticket memberId={this.props.memberId} />;
    // }
  }
}
