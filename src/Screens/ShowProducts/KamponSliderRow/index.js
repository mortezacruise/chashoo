import React from "react";
import { Image, View } from "react-native";
import { r8, m8, m4, ofH } from "../../../Values/Theme";
import { screenWidth, screenHeight } from "../../../Values/Constants";

const KamponSliderRow = ({ slider }) => {
  return (
    <View
      style={[
        r8,
        m4,
        ofH,
        {
          width: screenWidth - 50,
          height: screenHeight / 4
        }
      ]}
    >
      <Image
        resizeMode="contain"
        style={[{ width: "100%", height: "100%" }]}
        source={{ uri: slider }}
      />
    </View>
  );
};

export default KamponSliderRow;
