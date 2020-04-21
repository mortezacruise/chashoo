import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { activeButton, mV8, iranSans, h4, fWhite } from "../../../../Values/Theme";
import { screenWidth } from "../../../../Values/Constants";

export default class ButtonStep extends Component {
  _btnPaymentClick = () => {
    this.props.onPaymentClick();
  };

  _btnBackToCart = () => {
    this.props.btnBackToCart();
  };

  _btnGotoPayment = () => {
    this.props.btnGotoPayment();
  };

  _gotoHomePage = () => {
    this.props.gotoHomePage();
  };
  render() {
    switch (this.props.step) {
      case 0:
        if (this.props.action) {
          return (<TouchableWithoutFeedback
            disabled={this.props.action}
            style={[activeButton, mV8, { backgroundColor: "#e8e8e8", width: screenWidth / 1.5, alignSelf: 'center', height: 40 }]}
            onPress={this._btnPaymentClick}>
            <Text style={[iranSans, h4, fWhite]}>سبد خرید خالی است</Text>
          </TouchableWithoutFeedback>);
        } else {
          return (<TouchableWithoutFeedback
            disabled={this.props.action}
            style={[activeButton, mV8, { width: screenWidth / 1.5, alignSelf: 'center', height: 40 }]}
            onPress={this._btnPaymentClick}>
            <Text style={[iranSans, h4, fWhite]}>پرداخت</Text>
          </TouchableWithoutFeedback>);
        }
      case 1:
        return (
          <View style={styles.PaymentScreen}>
            <TouchableWithoutFeedback
              style={styles.btnPayment}
              onPress={this._btnBackToCart}
            >
              <Text style={[styles.btnTitle, iranSans]}>بازگشت</Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              style={styles.btnPayment}
              onPress={this._btnGotoPayment}
            >
              <Text style={[styles.btnTitle, iranSans]}>ورود به درگاه</Text>
            </TouchableWithoutFeedback>
          </View>
        );
      case 2:
        return (
          <TouchableWithoutFeedback style={styles.btnNext} onPress={this._gotoHomePage}>
            <Text style={[styles.btnTitle, iranSans, h4]}>مشاهده کمپُن های من</Text>
          </TouchableWithoutFeedback>
        );
    }
  }
}
