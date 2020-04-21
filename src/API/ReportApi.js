import axios from "axios";
import { CheckToken } from ".";
import {
  ADD_BOOKMARK,
  BOOKMARK_ADDED,
  NO_INTERNET,
  SMT_WRONG,
  REPORT,
  TOKEN
} from "../Values/Strings";
import AsyncStorage from "@react-native-community/async-storage";

export const Report = async (disId, subjects, extraExplaination) => {
  try {
    const token = await AsyncStorage.getItem(TOKEN);
    axios.defaults.headers.common["Authorization"] = "Baerer " + token;

    const res = await axios.post(REPORT, {
      disId: disId,
      subjects: [subjects],
      extraExplaination: extraExplaination
    });
    return res.data.CODE;
  } catch (error) {
    console.log({ err: error });
    if (error.message === "Network Error") return NO_INTERNET;
    else if (error.response.data.ERROR === 1012) return 1012;

    return SMT_WRONG;
  }
};
