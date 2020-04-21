import React from "react";
import { FlatList } from "react-native";
import { Indicator } from "../../../components/Indicator";
import { BASE_URL } from "../../../Values/Strings";
import SearchRow from "../../Rows/SearchRow";
const headerHeight = 100;

export default class InfinityScrollCategoryContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      page: 1,
      loading: false,
      refreshing: false,
      subCat: null
    };
  }

  componentDidMount() {
    this.getProductRequest();
  }
  render() {
    return (
      <FlatList
        data={this.state.products}
        showsVerticalScrollIndicator={false}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Indicator />}
        ListFooterComponent={this.renderFooter.bind(this)}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
        onEndReached={this.handleLoadMore.bind(this)}
        onEndReachedThreshold={0.1}
      />
    );
  }

  discountClick = (id, cat) => {
    this.props.navigation.navigate("Discount", { disId: id, disCategory: cat });
  };
  renderItem = ({ item }) => {
    return (
      <SearchRow searchItem={item} onItemSearchClick={this.discountClick} />
    );
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

  getProductRequest = () => {
    const { page } = this.state;
    if (this.props.subCat) {
      fetch(
        BASE_URL + `/d/${this.props.selectedCat}/${this.props.subCat}/${page}`
      )
        .then(response => response.json())
        .then(json => {
          let products = json.docs;

          if (products.length > 0) {
            this.setState(prevState => {
              return {
                products:
                  page === 1 ? products : [...prevState.products, ...products],
                page: parseInt(json.page),
                refreshing: false
              };
            });
          }

          this.setState({ loading: false });
        })
        .catch(error => console.log({ error }));
    } else {
      fetch(BASE_URL + `/d/${this.props.selectedCat}/${page}`)
        .then(response => response.json())
        .then(json => {
          console.log({ json });

          let products = json.docs;
          console.log({ products });

          if (products.length > 0) {
            this.setState(prevState => {
              return {
                products:
                  page === 1 ? products : [...prevState.products, ...products],
                page: parseInt(json.page),
                refreshing: false
              };
            });
          }

          this.setState({ loading: false });
        })
        .catch(error => console.log({ error }));
    }
  };
  // componentWillReceiveProps() {
  //   const subCat = this.props.subCat;
  //   this.setState({ subCat });
  //   this.getProductRequest();
  // }
}
