import React, { Component } from "react";
import { FlatList } from "react-native-gesture-handler";
import SearchRow from "../../Rows/SearchRow";

class BookmrkListContainer extends Component {
  constructor() {
    super();
    this.state = {
      bookMarks: []
    };
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }
  forceUpdateHandler() {
    this.forceUpdate();
  }
  componentDidMount() {
  }
  _onPressDiscount = (id, cat) => {
    this.props.navigation.navigate("Discount", { disId: id, disCategory: cat });
  };

  _renderItem = ({ item }) => (
    <SearchRow onItemSearchClick={this._onPressDiscount} searchItem={item} />
  );
  

  render() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={this.props.bookMarks}
        renderItem={this._renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

export default BookmrkListContainer;
