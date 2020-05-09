import React, { useEffect, useState, useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import CartItemList from './CartItemList';
import CustomHeader from '../../Reusable/CustomHeader'

import styles from "./styles";
import { DARK_GREEN } from "../../Common/Colors";
import  Icon  from "react-native-vector-icons/AntDesign";
const TeaCartScreen = () => {

  return (
    <View style={styles.container} >
        <CustomHeader header={'سبد خرید'} color={DARK_GREEN}  />
      <CartItemList/>
      <View style={styles.viewPrice}>
        <Text style={styles.text} >مبلغ کل : 9000 تومان</Text>
        <TouchableOpacity >
            <View style={styles.touch}>
            <Text style={styles.textPrise}>خرید</Text>
            <Icon name="left" size={15} color="white"/>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TeaCartScreen;