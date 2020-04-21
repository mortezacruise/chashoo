import React, { Component } from "react";
import axios from "axios";
import { BASE_URL, AUTH_FAILED, TOKEN } from "../Values/Strings";
import AsyncStorage from "@react-native-community/async-storage";
export const DeleteFromCart = async discountId => {
  try {
    const token = await AsyncStorage.getItem(TOKEN);
    axios.defaults.headers.common["Authorization"] = "Baerer " + token;
    await axios.delete(BASE_URL + `/cart/${discountId}`);
    return true;
  } catch (e) {
    return false;
  }
};
