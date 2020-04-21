import React, { PureComponent, useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import DiscountRow from "../../Rows/DiscountRow";
import manto1 from "../../../Assets/OK/manto.png";
import manto2 from "../../../Assets/OK/manto2.png";
import manto3 from "../../../Assets/OK/manto3.png";
import shalvar from "../../../Assets/OK/manto4.png";
import shalvar1 from "../../../Assets/OK/shalvar.png";
const datarray = [
  { image: manto1 },
  { image: manto2 },
  { image: shalvar },
  { image: shalvar1 },
  { image: manto1 },
  { image: manto2 },
  { image: shalvar },
  { image: shalvar1 }
];
const DiscountList = (props) => {
  // _discountClick = (id, cat) => {
  //   this.props.discounOnClick(id, cat);
  // };
  // console.log("render discountsList");

  const renderItem = ({ item }) => {
    // if (item.popular) return <Text>{item.popular.title}</Text>;
    // if (item.newClub) return <Text>{item.newClub.title}</Text>;
    // console.log({ ghgh: item });

    return <DiscountRow rows={item} />;
  };

  const ITEM_HEIGHT = 1000;

  return useMemo(() => {
    return (
      <View style={{ flex: 1, marginTop: 12, marginHorizontal: 8 }}>
        <FlatList
          // getItemLayout={(data, index) => {
          //   console.log({ index });
          //   console.log({ data });

          //   return { length: 33, index, offset: 33 * index };
          // }}

          numColumns={2}
          showsHorizontalScrollIndicator={false}
          data={datarray}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }, [props.contents]);
};
export default DiscountList;
