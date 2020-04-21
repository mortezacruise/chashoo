import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  bgGray,
  fRow,
  iranSans,
  h5,
  height13,
  fMainColor,
  fBlack,
  halfScrenw,
  centerAll,
  bBWidth,
  Flex
} from "../../../../Values/Theme";
import {
  ACTIVE,
  ACTIVE_KAMPON,
  DEACTIVE_KAMPON,
  SOLD_KAMPON,
  UN_SOLD_KAMPON,
  FEATUR,
  TERM_OF_USE,
  ACTIVE_KAMPONS,
  USED_KAMPONS
} from "../../../../Values/Strings";
import { bgBlue } from "colorette";
export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
  }
  componentDidMount() {
    this._ActivePressed();
  }

  _ActivePressed = () => {
    this.setState({ isActive: true });
    this.props.onTabClick(true);
  };
  _DeActivePressed = () => {
    this.setState({ isActive: false });

    this.props.onTabClick(false);
  };

  render() {
    const { isActive } = this.state;

    return (
      <View style={[height13]}>
        <View style={[fRow]}>
          <TouchableOpacity
            style={[halfScrenw, bgGray, height13, centerAll, isActive ? bBWidth : null]}
            onPress={this._ActivePressed}
          >
            <Text style={[iranSans, h5, isActive ? fMainColor : fBlack]}>
              {this.props.isActive ? ACTIVE_KAMPONS : SOLD_KAMPON}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[halfScrenw, bgGray, height13, centerAll, isActive ? null : bBWidth]}
            onPress={this._DeActivePressed}
          >
            <Text style={[iranSans, h5, isActive ? fBlack : fMainColor]}>
              {this.props.isActive ? USED_KAMPONS : UN_SOLD_KAMPON}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
{
  // <View style={[Flex]}>
  //   <View style={[fRow, spaceA, bgGray, height13, center]}>
  //     <TouchableOpacity onPress={this._ActivePressed}>
  //       <Text style={[iranSans, h5, isActive ? fMainColor : fBlack]}> کمپ های فعال</Text>
  //     </TouchableOpacity>
  //     <TouchableOpacity onPress={this._DeActivePressed}>
  //       <Text style={[iranSans, h5, isActive ? fBlack : fMainColor]}> کمپ های استفاده شده</Text>
  //     </TouchableOpacity>
  //   </View>
  // </View>;
}
