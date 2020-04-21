import { StyleSheet } from "react-native";
import { MAIN_COLOR } from "../../../../Values/Colors";

export default (styles = StyleSheet.create({
  activeCircle: {
    width: 48,
    height: 48,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: MAIN_COLOR
  },
  inActiveCircle: {
    width: 48,
    height: 48,
    borderRadius: 100,
    alignItems: "center",
    borderColor: MAIN_COLOR,
    borderWidth: 5,
    justifyContent: "center",
    backgroundColor: "white"
  },
  activeBar: {
    width: 70,
    backgroundColor: MAIN_COLOR,
    height: 10
  }
}));
