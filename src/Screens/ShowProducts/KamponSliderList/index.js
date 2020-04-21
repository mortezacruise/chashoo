import React from "react";
import { FlatList, Dimensions } from "react-native";
import KamponSliderRow from "../KamponSliderRow";
import Carousel from "react-native-snap-carousel";
import { screenWidth } from "../../../Values/Constants";

const KamponSliderList = ({ slides }) => {
  const _renderArticle = data => {
    return <KamponSliderRow slider={data} />;
  };
  return (
    <Carousel
      data={slides.reverse()}
      renderItem={({ item }) => _renderArticle(item)}
      sliderWidth={screenWidth}
      itemWidth={Dimensions.get("screen").width - 50}
      itemHeight={Dimensions.get("screen").height / 4}
      activeSlideOffset={100}
      autoplayDelay={2000}
      useScrollView={false}
      activeAnimationType={"timing"}
      layout={"default"}
      autoplay={true}
    />
  );
};

export default KamponSliderList;
{
  /* < FlatList
horizontal={true}
data={slides}
showsHorizontalScrollIndicator={false}
renderItem={data => (<KamponSliderRow slider={data.item} />)}
keyExtractor={(item, index) => index.toString()}
/> */
}
