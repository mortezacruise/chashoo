import React, { PureComponent } from "react";
import { Animated, StyleSheet } from "react-native";

export default class ToolbarBackground extends PureComponent {
  constructor(props) {
    super(props);
    //Agar Hidden True Bud TransY = -150 Vagarna = 0
    this.state = { translateY: new Animated.Value(props.isHidden ? -150 : 0) };
  }

  componentWillReceiveProps(nextProps) {
    //Agar Avalin Bar Hiiden Nabud va Props Jadid hidden bud Animation=Hidden
    if (!this.props.isHidden && nextProps.isHidden) {
      this.hideAnimation();
    }
    if (this.props.isHidden && !nextProps.isHidden) {
      this.showAnimation();
    }
  }

  hideAnimation() {
    Animated.timing(this.state.translateY, {
      toValue: -150,
      useNativeDriver: true,
      duration: 500
    }).start();
  }

  showAnimation() {
    Animated.timing(this.state.translateY, {
      toValue: 0,
      useNativeDriver: true,
      duration: 500
    }).start();
  }

  render() {
    const { translateY } = this.state;
    const { isDetail } = this.props;

    const animationStyle = {
      transform: [{ translateY }]
    };

    return <Animated.View style={[styles.toolbarBackground, animationStyle]} />;
  }
}

const styles = StyleSheet.create({
  toolbarBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: "#50C3C8"
  }
});
