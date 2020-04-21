import AsyncStorage from "@react-native-community/async-storage";
import React, { Component } from "react";
import { IS_LOGIN, TOKEN } from "../../Common/Strings";
import EnterMobile from "./InterMobile";
import EnterName from "./EnterName";
import EnterToken from "./InterToken";

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      flagInputs: 1,
      mPhoneNumber: "",
      isNewMember: false,
      isShowEnterName: false,
      mobile: { value: "", error: "" },
      isToken: false,
      v1: "",
      v2: "",
      v3: "",
      v4: ""
    };
  }

  _checkNewMember = (isNewMember, mPhoneNumber) => {
    this.setState({ isNewMember, mPhoneNumber, isToken: true });
  };

  _onEnterTokenDone = () => {
    if (this.state.isNewMember) return this.setState({ isShowEnterName: true });
    else this._onEnterNameDone();
  };

  _onEnterNameDone = async () => {
    this.props.navigation.navigate("Home");
  };
  render() {
    if (this.state.isShowEnterName)
      return (
        <EnterName
          mPhoneNumber={this.state.mPhoneNumber}
          onEnterNameDone={this._onEnterNameDone}
        />
      );
    if (this.state.isToken)
      return (
        <EnterToken
          onTokenDone={this._onEnterTokenDone}
          mPhoneNumber={this.state.mPhoneNumber}
        />
      );
    else return <EnterMobile checkNewMember={this._checkNewMember} />;
  }
}
