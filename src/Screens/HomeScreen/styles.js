import { StyleSheet, Dimensions } from "react-native";
import { MAIN_COLOR, PINK_BRIGHT, CYAN_LIGHT, PINK_PASTEL, CYAN } from "../../Values/Colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CYAN
    // height: 500
  },
  imageContent: {
    flexDirection: "row",
    margin: 16
  },
  movieContent: {
    margin: 8,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  topSlider: {
    marginTop: 8,
    width: Dimensions.get("screen").width - 50,
    height: Dimensions.get("screen").height / 4.2,
    alignSelf: "center"
  },
  mcontent: {
    marginTop: 8,
    marginBottom: 8
  },
  categories: {},
  hamburger: {
    padding: 8,
    right: 0,
    paddingLeft: 16,
    paddingBottom: 16,
    position: "absolute",
    borderBottomLeftRadius: 100,
    backgroundColor: "#50C3C6"
  },

  scrollView: {
    width: "100%",
    height: "100%"
  },
  TopSlider: {
    borderRadius: 5,
    overflow: "hidden",
    margin: 0
  },
  Category: {
    marginTop: 20,
    marginBottom: 10
  },
  DiscountListTitle: {
    textAlign: "left",
    marginLeft: 8
  }
});
