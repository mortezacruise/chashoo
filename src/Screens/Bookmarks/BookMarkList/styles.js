import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  Container: { marginTop: 16 },
  DiscountListTitle: {
    textAlign: "left",
    marginLeft: 18
  },
  DiscountListTitleParent: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  DiscountMore: {
    marginRight: 8,
    color: "#00BCD4"
  },
  MoreHolder: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 8,
    alignItems: "center"
  }
}));
