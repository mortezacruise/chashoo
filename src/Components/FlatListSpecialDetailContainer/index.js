import React, { Component } from "react";
import {
  MOST_DISCOUNT,
  MOST_SOLD,
  NEWEST,
  POPULAR
} from "../../Common/Strings";
import MostDiscountContainer from "../../Screens/Containers/MostDiscountContainer";
import MostSoldContainer from "../../Screens/Containers/MostSoldContainer";
import NewstDiscountContainer from "../../Screens/Containers/NewestDiscountContainer";
import PopularDiscountContainer from "../../Screens/Containers/PupolarSoldContainer";
import { View, Text } from "react-native";

export default class FlatListSpecialDetailContainer extends Component {
  render() {
    switch (this.props.selectedItem.name) {
      case MOST_DISCOUNT:
        return <MostDiscountContainer navigation1={this.props.navigattion} />;
      case POPULAR:
        return (
          <PopularDiscountContainer navigation1={this.props.navigattion} />
        );
      case MOST_SOLD:
        return <MostSoldContainer navigation1={this.props.navigattion} />;
      case NEWEST:
        return <NewstDiscountContainer navigation1={this.props.navigattion} />;
      default:
        return (
          <View>
            <Text>salam</Text>
          </View>
        );
    }
  }
}
