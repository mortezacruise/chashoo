import React, { Component } from "react";
import axios from "axios";
import { BASE_URL, AUTH_FAILED, TOKEN } from "../Values/Strings";
import AsyncStorage from "@react-native-community/async-storage";
export const PostItemToCart = async (discountId, count) => {
  try {
    await axios.post(BASE_URL + "/cart", { discountId, count });
    return true;
  } catch (e) {
    return false;
  }
};
