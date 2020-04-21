import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import Styles from "./styles";
import CustomHeader from "../../Reusable/CustomHeader";
import mardane from "../../Assets/Category/men.png";
import zanane from "../../Assets/Category/woman.png";
import bache from "../../Assets/Category/kids.png";
import family from "../../Assets/Category/set.png";
const Data = [
  { id: 1, name: "چاشو", image: "https://picsum.photos/536/354", routeName: "Chashu" },
  {
    id: 2,
    name: "چاشو",
    image: mardane,
    routeName: "Jashu"
  },
  { id: 3, name: "چاشو", image: zanane, routeName: "Bashu" },
  { id: 4, name: "چاشو", image: bache, routeName: "Bashu" },
  { id: 5, name: "چاشو", image: family, routeName: "Bashu" }
];
const CategoryScreen = ({ navigation }) => {
  const constItems = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={{ margin: 4 }}
        activeOpacity={0.9}
        onPress={onPressItem}
      >
        <Image source={item.image} style={Styles.Images} />
      </TouchableOpacity>
    );
  };
  const onPressItem = () => {
    console.log("pressed");
    navigation.navigate("ShowProducts");
  };
  return (
    <View style={Styles.container}>
      <CustomHeader />
      <FlatList data={Data} renderItem={constItems} />
    </View>
  );
};
export default CategoryScreen;
