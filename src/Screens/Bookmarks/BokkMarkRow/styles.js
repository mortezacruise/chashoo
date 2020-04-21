import { StyleSheet } from "react-native";
import Constants from "../../../Values/Constant";

const style = StyleSheet.create({
  discountContainer: {
    backgroundColor: "#fff",
    flexDirection: "column",
    margin: 8,
    width: Constants.Dimension.ScreenWidth(0.43),
    elevation: 3,
    borderRadius: 5,
    overflow: "hidden"
  },

  discountImage: {
    width: Constants.Dimension.ScreenWidth(0.43),
    height: Constants.Dimension.ScreenWidth(0.45)
  },

  discountTitleContainer: {
    flexDirection: "column",
    marginLeft: 8,
    justifyContent: "center"
  },

  discountPercentBg: {
    position: "absolute",
    width: 48,
    height: 48,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    right: 0
  },

  discountPercent: {
    color: "white",
    fontSize: 15
  },

  discountPriceContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 10,
    alignItems: "center"
  },
  sellCountContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  discountSellCount: {
    fontSize: 13,
    marginLeft: 8,
    paddingTop: 2,
    textAlignVertical: "center"
  },
  discountPriceReal: {
    color: "red",
    textAlign: "left",
    marginLeft: 8,
    fontSize: 16,
    textDecorationLine: "line-through"
  },
  discountPriceNew: {
    color: "green",
    fontSize: 20
  },
  discountName: {
    textAlign: "left",
    fontSize: 14,
    fontFamily: "iran",
    width: "90%"
  },

  discountPrices: {
    flexDirection: "row",
    //justifyContent: "sp",
    alignItems: "center"
  }
});

export default style;
