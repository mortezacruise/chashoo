import React from "react";
import {
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import PersianText from "../../../Common/Persian/PersianText";

const BookMarkRow = ({ rows }) => {
  return (
    <TouchableWithoutFeedback
      onPress={this._onPress}
      style={{ backgroundColor: "transparent" }}
    >
      <View style={styles.discountContainer}>
        <Image source={{ uri: rows.disImages[0] }} style={styles.discountImage} />
        <View style={styles.discountTitleContainer}>
          <Text style={styles.discountName}>{rows.disTitle}</Text>
          <View style={styles.sellCountContainer}>
            <Icon name="shopping-basket" size={15} />
          </View>
          <View style={styles.discountPrices}>
            <Text style={styles.discountPriceNew}>
              <PersianText>{rows.disNewPrice.toString()}</PersianText>
            </Text>
            <Text style={styles.discountPriceReal}>
              <PersianText>{rows.disRealPrice.toString()}</PersianText>
            </Text>
          </View>
        </View>
        <ImageBackground
          style={styles.discountPercentBg}
          source={require("../../../Assets/Images/ic_discount.png")}
        >
          <Text style={styles.discountPercent}>{rows.disDiscount}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BookMarkRow;
