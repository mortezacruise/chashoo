import { StyleSheet } from "react-native";
import { MAIN_COLOR } from "../../../Values/Colors";
import { accentColor } from "../../../Values/Theme";

export default styles = StyleSheet.create({
  categoryContainer: {
    margin: 4,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 8,
    elevation: 4,
    padding: 4,
    backgroundColor: accentColor
  },

  categoryTitleParent: {
    alignItems: "center"
  },
  categoryTitle: {
    fontSize: 12
  }
});
