import React, { useEffect, useState } from "react";
import { Image, View, Linking, BackHandler, Text } from "react-native";
import {
  bgGray,
  Flex,
  s48,
  center,
  centerAll,
  fBlack,
  h3,
  iranSans,
  h4,
  bgWhite,
  el1,
  fRow,
  spaceB,
  pad16,
  r8,
  spaceA,
  mV16,
  bgGreen300
} from "../../Values/Theme";
import { screenWidth } from "../../Values/Constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const AboutUs = ({ navigation }) => {
  const _onTelegramClicked = () => {
    Linking.openURL("https://t.me/kampon_ir");
  };
  const _onInstagramClicked = () => {
    Linking.openURL("https://www.instagram.com/kampon.ir");
  };
  const _onWebsiteClicked = () => {
    Linking.openURL("https://www.kampon.ir");
  };
  handleBackPress = () => {
    navigation.navigate("Home");
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }, [navigation]);
  return (
    <View style={[Flex, bgGray, center]}>
      <Image
        style={[
          { marginTop: screenWidth / 3, width: screenWidth / 2, height: screenWidth / 2 }
        ]}
        source={require("../../Assets/Images/logo_kampon.png")}
      />
      <Text style={[fBlack, h3, iranSans]}> بستر تخفیف گروهی در رشت</Text>
      <Text style={[iranSans, h4, fBlack]}>با کمپُن خرجتُ کم کن</Text>

      <View
        style={[bgWhite, pad16, mV16, r8, el1, centerAll, { width: screenWidth / 1.3 }]}
      >
        <Text style={[iranSans, h3, fBlack]}> راه های ارتباطی با ما</Text>
        <View style={[fRow, spaceA, mV16, { width: "100%" }]}>
          <TouchableOpacity onPress={_onTelegramClicked}>
            <Image
              style={[s48]}
              source={require("../../Assets/Images/ic_telegram.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={_onInstagramClicked}>
            <Image
              style={[s48]}
              source={require("../../Assets/Images/ic_instagram.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={_onWebsiteClicked}>
            <Image style={[s48]} source={require("../../Assets/Images/ic_web.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[centerAll, mV16]}>
        <Text style={[iranSans, h3]}> تلفن تماس:09357520101 </Text>
      </View>
    </View>
  );
};

export default AboutUs;
