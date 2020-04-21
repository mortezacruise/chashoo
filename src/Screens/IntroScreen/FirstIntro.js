import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
import { PINK_HOT } from "../../Values/Colors";
import { screenWidth } from "../../Values/Constants";
import { INTRO_FIRST_DESCRIPTION, INTRO_FIRST_TITLE } from "../../Values/Strings";
import { centerAll, Flex, fWhite, h1, h4, iranSans } from "../../Values/Theme";

export default class FirstIntro extends Component {
  render() {
    return (
      <View style={[centerAll, Flex, { backgroundColor: PINK_HOT }]}>
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
            source={require("../../Assets/Images/ic_discount.png")}
          />
        </ImageBackground>
        <Text style={[h1, fWhite, iranSans]}>{INTRO_FIRST_TITLE} </Text>
        <Text style={[h4, fWhite, iranSans]}>{INTRO_FIRST_DESCRIPTION}</Text>
      </View>
    );
  }
}
