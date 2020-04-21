import React, { useState } from "react";
import { View, Text, Animated, PanResponder, Dimensions } from "react-native";
import styels from "./styles";
const Morteza = props => {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: () => {
      resetPosition();
    }
  });
  const resetPosition = () => {
    Animated.spring(pos, {
      toValue: { x: 0, y: 0 }
    }).start();
  };
  const SCREEN_WIDTH = Dimensions.get("window").width;

  let position = new Animated.ValueXY();
  const [respod, setRespond] = useState(panResponder);

  const [pos, setPos] = useState(position);

  const getCardStyle = i => {
    const rotate = pos.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 3, 0, SCREEN_WIDTH * 10],
      outputRange: ["0deg", "0deg", "0deg"]
    });
    return { ...pos.getLayout(), transform: [{ rotate: rotate }] };
  };

  return (
    <View>
      <Animated.View style={[getCardStyle()]} {...respod.panHandlers}>
        <View
          style={[
            styels.rightColorCircles,
            { backgroundColor: props.item1.item }
          ]}
        ></View>
      </Animated.View>
    </View>
  );
};
export default Morteza;
