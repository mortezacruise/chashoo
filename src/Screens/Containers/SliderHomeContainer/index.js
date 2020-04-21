import React, { Component } from "react";
import SliderList from "../../Lists/SliderList";

export default class SliderHomeContainer extends Component {
  _handleOnClick = key => {
    this.props.navigate("Discount", { disId: key });
  };

  render() {
    return <SliderList sliders={this.props.sld} onPressSlide={this._handleOnClick} />;
  }
}
