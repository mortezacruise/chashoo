import React, { useState } from "react";
import { View, FlatList, Text } from 'react-native';
import { Flex, centerAll, iranSans, h4, mH16, mV8, h5 } from "../../../../Values/Theme";

const TabContent = ({ data }) => {

  if (data.length > 0) {
    return (
      <FlatList data={data}
        renderItem={({ item }) => <KamponRow Rows={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  } else {
    return (
      <View style={[centerAll, Flex]}> <Text style={[iranSans, h4]}>اطلاعاتی یافت نشد</Text> </View>
    );
  }
}

export default TabContent;

const KamponRow = ({ Rows }) => {
  return (
    <View style={[Flex, mH16, mV8]}>
      <Text style={[iranSans, h5]}>{Rows}</Text>
    </View>
  );
};
