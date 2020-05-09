import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity  } from "react-native";
// import styles from "./Styles";

import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";

const CartItem = ({data}) => {
 
  return (
    <View style={styles.container}>
      <Image resizeMode= 'stretch' source={{uri: data.img}} style={styles.img} />
 
        <View style={styles.viewPrice}>
          <Text style={styles.text}>نام محصول : {data.nameProduct}</Text>
          <Text style={styles.text}> قیمت : {data.price} تومان</Text>  
        </View>
      
      <View style={styles.add}>
      <TouchableOpacity style={styles.touch}>
        <Icon name="plus" size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.number}>2</Text>
      <TouchableOpacity style={styles.touch}>
        <Icon name="minus" size={20} color="white" />
      </TouchableOpacity>
    </View>
    </View>
  );
};
export default CartItem;
