import React, { Component } from "react";
import SliderList from "../../Lists/DiscountSliderList";

export default class SliderCategoryContainer extends Component {
  render() {
    return <SliderList sliders={this.props.slides} />;
  }
}
