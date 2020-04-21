import { StyleSheet, Dimensions } from "react-native";
import { PINK_HOT, CYAN, ORANGE_CARROT, PINK_PASTEL } from "../../Values/Colors";

export default (styles = StyleSheet.create({
  containerFirst: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PINK_HOT
  },
  containerSecond: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: CYAN
  },
  containerThirst: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ORANGE_CARROT
  },
  containerForth: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PINK_PASTEL
  },
  image: {
    width: Dimensions.get("screen").width / 1.3,
    height: Dimensions.get("screen").width / 1.3
  },
  icon: {
    width: Dimensions.get("screen").width / 4.5,
    height: Dimensions.get("screen").width / 4.5
  },
  TextTitle: {
    marginTop: Dimensions.get("screen").height / 7,
    marginBottom: Dimensions.get("screen").height / 22,
    fontSize: 20,
    color: "white",
    fontFamily: "iran_sans"
  },
  TextDesc: {
    fontSize: 14,
    color: "white",
    fontFamily: "iran_sans"
  }
}));
