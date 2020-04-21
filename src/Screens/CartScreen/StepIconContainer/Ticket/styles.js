import { Dimensions, StyleSheet } from "react-native";

export default (sty = StyleSheet.create({
  container: {
    alignSelf: "stretch"
  },
  ticketBottomContainer: {},
  firstPartContainer: {
    backgroundColor: "#e0dede",
    flexDirection: "row",
    justifyContent: "center"
  },
  secondPartContainer: {
    backgroundColor: "#50C3C6",
    flexDirection: "row",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16
  }
}));
