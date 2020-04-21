import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { Context as DataContext } from "../../../Context/DataContext";
import CategoryRow from "../../Rows/CategoryRow";
import styles from "./styles";
const KIF = "مانتو";
const KOTSHALVAR = " تی شرت ";
const KAFSH = "شلوار";
const MANTO = "کیف";
const PIRAHAN = "کفش";
import Image from "../../../Assets/categories/coat.png";
import Image1 from "../../../Assets/categories/jeans.png";
import Image2 from "../../../Assets/categories/polo-shirt.png";
import Image3 from "../../../Assets/categories/shoe.png";
import Image4 from "../../../Assets/categories/suit.png";
import Image5 from "../../../Assets/categories/suitcase.png";

const CategoryList = () => {
  const context = useContext(DataContext);
  const cats = [
    { catTitle: KAFSH, image: Image1, id: 1 },
    { catTitle: KIF, image: Image, id: 2 },
    { catTitle: KOTSHALVAR, image: Image2, id: 3 },
    { catTitle: PIRAHAN, image: Image3, id: 4 },
    { catTitle: MANTO, image: Image5, id: 5 }
  ];

  const onPress = (title, id) => {
    console.log({ id: id });
    console.log({ title: title });
  };

  const renderItem = ({ item }) => {
    return <CategoryRow onCategoryPress={onPress} cat={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        inverted
        showsHorizontalScrollIndicator={false}
        horizontal
        data={cats}
        renderItem={renderItem}
        keyExtractor={item => item.catTitle}
      />
    </View>
  );
};
export default CategoryList;
