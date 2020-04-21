import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Dimensions, Image, StyleSheet, I18nManager } from "react-native";
import InvertibleScrollView from "react-native-invertible-scroll-view";
import { screenWidth } from "../../Values/Constants";
const DEVICE_WIDTH = Dimensions.get("window").width;
class BackgroundCursor extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        (prev) => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            x: DEVICE_WIDTH * this.state.selectedIndex,
            y: 0
          });
        }
      );
    }, 4000);
  };

  setSelectedIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ selectedIndex });
  };

  render() {
    // console.log(this.scrollRef);

    const { images } = this.props;
    const { selectedIndex } = this.state;
    console.log({ images });

    return (
      <View style={{ width: "100%" }}>
        <InvertibleScrollView
          inverted
          style={{ flexDirection: I18nManager.isRTL ? "row-reverse" : "row" }}
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
        >
          {images.map((image) => (
            <Image style={styles.backgroundImage} source={image} key={image} />
          ))}
        </InvertibleScrollView>
        <View style={styles.circleView}>
          {images
            .map((image, i) => (
              <View
                style={[styles.whiteCircle, { opacity: i === selectedIndex ? 1 : 0.5 }]}
                key={image}
                active={i === selectedIndex}
              />
            ))
            .reverse()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: screenWidth,
    width: DEVICE_WIDTH
  },
  whiteCircle: {
    width: 8,
    height: 8,
    borderRadius: 3,
    margin: 5,
    borderColor: "red",
    borderWidth: 2
  },
  circleView: {
    position: "absolute",
    bottom: 15,
    height: 10,

    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  contentContainerStyle: {
    flexDirection: "row-reverse"
  }
});
export default BackgroundCursor;
