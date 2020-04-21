import React, { Component } from "react";
import { BASE_URL, AUTH_FAILED, TOKEN, IS_LOGIN, AUTH_SUCCESS } from "../Values/Strings";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
export const CheckLogin = async () => {
  // =================== Get user is Login from async storage  ===============
  try {
    const isLogin = await AsyncStorage.getItem(IS_LOGIN);
    if (isLogin === "1") {
      // =================== User Login  ===============
      const memberToken = await AsyncStorage.getItem(TOKEN);
      axios.defaults.headers.common["Authorization"] = "Baerer " + memberToken;
      const resCheckToken = await axios.get(BASE_URL + "/checkToken");
      if (resCheckToken.data.CODE === AUTH_SUCCESS) return true;
      else throw new Error(AUTH_FAILED);
    } else throw new Error(AUTH_FAILED);
  } catch (e) {
    return false;
  }
};
