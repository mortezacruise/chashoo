import { Dimensions, StyleSheet } from "react-native";

export default (Styles = StyleSheet.create({
  carItemContainer: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  CartImageParent: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "white"
  },
  CartImage: {
    width: Dimensions.get("screen").width / 5,
    height: Dimensions.get("screen").width / 5,
    borderRadius: 8
  },
  CartTitle: {
    flexDirection: "row",
    margin: 8
  },
  CartName: {
    fontSize: 16,
    marginLeft: 16
  },
  cartPrice: {
    fontSize: 16,
    marginLeft: 16,
    color: "red"
  },
  Discount: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 10
  },
  DiscountText: {
    fontSize: 13
  },
  Button: {
    marginTop: 15,
    width: 100,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  buttomText: {
    fontSize: 20,
    color: "white"
  },
  Next: {
    marginTop: 70,
    alignItems: "flex-end"
  }
}));
