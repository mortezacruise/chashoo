import React from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
  ActivityIndicator,
  Image
} from "react-native";
import styles from "./styles";
import {
  iranSans,
  h4,
  h5,
  bgMainColor,
  s48,
  centerAll,
  fWhite,
  h3,
  s32,
  posAbs
} from "../../../Values/Theme";
import { screenWidth } from "../../../Values/Constants";
const irAmount = require("iramount");

export default SearchRow = ({ searchItem, onItemSearchClick }) => {
  _onPress = () => {
    onItemSearchClick(searchItem._id);
  };
  const disAvatar = searchItem.disThumbnail;
  const { disTitle, disDescription, disRealPrice, disNewPrice, disPercent } = searchItem;

  const newPrice = new irAmount(disNewPrice).digitGrouped();
  const realPrice = new irAmount(disRealPrice).digitGrouped();

  return (
    <TouchableWithoutFeedback onPress={this._onPress}>
      <View style={styles.searchRowContainer}>
        <Image style={styles.searchAvatar} source={{ uri: disAvatar }} />
        <View style={styles.titleContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[iranSans, h4, { width: screenWidth / 2.5 }]}
          >
            {disTitle}
          </Text>
          <Text
            style={[iranSans, h5, { width: screenWidth / 2.5 }]}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {disDescription}
          </Text>
          <Text style={[iranSans, h4, { color: "#81C784" }]}>{newPrice} تومان</Text>
          <Text
            style={[
              iranSans,
              h5,
              { color: "#ff0000", textDecorationLine: "line-through" }
            ]}
          >
            {realPrice}تومان
          </Text>
        </View>
        <ImageBackground
          style={[s48, centerAll, posAbs, { right: 0 }]}
          source={require("../../../Assets/Png/discount.png")}
        >
          <Text style={[iranSans, h4, fWhite]}>%{disPercent}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
