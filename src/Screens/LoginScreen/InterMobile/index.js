import axios from "axios";
import { bgGreen } from "colorette";
import React, { Component } from "react";
import { Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { screenWidth } from "../../../Values/Constants";
import { BASE_URL, MOBILE_WRONG, MSG_SMT_WRONG } from "../../../Values/Strings";
import {
  activeButton,
  bgMainColor,
  fMainColor,
  fWhite,
  h1,
  h3,
  h4,
  iranSans,
  mV8,
  pad32,
  r8,
  Tac,
  tCenter
} from "../../../Values/Theme";
import styles from "./styles";
import { Indicator } from "../../../components/Indicator";

export default class EnterMobile extends Component {
  state = { mobile: { value: "", error: "" }, isLoading: false, btnLoading: false };

  _changeMobileInput = text => {
    let newText = "";
    let numbers = "0123456789";
    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        if (text.charAt(0) != "0")
          return ToastAndroid.show("شماره همراه اشتباه است", ToastAndroid.SHORT);
        if (text.length > 1 && text.charAt(1) != "9")
          return ToastAndroid.show("شماره همراه اشتباه است", ToastAndroid.SHORT);

        newText = newText + text[i];
      } else return ToastAndroid.show("شماره همراه اشتباه است", ToastAndroid.SHORT);
    }

    this.setState({ mobile: { value: newText, error: "" } });
  };

  _checkDisplay(field) {
    return { display: field === "" ? "none" : "flex" };
  }

  _login = async () => {
    this.setState({ btnLoading: true });
    let { mobile } = this.state;
    if (mobile.value === "") {
      ToastAndroid.show(MOBILE_WRONG, ToastAndroid.SHORT);
      return this.setState({ btnLoading: false });
    } else if (
      mobile.value.charAt(0) != 0 ||
      mobile.value.charAt(1) != 9 ||
      mobile.value.length !== 11
    ) {
      ToastAndroid.show(MOBILE_WRONG, ToastAndroid.SHORT);
      return this.setState({ btnLoading: false });
    }
    try {
      const resSendMobile = await axios.post(BASE_URL + "/member/getCode", {
        mPhoneNumber: this.state.mobile.value
      });
      this.props.checkNewMember(resSendMobile.data.isNewMember, mobile.value);
    } catch ({ e }) {
      ToastAndroid.show(MSG_SMT_WRONG, ToastAndroid.SHORT);
      this.setState({ btnLoading: false });
    }
  };

  render() {
    return (
      <View style={styles.login}>
        <View style={[bgMainColor, pad32, r8, { width: screenWidth - 100 }]}>
          <Text style={[iranSans, fWhite, h1, Tac]}>ورود به کمپُن</Text>
          <Text style={[iranSans, fWhite, h4, tCenter]}>
            برای ورود به کمپُن لطفا شماره خود را وارد کنید
          </Text>
          <TextInput
            style={[
              bgGreen,
              iranSans,
              h3,
              Tac,
              fWhite,
              mV8,
              {
                width: screenWidth / 2,
                height: screenWidth / 5,
                alignSelf: "center"
              }
            ]}
            maxLength={11}
            keyboardType={"numeric"}
            multiline={false}
            borderBottomColor="#ff0000"
            placeholder="09 - -  - - -  - -  - -"
            placeholderTextColor={"#FFF"}
            onChangeText={this._changeMobileInput}
            value={this.state.mobile.value}
          />

          {this.state.btnLoading ? (
            <TouchableOpacity
              disabled={true}
              style={[
                activeButton,
                mV8,
                { backgroundColor: "#eee", alignSelf: "center" }
              ]}
            >
              <Indicator count={3} size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[
                activeButton,
                mV8,
                { backgroundColor: "white", alignSelf: "center" }
              ]}
              onPress={this._login}
            >
              <Text style={[iranSans, fMainColor, h3]}>ورود</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
