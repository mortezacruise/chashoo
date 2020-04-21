import axios from "axios";
import { CHECK_TOKEN, INTERNET_ERROR_MSG, TOKEN } from "../Values/Strings";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

export const CheckToken = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN);
    axios.defaults.headers.common["Authorization"] = "Baerer " + token;
    await axios.get(CHECK_TOKEN);
    return true;
  } catch (e) {
    if (e.message === "Network Error")
      return ToastAndroid.show(INTERNET_ERROR_MSG, ToastAndroid.SHORT);
    return false;
  }
};
