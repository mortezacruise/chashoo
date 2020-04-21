import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text
} from "react-native";
import ShimmerCategory from "../../../Components/Shimmer/ShimmerCategory";
import { screenWidth } from "../../../Values/Constants";
import { catHome } from "../../../Values/Theme";
import styles from "./styles";
import Shimmer from "../../../Components/Shimmer/Shimmer";

const CategoryRow = props => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      console.log("timeout");

      setIsVisible(true);
    }, 5000);
  }, []);

  const onCategoryPress = () => {
    props.onCategoryPress(props.cat.catTitle, props.cat.id);
  };
  const { image, catTitle } = props.cat;

  return (
    // <Shimmer autoRun={true} visible={isVisible} style={styless.image}>
    <TouchableWithoutFeedback onPress={onCategoryPress}>
      <View style={styles.categoryContainer}>
        <Image source={image} style={[catHome]} resizeMode={"contain"} />
        <Text style={{ fontFamily: "iran_sans" }}>{catTitle}</Text>
      </View>
    </TouchableWithoutFeedback>
    // </Shimmer>
  );
};
export default CategoryRow;
const styless = StyleSheet.create({
  image: {
    width: screenWidth / 3,
    height: screenWidth / 5
  }
});
