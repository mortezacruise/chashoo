import { Dimensions, StyleSheet } from "react-native";

const { height, width } = Dimensions.get("screen");
const heightTopContainer = height / 2.5;
const heightProfileNumber = height / 8;
const marginProfileNumber = width / 20;
export default styles = StyleSheet.create({
  profileContainer: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width
  },
  profileTopContainer: {
    height: heightTopContainer,
    backgroundColor: "#50C3C8",
    alignItems: "center",
    paddingTop: height / 30,
    marginBottom: 30
  },
  changeImage: {
    position: "absolute",
    left: 130,
    top: 120,
    color: "blue"
  },
  profileNumberContainer: {
    height: heightProfileNumber,
    backgroundColor: "white",
    position: "absolute",
    borderRadius: 10,
    paddingHorizontal: height / 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
    left: marginProfileNumber,
    right: marginProfileNumber,
    top: heightTopContainer - heightProfileNumber / 2
  },
  profileImage: {
    width: width / 3,
    height: width / 3,
    borderRadius: 100,
    overflow: "hidden"
  },
  profileName: {
    color: "white",
    fontSize: 20,
    marginTop: 16
  },
  totalKampon: {
    alignItems: "center"
  },
  profileBottomContainer: {
    alignItems: "flex-start",
    marginHorizontal: 5,
    borderRadius: 5,
    elevation: 1,
    padding: heightProfileNumber / 10
  },
  container: {
    backgroundColor: "#e1e1e1"
  },
  textName: {
    fontSize: 25
  },
  name: {
    marginRight: 20
  },
  logOut: {
    fontSize: 20,
    marginTop: 25
  },
  profile: {
    flexDirection: "row-reverse",
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: "#fff"
  },
  form: {
    backgroundColor: "#fff",
    marginTop: 20
  },
  item: {
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 0
  },
  text: {
    marginRight: 20
  },
  imageProfile: {
    height: 100,
    width: 100,
    marginRight: 20
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  icon: {
    marginLeft: 20
  },
  headerText: {
    marginBottom: 10
  },
  input: {
    padding: 8,
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#e8e8e8",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});
