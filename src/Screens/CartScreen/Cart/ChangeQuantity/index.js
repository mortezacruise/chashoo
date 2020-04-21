import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomIcon from "react-native-vector-icons/FontAwesome";
import { fBlack, h3, iranSans } from "../../../../Values/Theme";

export default class ChangeQuantity extends Component {
  state = {
    count: this.props.count,
    persianCount: this.props.count
  };

  componentDidMount() {
    const latinToPersianMap = [
      "۱",
      "۲",
      "۳",
      "۴",
      "۵",
      "۶",
      "۷",
      "۸",
      "۹",
      "۰"
    ];
    const latinNumbers = [
      /1/g,
      /2/g,
      /3/g,
      /4/g,
      /5/g,
      /6/g,
      /7/g,
      /8/g,
      /9/g,
      /0/g
    ];
    persianNumber = this.props.count.toString();
    for (let i = 0; i < 10; i++) {
      persianNumber = persianNumber.replace(
        latinNumbers[i],
        latinToPersianMap[i]
      );
    }
    this.setState({ persianCount: persianNumber });
  }
  _addPersian = number => {
    number = number + 1;
    persianNumber = number.toString();
    const latinToPersianMap = [
      "۱",
      "۲",
      "۳",
      "۴",
      "۵",
      "۶",
      "۷",
      "۸",
      "۹",
      "۰"
    ];
    const latinNumbers = [
      /1/g,
      /2/g,
      /3/g,
      /4/g,
      /5/g,
      /6/g,
      /7/g,
      /8/g,
      /9/g,
      /0/g
    ];

    for (let i = 0; i < 10; i++) {
      persianNumber = persianNumber.replace(
        latinNumbers[i],
        latinToPersianMap[i]
      );
    }
    return persianNumber;
  };

  _removePersian = number => {
    number = number - 1;
    persianNumber = number.toString();
    const latinToPersianMap = [
      "۱",
      "۲",
      "۳",
      "۴",
      "۵",
      "۶",
      "۷",
      "۸",
      "۹",
      "۰"
    ];
    const latinNumbers = [
      /1/g,
      /2/g,
      /3/g,
      /4/g,
      /5/g,
      /6/g,
      /7/g,
      /8/g,
      /9/g,
      /0/g
    ];

    for (let i = 0; i < 10; i++) {
      persianNumber = persianNumber.replace(
        latinNumbers[i],
        latinToPersianMap[i]
      );
    }
    return persianNumber;
  };

  onIncreaseItem = () => {
    this.props.onIncreaseItem();
    this.setState({
      persianCount: this._addPersian(this.state.count),
      count: this.state.count + 1
    });
  };
  onDecreaseItem = () => {
    this.props.onDecreaseItem();
    if (this.state.count != 1)
      this.setState({
        persianCount: this._removePersian(this.state.count),
        count: this.state.count - 1
      });
  };

  render() {
    const hitSlop = { top: 20, right: 10, bottom: 20, left: 10 };
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity
          style={styles.btnUp}
          hitSlop={hitSlop}
          onPress={this.onIncreaseItem}
        >
          <CustomIcon name="plus" size={15} color="#8BC34A" />
        </TouchableOpacity>
        <Text style={[h3, iranSans, fBlack]}>{this.state.persianCount}</Text>
        <TouchableOpacity
          style={styles.btnDown}
          hitSlop={hitSlop}
          onPress={this.onDecreaseItem}
        >
          <CustomIcon name="plus" size={15} color="#f44336" />
        </TouchableOpacity>
      </View>
    );
  }
}

ChangeQuantity.defaultProps = {
  quantity: 1,
  onChangeQuantity: () => {}
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    backgroundColor: "#f7f8fa",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d4dce1",
    borderRadius: 15
  },
  text: {
    fontSize: 18,
    // fontFamily: Constants.fontFamily,
    color: "red"
  },
  btnUp: {
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  btnDown: {
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  }
});
