import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  hamburger: {
    zIndex: 2,
    paddingBottom: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingLeft: 8,
    borderBottomRightRadius: 100,
    backgroundColor: "#50C3C6"
  },
  header: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerText: {
    fontSize: 18,
    marginHorizontal: 40
  },

  TabContent: {
    alignItems: "center",
    justifyContent: "center"
  }
}));
