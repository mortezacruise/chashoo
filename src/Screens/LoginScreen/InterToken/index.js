import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
  ToastAndroid
} from "react-native";
import styles from "./styles";
import axios from "axios";
import { BASE_URL, TOKEN, MSG_SMT_WRONG } from "../../../Values/Strings";
import AsyncStorage from "@react-native-community/async-storage";
import {
  bgMainColor,
  Flex,
  centerAll,
  r8,
  iranSans,
  fWhite,
  h1,
  Tac,
  h4,
  h2,
  activeButton,
  fMainColor,
  h3,
  mV8
} from "../../../Values/Theme";
import { screenWidth } from "../../../Values/Constants";
import { Indicator } from "../../../components/Indicator";

export default class EnterToken extends Component {
  state = { token: "", btnLoading: false };

  _checkDisplay(field) {
    return { display: field === "" ? "none" : "flex" };
  }

  _onTokenChange = text => {
    let newText = "";
    let numbers = "0123456789";
    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) newText = newText + text[i];
      else ToastAndroid.show("لطفا از اعداد استفاده نمایید", ToastAndroid.SHORT);
    }
    this.setState({ token: newText });
  };
  makeToken = async () => {
    this.setState({ btnLoading: true });
    if (this.state.token.length < 4) {
      ToastAndroid.show("کد وارد شده اشتباه است", ToastAndroid.SHORT);
      this.setState({ btnLoading: false });
    }
    try {
      const resSendToken = await axios.post(BASE_URL + "/member/verifyCode", {
        mPhoneNumber: this.props.mPhoneNumber,
        mCode: this.state.token
      });
      await AsyncStorage.setItem(TOKEN, resSendToken.data.token);
      this.props.onTokenDone();
    } catch (e) {
      ToastAndroid.show(MSG_SMT_WRONG, ToastAndroid.SHORT);
      this.setState({ btnLoading: false });
    }
  };

  render() {
    return (
      <View style={[Flex, centerAll]}>
        <View style={[bgMainColor, r8, { width: screenWidth - 100 }]}>
          <Text style={[iranSans, fWhite, h1, Tac]}>ورود به کمپُن</Text>
          <Text style={[iranSans, fWhite, h4, Tac]}>کد دریافتی را وارد نمایید</Text>
          <View>
            <TextInput
              onChangeText={this._onTokenChange}
              ref="input4"
              style={[
                fWhite,
                h3,
                iranSans,
                { alignSelf: "center", width: screenWidth / 2, textAlign: "center" },
                mV8
              ]}
              placeholder={"- - - -"}
              maxLength={4}
              placeholderTextColor="white"
              keyboardType={"numeric"}
              value={this.state.token}
            />
          </View>
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
              onPress={this.makeToken}
            >
              <Text style={[iranSans, fMainColor, h3]}>ثبت</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
