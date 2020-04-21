import React, { Component } from "react";
import { ContentList } from "../ContenetList";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { TOKEN, BASE_URL } from "../../../../Values/Strings";
class TabsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      UsedItems: [],
      ActtiveItems: [],
      filteredData: []
    };
  }

  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem(TOKEN);
      axios.defaults.headers.common["Authorization"] = "Baerer " + token;
      const GetOrderString = await axios.get(BASE_URL + "/member/kampons");
      const Order = GetOrderString.data;
      this.setState({ data: Order });
      this._getActiveKampons();
    } catch (error) {}
  }
  _getActiveKampons = () => {
    const UsedItems = this.state.data.filter(data => {
      return (data = data.kampon.isUsed === false);
    });
    this.setState({ filteredData: UsedItems });
  };
  _getDeactiveKampons = () => {
    const UnUsedItems = this.state.data.filter(data => {
      return (data = data.kampon.isUsed === true);
    });
    this.setState({ filteredData: UnUsedItems });
  };
  async componentDidUpdate(prev) {
    if (prev != this.props) {
      if (this.props.isActive) this._getActiveKampons();
      else this._getDeactiveKampons();
    }
  }
  render() {
    return <ContentList navigate={this.props.navigate} data={this.state.filteredData} />;
  }
}

export default TabsContent;
