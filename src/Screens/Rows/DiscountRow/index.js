import React from "react";
import { Animated, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { screenWidth } from "../../../Values/Constants";
import { bgWhite } from "../../../Values/Theme";
import styles from "./styles";
const Colors = ["red", "blue", "black"];
// const irAmount = require("iramount");
const PRICE_TITLE = "قیمت :";
const MODEL_TITLE = "مدل سیمرغ";
const DiscountRow = ({ rows }) => {
  // console.log({ rows });

  _onPress = () => {};
  const Thumnail = rows.image;

  const sstyle = StyleSheet.create({
    imageOverlay: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    },
    container: {
      backgroundColor: "#e1e4e8"
    },
    discountss: {
      width: screenWidth / 2.3,
      height: screenWidth / 2.3
    }
  });

  return (
    <TouchableWithoutFeedback onPress={this._onPress}>
      <View style={styles.discountContainer}>
        <View style={[bgWhite]}>
          <View style={styles.colorsView}>
            {Colors.map((color) => {
              return <View style={[styles.color, { backgroundColor: color }]}></View>;
            })}
          </View>
          <Image source={Thumnail} resizeMode="contain" style={styles.discountImage} />
        </View>
        <View style={styles.Seprator} />
        <View style={styles.Content}>
          <Text style={styles.Text}>{MODEL_TITLE}</Text>
          <Text style={styles.Text}>{PRICE_TITLE} 150000</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DiscountRow;
