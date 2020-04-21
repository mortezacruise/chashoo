import React from "react";
import { FlatList, Text, View } from "react-native";
// import { KamponRow } from "../KamponActiveRow";
import { centerAll, Flex, h3, iranSans } from "../../../../Values/Theme";
import KamponRow from "../ContentRow";

export const ContentList = ({ data, navigate }) => {
  _renderItems = kampon => {
    return <KamponRow navigate={navigate} Rows={kampon} />;
  };
  if (data != undefined) {
    if (data.length > 0) {
      return (
        <View style={[Flex]}>
          <FlatList
            data={data}
            renderItem={({ item }) => this._renderItems(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      );
    } else {
      return (
        <View style={[centerAll, Flex]}>
          <Text style={[iranSans, h3]}>اطلاعاتی یافت نشد</Text>
        </View>
      );
    }
  } else return <View />;
};
