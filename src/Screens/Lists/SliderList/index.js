import { FlatList, Dimensions } from "react-native";
import React, { Component } from "react";
import SliderRow from "../../Rows/SliderRow";
import Carousel from "react-native-snap-carousel";
import { screenWidth } from "../../../Values/Constants";
import { r8, ofH, bgGray, bgBlack, mH16 } from "../../../Values/Theme";

const TopSlider = ({ onPressSlide, sliders }) => {
  _onPressItem = key => {
    onPressSlide(key);
  };
  const _renderArticle = data => {
    return <SliderRow slider={data} onPressItem={_onPressItem} />;
  };

  const data = sliders.reverse();
  return (
    <Carousel
      // containerCustomStyle={[ofH, r8]}
      // contentContainerCustomStyl={[ofH, r8]}
      data={data}
      renderItem={({ item }) => _renderArticle(item)}
      sliderWidth={screenWidth}
      itemWidth={Dimensions.get("screen").width - 50}
      // itemHeight={Dimensions.get("screen").height / 3.9}
      activeSlideOffset={100}
      autoplayDelay={2000}
      useScrollView={false}
      activeAnimationType={"timing"}
      // inactiveSlideOpacity={0.7}
      // inactiveSlideScale={0.9}
      layout={"default"}
      // layoutCardOffset={`5`}
      autoplay={true}
      // loop={true}
    />
  );
};

export default TopSlider;
{
  /* <FlatList
horizontal={true}
data={data}
showsHorizontalScrollIndicator={false}
renderItem={data => (
  <SliderRow slider={data.item} onPressItem={this._onPressItem} />
)}
keyExtractor={(item, index) => index.toString()}
/> */
}
