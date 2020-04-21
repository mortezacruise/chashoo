import { Dimensions, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  containerView: {
    backgroundColor: "#eee",
    height: Dimensions.get("screen").height,
    padding: 16,

    alignItems: "center"
  },
  Trims: {
    padding: 8,
    flexDirection: "row",
    marginTop: 16,
    height: Dimensions.get("screen").height / 8,
    width: Dimensions.get("screen").width / 1.2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between"
  },
  Images: {
    width: 70,
    height: Dimensions.get("screen").height / 9,

    borderRadius: 15
  }
});
