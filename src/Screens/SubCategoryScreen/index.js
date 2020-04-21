import React, { useEffect, useState } from "react";
import { View, BackHandler } from "react-native";
import SliderCategoryContainer from "../Containers/SliderCategoryContainer";
import InfinityScrollCategoryContainer from "../Infinities/InfinityCategory";

const SubCategoryScreen = ({ navigation }) => {
  const [subCategory, setSubCat] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress, true);
    };
  }, []);
  const handleBackPress = () => {
    navigation.pop();
    return true;
  };
  useEffect(() => {
    const subCat = navigation.getParam("subCat", "param", "");
    const param = navigation.getParam("param", "", "");
    setSubCat(subCat);
    setSelectedCat(param);
  });
  if (subCategory && selectedCat) {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.3 }}>
          <SliderCategoryContainer
            //   selectedSubCategory={selectedSubCategory}
            selectedCat={subCategory}
            navigation={navigation}
          />
        </View>

        <View style={{ flex: 0.7, margin: 16 }}>
          <InfinityScrollCategoryContainer
            subCat={subCategory}
            selectedCat={selectedCat}
            navigation={navigation}
          />
        </View>
      </View>
    );
  } else {
    return <View style={{ backgroundColor: "green", flex: 1 }} />;
  }
};

export default SubCategoryScreen;
