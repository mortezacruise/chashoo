import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
import { ORANGE_CARROT } from "../../Values/Colors";
import { screenWidth } from "../../Values/Constants";
import { INTRO_THIRTH_DESCRIPTION, INTRO_THIRTH_TITLE } from "../../Values/Strings";
import { centerAll, Flex, fWhite, h1, h4, iranSans, Tac } from "../../Values/Theme";

export default class ThirdIntro extends Component {
  render() {
    return (
      <View style={[centerAll, Flex, { backgroundColor: ORANGE_CARROT }]}>
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
            source={require("../../Assets/Images/ic_buy.png")}
          />
        </ImageBackground>
        <Text style={[h1, fWhite, iranSans]}>{INTRO_THIRTH_TITLE} </Text>
        <Text style={[h4, fWhite, iranSans, { width: screenWidth / 1.2 }, Tac]}>
          {INTRO_THIRTH_DESCRIPTION}
        </Text>
      </View>
    );
  }
}
