import React, { Component } from "react";
import { ContentList } from "../ContenetList";
class TabsContent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], isLoading: true };
  }

  async componentDidMount() {
    const { disFeatures, disTermsOfUse } = this.props.data;
    this.setState({ data: disFeatures, disTermsOfUse });
    // this.setState({ isLoading: true });
    // this.setState({ isLoading: false });
  }
  _getActiveKampons = async () => {
    const { disFeatures } = this.props.data;
    this.setState({ data: disFeatures });
  };
  _getDeactiveKampons = async () => {
    const { disTermsOfUse } = this.props.data;
    this.setState({ data: disTermsOfUse });
  };
  async componentDidUpdate(prev) {
    if (prev != this.props) {
      if (this.props.isActive) this._getActiveKampons();
      else this._getDeactiveKampons();
    }
  }
  render() {
    return <ContentList data={this.state.data} />;
  }
}

export default TabsContent;
