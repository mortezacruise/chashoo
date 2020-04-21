import React, { Component } from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
import { CYAN } from "../../Values/Colors";
import { screenWidth } from "../../Values/Constants";
import { INTRO_SECEND_DESCRIPTION, INTRO_SECOND_TITLE } from "../../Values/Strings";
import { centerAll, Flex, fWhite, h1, h4, iranSans, Tac } from "../../Values/Theme";

export default class SecondIntro extends Component {
  render() {
    return (
      <View style={[centerAll, Flex, { backgroundColor: CYAN }]}>
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
            source={require("../../Assets/Images/ic_special.png")}
          />
        </ImageBackground>
        <Text style={[h1, fWhite, iranSans]}>{INTRO_SECOND_TITLE} </Text>
        <Text style={[h4, fWhite, iranSans, { width: screenWidth / 1.2 }, Tac]}>
          {INTRO_SECEND_DESCRIPTION}
        </Text>
      </View>
    );
  }
}
