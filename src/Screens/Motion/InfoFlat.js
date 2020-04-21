import React, { Component } from "react";
import DiscountRow from "../../Screens/Rows/DiscountRow";
import {
  ScrollView,
  ListView,
  FlatList,
  StyleSheet,
  StatusBar,
  View,
  Text,
  SectionList
} from "react-native";

export default class InfoFlat extends Component {
  _discountClick = (id, cat) => {
    this.props.navigation1.navigate("Discount", { disId: id, disCategory: cat });
  };

  _renderArticle(item) {
    return <DiscountRow rows={item} discountClick={this._discountClick} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.Data}
        renderItem={({ item }) => this._renderArticle(item)}
        keyExtractor={(item, index) => index}
        numColumns={2}
      />
    );
  }
}
