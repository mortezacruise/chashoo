import { StyleSheet, Dimensions } from "react-native";
import { MAIN_COLOR } from "../../../Values/Colors";

export default (styles = StyleSheet.create({
  login: {
    // padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    alignSelf: "center",
    marginTop: Dimensions.get("screen").height / 10,
    width: Dimensions.get("screen").width / 3,
    height: Dimensions.get("screen").width / 3,
    marginBottom: 24
  },
  error: {
    fontSize: 12,
    color: "#ed2f2f",
    marginBottom: 10
  },
  item: {
    flexDirection: "row",
    marginTop: Dimensions.get("screen").height / 10,
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },

  input: {
    fontSize: 18,
    color: MAIN_COLOR,
    marginLeft: 10,
    textAlign: "center"
  },
  button: {
    alignSelf: "center",

    borderRadius: 5,
    marginTop: 20,
    backgroundColor: MAIN_COLOR,
    width: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 20,
    color: "white"
  },
  itemCode: {
    height: Dimensions.get("screen").height / 6,
    flexDirection: "row",

    alignItems: "center",
    padding: 16,
    justifyContent: "center"
  },
  codeInput: {
    borderBottomWidth: 0.5,
    width: 35,
    marginHorizontal: 4,

    textAlign: "center"
  }
}));
