import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import translateAndOpacity from "./translateAndOpacity";

class Toolbar extends PureComponent {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({ container: { height: 50, alignItems: "center", paddingHorizontal: 16 } });

export default translateAndOpacity(Toolbar);
