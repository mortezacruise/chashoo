import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const ProudactCards = ({items}) => {
 

 
  return (
    <TouchableOpacity style={styles.container}>
      <Image resizeMode='stretch' style={styles.img} source={{uri: items.image}} />
      <Text style={styles.text}> نام محصول :  {items.nameProudact}</Text>
      <Text style={styles.text}>قیمت : {items.priceProudact}  تومان</Text>
    </TouchableOpacity>
  );
};

export default ProudactCards;
