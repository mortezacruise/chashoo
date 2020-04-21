import React, { Component } from "react";
import axios from "axios";
import { BASE_URL, AUTH_FAILED, TOKEN, NO_DISCOUNT_INCART } from "../Values/Strings";
import AsyncStorage from "@react-native-community/async-storage";
export const GetBankUrl = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN);
    axios.defaults.headers.common["Authorization"] = "Baerer " + token;

    const getBankUrl = await axios.get(BASE_URL + "/getBankUrl");
    return getBankUrl.data.URL;
  } catch (e) {
    if (e.response.data.CODE === NO_DISCOUNT_INCART) return NO_DISCOUNT_INCART;
  }
};
