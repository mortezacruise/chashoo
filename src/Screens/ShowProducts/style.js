import { StyleSheet, Dimensions } from "react-native";
import { Header } from "react-navigation-stack";
import { screenWidth, screenHeight } from "../../Values/Constants";
import { iranSans, h3 } from "../../Values/Theme";

const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;
const styles = StyleSheet.create({
  image: {
    height: 300,
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    resizeMode: "cover"
  },
  title: {
    fontSize: 20
  },
  name: {
    ...iranSans,
    ...h3,
    textAlign: "right"
  },
  section: {
    // height: screenHeight / 2,
    // backgroundColor: "red",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  sectionContent: {
    fontSize: 16,
    textAlign: "justify"
  },
  keywords: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
  keywordContainer: {
    backgroundColor: "#999999",
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  keyword: {
    fontSize: 16,
    color: "white"
  },
  titleContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  imageTitle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 24
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    opacity: 0
  },
  navTitle: {
    color: "white",
    fontSize: 18,
    backgroundColor: "transparent",
    ...iranSans
  },
  sectionLarge: {
    height: screenHeight
  },
  rowText: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  colorsView: {
    position: "absolute",
    top: 0,
    left: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12
  },
  color: {
    borderRadius: 100,
    marginBottom: 8,
    width: 20,
    height: 20
  }
});
export default styles;
