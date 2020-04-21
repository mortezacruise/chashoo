import React, { useContext, useEffect, useMemo } from "react";
import { Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Discounts from "./Discounts";
import { Context as DataContext } from "../../../Context/DataContext";
const DiscountListContainer = props => {
  const context = useContext(DataContext);
  const specials = context.state.specialist.specialData;
  useEffect(() => {}, [specials]);

  const renderItem = ({ item }) => {
    if (item.firstbaner) {
      return (
        <Image
          style={{ width: "100%", height: 100 }}
          source={{ uri: item.firstbaner.url }}
        />
      );
    } else return <Discounts items={item} />;
  };

  console.log("render discountsContainer");

  return useMemo(() => {
    return (
      <FlatList
        inverted
        // initialNumToRender={2}
        removeClippedSubviews
        showsHorizontalScrollIndicator={false}
        data={specials}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }, [specials]);
};
export default DiscountListContainer;
