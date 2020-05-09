import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import CartItem from "./CartItem";
import styles from "./CartItem/styles";



const CartItemList = () => {
   const Data = [
       {
           img: 'https://cdn.yjc.ir/files/fa/news/1396/9/17/7189484_532.jpg',
           nameProduct: 'چای اعلا',
           price: '20000'
       },
       {
        img: 'https://mahchin.net/wp-content/uploads/2019/07/1134big-min.jpg',
        nameProduct: 'چای سبز',
        price: '30000'
    },
    {
        img: 'https://cdn.yjc.ir/files/fa/news/1396/9/17/7189484_532.jpg',
        nameProduct: 'چای زعفرانی',
        price: '4000'
    }

    ]


  const renderCartItem = ({item}) => {
    return <CartItem data={item} />;
  };
 
  return (
  
     <ScrollView>
     <FlatList
        data={Data}
        renderItem={renderCartItem}
        keyExtractor={(item, index) => index.toString()}
      />
     </ScrollView>
    
  
   
  );
};
export default CartItemList;