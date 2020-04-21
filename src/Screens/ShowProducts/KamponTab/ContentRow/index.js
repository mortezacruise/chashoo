import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { h3, iranSans, mV8, mH8, m8, h4, h5 } from "../../../Values/Theme";
const KamponRow = ({ Rows }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-start"
      }}
    >
      <Icon name={"circle"} style={[m8]} />
      <Text numberOfLines={10} ellipsizeMode="tail" style={[iranSans, h5]}>
        {Rows}
      </Text>
    </View>
  );
};

export default KamponRow;
