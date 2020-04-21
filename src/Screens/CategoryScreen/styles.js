import { StyleSheet, Dimensions } from "react-native";
import { screenHeight, screenWidth } from "../../Values/Constants";
const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A7A7A7",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  logo: {
    width: screenWidth / 2,
    height: screenWidth / 2
  },
  Images: {
    width: SCREEN_WIDTH - 10,
    height: SCREEN_WIDTH / 2.5
  },
  Toch: {
    flex: 1,
    margin: 4,
    alignItems: "center",
    justifyContent: "center"
  }
});
