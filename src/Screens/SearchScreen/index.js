import React, { useState } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import SearchFlatListContainer from "../Containers/SearchListContainer";
import styles from "./styles";
import CustomIcon from "../../Utils/CustomIcon";
import { h4, h3, h2, iranSans, centerAll, Tac } from "../../Values/Theme";
const SearchScreen = ({ navigation }) => {
  const [searchString, setSearchString] = useState("");

  _onSearchInputChange = async text => {
    setSearchString(text);
  };

  return (
    <View style={styles.searchScreenContainer}>
      <Input
        inputStyle={[
          { borderBottomWidth: 0, color: "white", marginLeft: 60, marginTop: 10 },
          h2,
          iranSans,
          Tac
        ]}
        containerStyle={styles.searchInput}
        inputContainerStyle={{
          borderBottomColor: "transparent",

          borderBottomWidth: 0
        }}
        placeholder={"رستوران ،استخر و ..."}
        placeholderTextColor={"white"}
        onChangeText={this._onSearchInputChange}
        leftIcon={() => {
          return <CustomIcon name="ic_searchsvg2" color={"white"} size={30} />;
        }}
        leftIconContainerStyle={{ position: "absolute", top: 5 }}
      />
      <SearchFlatListContainer searchString={searchString} navigation={navigation} />
    </View>
  );
};
export default SearchScreen;
