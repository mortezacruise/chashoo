import React, { Component } from "react";
import { View } from "react-native";
import PersianText from "../../../../Common/Persian/PersianText";
import styles from "./styles";
import { bgGray, iranSans } from "../../../../Values/Theme";
export default class CircleStep extends Component {
  render() {
    return (
      <View style={[{ flexDirection: "row", alignItems: "center", justifyContent: "center", margin: 16 }, bgGray]}>
        <View style={this.props.step === 0 ? styles.activeCircle : styles.inActiveCircle}>
          <PersianText style={this.props.step === 0 ? [{ color: "white", fontSize: 16 }, iranSans] : [iranSans, { color: "black", fontSize: 16 }]}>1</PersianText>
        </View>
        <View style={styles.activeBar} />
        <View style={this.props.step === 1 ? styles.activeCircle : styles.inActiveCircle}>
          <PersianText style={this.props.step === 1 ? [{ color: "white", fontSize: 16 }, iranSans] : [{ color: "black", fontSize: 16 }, iranSans]}>2</PersianText>
        </View>
        <View style={styles.activeBar} />
        <View style={this.props.step === 2 ? styles.activeCircle : styles.inActiveCircle}>
          <PersianText style={this.props.step === 2 ? [{ color: "white", fontSize: 16 }, iranSans] : [{ color: "black", fontSize: 16 }, iranSans]}>3</PersianText>
        </View>
      </View>
    );
  }
}
