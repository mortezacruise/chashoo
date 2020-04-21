import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { AUTH_FAILED, AUTH_SUCCESS } from "../Common/Strings";
import { BASE_URL, SUCCESS_EXIST_IN_CART, TOKEN } from "../Values/Strings";
export const CheckDiscountInCart = async discountID => {
  try {
    const token = await AsyncStorage.getItem(TOKEN);
    if (token === null) throw new Error(AUTH_FAILED);

    axios.defaults.headers.common["Authorization"] = "Baerer " + token;
    const resCheckToken = await axios.get(BASE_URL + "/checkToken");
    if (resCheckToken.data.CODE != AUTH_SUCCESS) throw new Error(AUTH_FAILED);
    const resCheckDiscountInCart = await axios.get(BASE_URL + "/checkCart/" + discountID);
    if (resCheckDiscountInCart.data.CODE === SUCCESS_EXIST_IN_CART) return true;

    return new Error(AUTH_FAILED);
  } catch (e) {
    return false;
  }
};
