import React, { Component } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import styles from "./Styles";
import ChangeQuantity from "../Cart/ChangeQuantity";
import PersianText from "../../../Common/Persian/PersianText";
import {
  iranSans,
  bgWhite,
  h2,
  fRed,
  fBlack,
  mV16,
  h4,
  mH8,
  centerAll,
  pad8,
  fRow,
  r8,
  fGreen,
  fGray
} from "../../../Values/Theme";
// const irAmount = require("iramount");

export default class CartItem extends Component {
  onIncreaseItem = () => {
    this.props.onIncreaseItem(this.props.data.item.cartDiscount._id);
  };
  onDecreaseItem = () => {
    this.props.onDecreaseItem(this.props.data.item.cartDiscount._id);
  };

  render() {
    const { disTitle, disNewPrice } = this.props.data.item.cartDiscount;
    const imageUrl = this.props.data.item.cartDiscount.disImages[1];
    newPrice = disNewPrice;
    return (
      <View style={[centerAll, pad8]}>
        <View style={[centerAll, fRow, bgWhite, r8, pad8]}>
          <Image source={{ uri: imageUrl }} style={styles.CartImage} />
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Text style={[iranSans, h4, fBlack, mH8]}>{disTitle}</Text>
            <Text style={[iranSans, h4, fGray, mH8]}>{newPrice} تومان</Text>
          </View>
          <ChangeQuantity
            count={this.props.data.item.count}
            onIncreaseItem={this.onIncreaseItem}
            onDecreaseItem={this.onDecreaseItem}
          />
        </View>
      </View>
    );
  }
}
