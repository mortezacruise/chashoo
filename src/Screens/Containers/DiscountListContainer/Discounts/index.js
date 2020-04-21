import React, { useContext } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./styles";
import DiscountList from "../../../Lists/DiscountList";
import { iranSans, h4, mH16, fMainColor } from "../../../../Values/Theme";
import Icon from "react-native-vector-icons/FontAwesome";
import { Context as DataContext } from "../../../../Context/DataContext";
const Discounts = (props) => {
  const context = useContext(DataContext);
  const bannerData = context.state.specialist.banners;
  const specials = context.state.specialist.specialData;
  const firstBaner = bannerData[0].firstbaner;
  // console.log("render discounts");

  return <DiscountList contents={specials} />;
};
export default Discounts;
// _onDiscountPress = (id, cat) => {
//   this.setState({ id });
//   this.props.navigate("Discount", { disId: id, catTitle: cat });
// };
// _morePress = () => {
//   cat = this.props.items[0].disCategory;
//   this.props.navigate("Category", {
//     catTitle: cat,
//     catId: this.props.items[0].catId
//   });
// };
