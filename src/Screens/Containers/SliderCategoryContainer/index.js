import React, { useState, useEffect } from "react";
import { View } from "react-native";
import SliderList from "../../Lists/SliderList";
import axios from "axios";
import { CATEGORY_INFINITIES_SLIDER } from "../../../Values/Strings";
import { bgMainColor, centerAll } from "../../../Values/Theme";

const SliderCategoryContainer = ({ selectedCat, navigation }) => {
  const [sliders, setSliders] = useState([]);

  const _onPressedItem = key => {
    navigation.navigate("Discount", { disId: key });
  };

  const _getSliders = async () => {
    const getSliderSelectedCategory = await axios.get(
      CATEGORY_INFINITIES_SLIDER + "/" + selectedCat
    );
    setSliders(getSliderSelectedCategory.data);
  };
  useEffect(() => {
    _getSliders();
  }, []);

  return (
    <View style={[centerAll]}>
      <SliderList sliders={sliders} onPressSlide={_onPressedItem} />
    </View>
  );
};

export default SliderCategoryContainer;
