import React, { useEffect, useState, useContext } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import BackgroundCursor from "../../Components/BackgroundCursor/BackgroundCursor";
import Shimmer from "../../Components/Shimmer/Shimmer";
// import CustomIcon from "../../Utils/CustomIcon";
import { MAIN_COLOR } from "../../Values/Colors";
import CategoryList from "../Lists/CategoryList";
import styles from "./styles";
import DiscountListContainer from "../Containers/DiscountListContainer";
import { Context as DataContext } from "../../Context/DataContext";
import Banner1 from "../../Assets/mantomodel/mantoBlackCharkhoone.png";
import Banner2 from "../../Assets/mantomodel/mantoBlueCharkhoone.png";
import Banner3 from "../../Assets/mantomodel/mantoRedCharkhoone.png";
import Discounts from "../Containers/DiscountListContainer/Discounts";
import CustomHeader from "../../Reusable/CustomHeader";
const Data = [Banner1, Banner2, Banner3];

const HomeScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const context = useContext(DataContext);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader />
        <BackgroundCursor images={Data} />
        <Discounts />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

// export default class HomeScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isDoubleBack: false,
//       isVisible: false,
//       movieData: []
//     };
//   }
//   async componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isVisible: true
//       });
//     }, 5000);

//     BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
//     if (Platform.OS === "android") {
//       Linking.getInitialURL().then(url => {
//         if (url != undefined) {
//           const resUrlSplit = url.split("/");
//           const page = resUrlSplit[3];
//           const Id = resUrlSplit[4];

//           switch (page) {
//             case "c":
//               this.props.navigation.navigate("CartScreen", { ticket: true });
//               break;
//             case "d":
//               this.props.navigation.navigate("Discount", { disId: Id });
//               break;
//           }
//         } else {
//         }
//       });
//     } else {
//       Linking.addEventListener("url", this.handleOpenURL);
//     }
//   }

//   componentDidUpdate() {
//     BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
//     // Linking.addEventListener("url", this.handleOpenURL);
//   }
//   componentWillUnmount() {
//     BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
//     Linking.removeEventListener("url", this.handleOpenURL);
//   }

//   handleBackPress = () => {
//     if (this.state.isDoubleBack) {
//       BackHandler.exitApp();
//     } else {
//       this.setState({ isDoubleBack: true });
//       ToastAndroid.show("برای خروج دوبار دکمه را لمس کنید", ToastAndroid.SHORT);
//       setTimeout(() => {
//         this.setState({ isDoubleBack: false });
//       }, 1000);
//     }
//     return true;
//   };

//   render() {
//     const parent = this.props.navigation.dangerouslyGetParent();
//     const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;
//     const { navigate } = this.props.navigation;
//     return (
//       <View style={[Flex, { backgroundColor: "#EEEEEE" }]}>
//         <NavigationEvents
//           onWillFocus={payload => {
//             BackHandler.addEventListener(
//               "hardwareBackPress",
//               this.handleBackPress
//             );
//           }}
//           onWillBlur={payload =>
//             BackHandler.removeEventListener(
//               "hardwareBackPress",
//               this.handleBackPress,
//               true
//             )
//           }
//         />
//         <StatusBar backgroundColor={MAIN_COLOR} barStyle="light-content" />
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <Shimmer
//             autoRun={true}
//             visible={this.state.isVisible}
//             style={styless.topSlider}
//           >
//             {/* <SliderHomeContainer sld={this.state.slides} navigate={navigate} /> */}
//             <BackgroundCursor images={Data} />
//           </Shimmer>

//           {/* <CategoryContainer cats={this.state.cats} navigate={navigate} /> */}
//           {/* <DiscountListContainer
//             Discounts={this.state.discounts}
//             navigate={navigate}
//           /> */}
//         </ScrollView>
//         <TouchableOpacity
//           style={styles.hamburger}
//           onPress={this.props.navigation.toggleDrawer}
//         >
//           <Icon name={"hamburger"} color={"white"} size={35} />
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// const styless = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   imageContent: {
//     flexDirection: "row",
//     margin: 16
//   },
//   movieContent: {
//     margin: 8,
//     justifyContent: "space-between",
//     flexDirection: "column"
//   },
//   topSlider: {
//     marginTop: 8,
//     width: Dimensions.get("screen").width - 50,
//     height: Dimensions.get("screen").height / 4.2,
//     alignSelf: "center"
//   },
//   mcontent: {
//     marginTop: 8,
//     marginBottom: 8
//   },
//   categories: {}
// });
