import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { iranSans, h5, Tac, h4, pad8, Flex, bgRed, bgGray } from "../../../Values/Theme";
import Tabs from "./Tabs";
import TacbContent from "./TacbContent";

export default class KamponTabScreen extends Component {
  constructor() {
    super();
    this.state = {
      isActive: true
    };
  }
  _onTabclick = isActive => {
    this.setState({ isActive });
  };
  render() {
    return (
      <View style={[Flex]}>
        <Tabs isActive={true} onTabClick={this._onTabclick} />
        <TacbContent navigate={this.props.navigate} isActive={this.state.isActive} />
      </View>
    );
  }
}
