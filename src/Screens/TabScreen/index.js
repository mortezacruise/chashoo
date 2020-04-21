import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { iranSans, h5, Tac, h4, pad8, Flex } from "../../Values/Theme";
import Tabs from "./Tabs";
import TacbContent from "./TacbContent";

export default class TabScreen extends Component {
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
        <TacbContent isActive={this.state.isActive} data={this.props.data} />
      </View>
    );
  }
}
