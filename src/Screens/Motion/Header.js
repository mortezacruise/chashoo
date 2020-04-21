import React, { PureComponent } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { bgMainColor, center, centerAll, fRow, fWhite, h1, iranSans, ofH, pad4, posAbs, r8, Tac, bgRed, fBlack } from "../../Values/Theme";
import { screenHeight, screenWidth } from "../../Values/Constants";

class Header extends PureComponent {
  render() {
    const { name, bg } = this.props;

    return (
      <View style={[fRow, center, r8, ofH]}>
        <View style={[centerAll, r8, bgRed]}>
          <Image
            source={bg}
            style={[{ width: screenWidth, height: screenHeight / 5 }, centerAll, r8, bgMainColor]} />
          <Text style={[iranSans, fWhite, bgMainColor, pad4, r8, h1, Tac, posAbs, { left: 16, bottom: 16 }]}>{name}</Text>
        </View>
      </View>
    );
  }
}

export default Header;
