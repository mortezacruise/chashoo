import React from "react";
import { Text, View } from "react-native";
import { BarIndicator } from "react-native-indicators";
import { centerAll, Flex, h2, iranSans, posAbs } from "../../Values/Theme";
import { MAIN_COLOR } from "../../Values/Colors";
import { screenHeight } from "../../Values/Constants";

export const Indicator = ({ color = MAIN_COLOR, size = 30, count = 8 }) => {
  return (
    <View style={[centerAll, Flex]}>
      <BarIndicator color={color} size={size} count={count} />
    </View>
  );
};
