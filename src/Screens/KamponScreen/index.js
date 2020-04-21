import React, { Component } from "react";
import { BackHandler, Text, View } from "react-native";
import { BOUGHT_KAMPONS } from "../../Values/Strings";
import { Flex, h2, iranSans, mV16, Tac } from "../../Values/Theme";
import KamponTabScreen from "./KamponTabScreen";

export default class KamponScreen extends Component {
  constructor() {
    super();
    this.handleBackPress = this.handleBackPress;
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Home");
    return true;
  };
  render() {
    return (
      <View style={[Flex]}>
        <Text style={[iranSans, h2, Tac, mV16]}>{BOUGHT_KAMPONS}</Text>
        <KamponTabScreen navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}
