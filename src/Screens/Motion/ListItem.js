import React, { PureComponent } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { ScaleAndOpacity } from "react-native-motion";
import Header from "./Header";

export default class ListItem extends PureComponent {
  onPressed = event => {
    if (this.props.onPress) {
      const { onPress, item } = this.props;
      onPress(item, event.nativeEvent);
    }

  };

  render() {
    const { item, isSelected, style, isHidden, animateOnDidMount } = this.props;
    const { bg, name, isReceived, ...rest } = item;

    return (
      <ScaleAndOpacity isHidden={isHidden} animateOnDidMount={animateOnDidMount}>
        <TouchableWithoutFeedback onPress={this.onPressed}>
          <View style={[styles.container, style]} pointerEvents="box-only">
            <Header name={name} isReceived={isReceived} bg={bg} />
          </View>
        </TouchableWithoutFeedback>
      </ScaleAndOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 4
  }
});
