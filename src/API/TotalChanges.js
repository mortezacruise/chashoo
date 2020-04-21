import React, { Component } from "react";
import axios from "axios";
import { BASE_URL, AUTH_FAILED, TOKEN } from "../Values/Strings";
import AsyncStorage from "@react-native-community/async-storage";
export const TotalChanges = async (discountId, count) => {
  try {
    const token = await AsyncStorage.getItem(TOKEN);
    axios.defaults.headers.common["Authorization"] = "Baerer " + token;
 await axios.put(BASE_URL + `/cart/${discountId}/${count}`);
    return true;
  } catch (e) {
    return false;
  }
};
