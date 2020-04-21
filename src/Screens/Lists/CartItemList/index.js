import React from "react";
import { FlatList, View } from "react-native";
import CartItem from "../../CartScreen/Cart/";

export default class CartItemList extends React.Component {
  onIncreaseItem = id => {
    this.props.onIncreaseItem(id);
  };
  onDecreaseItem = id => {
    this.props.onDecreaseItem(id);
  };

  _renderCartItem = item => {
    return (
      <CartItem
        data={item}
        onIncreaseItem={this.onIncreaseItem}
        onDecreaseItem={this.onDecreaseItem}
      />
    );
  };

  render() {
    return (
      <View style={{ marginBottom: 95 }}>
        <FlatList
          data={this.props.items}
          renderItem={this._renderCartItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
