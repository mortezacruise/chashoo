import React from "react";
import {
  Image,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  Animated
} from "react-native";
import styles from "./styles";
import { bgRed, r8, m4, ofH, bgMainColor, bgWhite, m8 } from "../../../Values/Theme";

const SlierRow = ({ onPressItem, slider }) => {
  const _onPress = () => {
    onPressItem(slider.sDiscountId);
  };
  const imageAnimated = new Animated.Value(0);
  const onImageLoad = () => {
    console.log("onload");
    Animated.timing(imageAnimated, {
      toValue: 1
    }).start();
  };
  return (
    <TouchableWithoutFeedback onPress={_onPress}>
      <View
        style={[
          bgWhite,
          m4,
          // r8,
          // m4,
          // ofH,
          {
            // width: Dimensions.get("screen").width - 50,
            height: Dimensions.get("screen").height / 4.2
          }
        ]}
      >
        <Animated.Image
          onLoad={onImageLoad}
          // borderRadius={8}
          resizeMode="stretch"
          source={{ uri: slider.sImage }}
          style={[styles.sliderImage, { opacity: imageAnimated }]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SlierRow;
