import { post } from "axios";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { BASE_URL } from "../../../Values/Strings";
import SearchRow from "../../Rows/SearchRow";

const SearchFlatListContainer = ({ searchString, navigation }) => {
  const [result, setResult] = useState([]);

  const _search = async () => {
    try {
      const resGetSearchResult = await post(BASE_URL + "/search", { searchString });
      setResult(resGetSearchResult.data.discounts);
    } catch (e) {}
  };

  useEffect(() => {
    _search();
  }, [searchString]);

  _onItemSearchClick = id => {
    navigation.navigate("Discount", { disId: id });
  };

  return (
    <FlatList
      data={result}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <SearchRow
          searchItem={item}
          navigation={navigation}
          onItemSearchClick={this._onItemSearchClick}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default SearchFlatListContainer;
