import { Dimensions, StyleSheet } from "react-native";

export default (style = StyleSheet.create({
  sliderImage: {
    width: Dimensions.get("screen").width - 50,
    height: Dimensions.get("screen").height / 4,
    borderRadius: 8,
    margin: 8
  }
}));
