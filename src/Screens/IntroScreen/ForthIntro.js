import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
import { PINK_PASTEL } from "../../Values/Colors";
import { screenWidth } from "../../Values/Constants";
import { INTRO_FORTH_DESCRIPTION, INTRO_FORTH_TITLE } from "../../Values/Strings";
import { centerAll, Flex, fWhite, h1, h4, iranSans } from "../../Values/Theme";

export default class ForthIntro extends Component {
  render() {
    return (
      <View style={[centerAll, Flex, { backgroundColor: PINK_PASTEL }]}>
        <ImageBackground
          style={[
            centerAll,
            {
              width: Dimensions.get("screen").width / 1.3,
              height: Dimensions.get("screen").width / 1.3
            }
          ]}
          source={require("../../Assets/Images/heart.png")}
        >
          <Image
            style={{ width: screenWidth / 3, height: screenWidth / 3 }}
            source={require("../../Assets/Images/ic_logo.png")}
          />
        </ImageBackground>
        <Text style={[h1, fWhite, iranSans]}>{INTRO_FORTH_TITLE} </Text>
        <Text style={[h4, fWhite, iranSans]}>{INTRO_FORTH_DESCRIPTION}</Text>
      </View>
    );
  }
}
