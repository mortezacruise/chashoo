import { Dimensions, StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  searchRowContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 4,
    backgroundColor: "white",
    elevation: 1,
    borderRadius: 5,
    overflow: "hidden"
  },
  searchAvatar: {
    marginRight: 8,
    width: Dimensions.get("screen").width / 3.5,
    height: Dimensions.get("screen").width / 3.5
  },
  titleContainer: {
    marginTop: 16
  },
  percent: {
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "red",
    borderTopLeftRadius: 8,
    padding: 4,
    color: "white"
  },
  priceContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    alignItems: "center",
    margin: 4
  },
  realPrice: {
    color: "rgba(0,0,0,0.5)",
    textDecorationLine: "line-through"
  },
  newPrice: {
    color: "red"
  },
  disTitle: {
    width: Dimensions.get("screen").width / 2
  },
  disDescription: {
    width: Dimensions.get("screen").width / 2
  }
});
