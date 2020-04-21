import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Flex, mV16, mH16, centerAll, iranSans, h3, m4, h5 } from "../Values/Theme";
const SubCategoryView = ({ item, onpressSubCat }) => {
  const subCatSelect = () => {
    const catTitle = item._id;
    onpressSubCat(catTitle);
  };
  return (
    <TouchableOpacity
      onPress={subCatSelect}
      style={[
        centerAll,
        ,
        // Flex,
        {
          width: 100,
          // height: 40,
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 8,
          // padding: 4,
          marginHorizontal: 4,
          marginTop: 8,
          paddingVertical: 8
        }
      ]}
    >
      <Text style={[iranSans, h5]}>{item.subCatTitlePersian}</Text>
    </TouchableOpacity>
  );
};
export default SubCategoryView;
