import { FlatList } from "react-native";
import React, { Component } from "react";
import SliderRow from "../../Rows/DiscountSliderRow";

export default class DiscountSliderList extends Component {
  render() {
    return (
      <FlatList
        horizontal={true}
        data={this.props.slides}
        showsHorizontalScrollIndicator={false}
        renderItem={data => <SliderRow slider={data.item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}
