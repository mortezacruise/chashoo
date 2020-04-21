import { StyleSheet, Dimensions } from "react-native";
import { MAIN_COLOR } from "../../../../Values/Colors";

export default (styles = StyleSheet.create({
  btnNext: {
    backgroundColor: MAIN_COLOR,
    height: 48,
    marginHorizontal: 16,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8
  },
  btnTitle: {
    color: "white",
    fontSize: 18
  },
  PaymentScreen: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 8,
    justifyContent: "space-around",
    alignItems: "center"
  },
  btnPayment: {
    width: Dimensions.get("screen").width / 2.5,
    backgroundColor: MAIN_COLOR,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16
  }
}));
