import { StyleSheet, Dimensions } from "react-native";
import { MAIN_COLOR } from "../../Values/Colors";
export default styles = StyleSheet.create({
  searchScreenContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#EEEEEE",
    padding: 8
  },
  searchInput: {
    position: "relative",
    height: Dimensions.get("screen").width / 6.5,
    width: "90%",
    marginHorizontal: 16,
    marginVertical: 16,

    borderRadius: 16,
    backgroundColor: MAIN_COLOR,
    alignItems: "center",
    justifyContent: "center"
  }
});
