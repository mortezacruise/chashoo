import React, { Component } from "react";
import CategoryList from "../../Lists/CategoryList";

export default class CategoryContainer extends Component {
  constructor() {
    super();
  }

  _onCategoryPress = async (title, id) => {
    this.props.navigate("Category", { catTitle: title, catId: id });
  };

  render() {
    return (
      <CategoryList onCategoryPress={this._onCategoryPress} cats={this.props.cats} />
    );
  }
}
