import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
// import { KamponRow } from "../KamponActiveRow";
import { h3, iranSans, centerAll, Flex } from "../../../Values/Theme";
import KamponRow from "../ContentRow";

export const ContentList = ({ data }) => {
  _renderItems = kampon => {
    return <KamponRow Rows={kampon} />;
  };
  if (data != undefined) {
    if (data.length > 0) {
      return (
        <FlatList
          data={data}
          renderItem={({ item }) => this._renderItems(item)}
          keyExtractor={(item, index) => index.toString()}
        />
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
