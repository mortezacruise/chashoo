import React from "react";
import { FlatList } from "react-native";
import DiscountRow from "../../Rows/DiscountRow";
import { BASE_URL } from "../../../Values/Strings";
import { Indicator } from "../../../components/Indicator";
const headerHeight = 100;

export default class MostSoldContainer extends React.Component {
  componentWillMount() {
    this.state = {
      products: [],
      page: 1,
      loading: false,
      refreshing: false
    };

    this.getProductRequest();
  }
  render() {
    return (
      <FlatList
        data={this.state.products}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Indicator />}
        ListFooterComponent={this.renderFooter.bind(this)}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
        //loadmore onreachedend
        onEndReached={this.handleLoadMore.bind(this)}
        onEndReachedThreshold={0.1}
      />
    );
  }

  discountClick = (id, cat) => {
    this.props.navigation1.navigate("Discount", { disId: id, disCategory: cat });
  };
  renderItem = ({ item }) => {
    return <SearchRow searchItem={item} onItemSearchClick={this.discountClick} />;
  };

  handleRefresh() {
    this.setState({ page: 1, refreshing: true }, () => {
      this.getProductRequest();
    });
  }

  renderFooter() {
    if (!this.state.loading) return null;
    return <Indicator />;
  }

  handleLoadMore() {
    if (this.state.products.length > 0) {
      this.setState({ page: this.state.page + 1, loading: true }, () => {
        this.getProductRequest();
      });
    }
  }

  getProductRequest() {
    const { page } = this.state;
    fetch(BASE_URL + `/special/mostSold/${page}`)
      .then(response => response.json())

      .then(json => {
        let products = json.docs;
        if (products.length > 0) {
          this.setState(prevState => {
            return {
              products: page === 1 ? products : [...prevState.products, ...products],
              page: parseInt(json.page),
              refreshing: false
            };
          });
        }

        this.setState({ loading: false });
      })
      .catch(error => console.log({ error }));
  }
}
