import { StyleSheet, Dimensions } from "react-native";
import { MAIN_COLOR } from "../../Values/Colors";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 8,
    flexDirection: "row"
  },
  left: {
    zIndex: 2,
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 8,
    justifyContent: "space-around",
    paddingVertical: 20,
    height: height / 2
  },
  middle: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    zIndex: 1
  },
  right: {
    backgroundColor: "white",
    elevation: 3,
    borderRadius: 8,
    justifyContent: "space-around",
    paddingVertical: 20,
    height: height / 2
  },
  colorCircle: {
    width: 48,
    margin: 8,
    height: 48,
    borderRadius: 100
  },
  cloth: {
    width: width / 1.1,
    height: width / 1.1,
    marginVertical: 8
  },
  Price: {
    position: "absolute",
    bottom: 0,
    backgroundColor: MAIN_COLOR,
    padding: 8,
    borderRadius: 8,
    alignItems: "center"
  },
  dress: {
    height: 120,
    backgroundColor: MAIN_COLOR,
    justifyContent: "center",
    borderRadius: 8,
    // alignItems: "",
    margin: 4,
    marginTop: 10
  }
});
export default styles;

//   container: {
//     flex: 1,
//     padding: 8,
//     flexDirection: "row",
//     justifyContent: "space-evenly"
//   },
//   leftCircle: {
//     position: "absolute",
//     right: 0
//   },
//   rightCircles: {
//     backgroundColor: "red"
//   },
//   colorHolder: {
//     // justifyContent: "center",
//     // alignItems: "center",
//     flexDirection: "row",
//     elevation: 3,
//     marginTop: 30,
//     width: "100%",
//     height: SCREEN_HEIGHT / 7,
//     backgroundColor: "white"
//   },
//   colorCircles: {
//     borderRadius: 100,
//     margin: 4
//   },

//   rightColorCircles: {
//     width: SCREEN_HEIGHT / 15,
//     height: SCREEN_HEIGHT / 15,
//     borderRadius: 100,
//     margin: 4
//     // left: 300
//   },

//   middleContent: {
//     backgroundColor: "white",
//     zIndex: 1
//   }
// });
