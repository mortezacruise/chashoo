import React, { Component } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default class DiscountSliderRow extends React.Component {
 
  
  render() {
    return (
      <Image
        source={{ uri: this.props.slider, cache: "only-if-cached" }}
        style={styles.sliderImage}
      />
    );
  }
}
