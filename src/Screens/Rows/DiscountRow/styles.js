import { StyleSheet, Dimensions } from "react-native";
import Constants from "../../../Values/Constant";
import { screenWidth } from "../../../Values/Constants";
import { iranSans } from "../../../Values/Theme";
import { MAIN_COLOR } from "../../../Values/Colors";

const style = StyleSheet.create({
  discountContainer: {
    position: "relative",
    marginBottom: 8,
    marginHorizontal: 4,
    width: "48%",
    // borderRadius: 5,
    backgroundColor: "white",
    elevation: 1,
    alignItems: "center"
  },
  imgPlaceHolder: {
    width: "100%",
    height: screenWidth / 2.3
  },
  discountImage: {
    width: screenWidth / 2.3,
    height: screenWidth / 2.3
  },
  Content: {
    width: "100%"
  },
  Text: {
    ...iranSans,
    marginRight: 16
  },
  Seprator: {
    width: "90%",
    borderWidth: 2,
    borderColor: MAIN_COLOR
  },
  colorsView: {
    position: "absolute",
    top: 5,
    left: 5
  },
  color: {
    width: 10,
    height: 10,
    margin: 2,
    borderRadius: 100
  }
});

export default style;
