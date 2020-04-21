import axios from "axios";
import { CheckToken } from ".";
import { ADD_BOOKMARK, BOOKMARK_ADDED, NO_INTERNET, SMT_WRONG } from "../Values/Strings";
export const toggleBookmark = async discountId => {
  try {
    if (await CheckToken()) {
      await axios.post(ADD_BOOKMARK, { discountId });
      return BOOKMARK_ADDED;
    } else {
      return SMT_WRONG;
    }
  } catch (error) {
    if (error.message === "Network Error") return NO_INTERNET;
    return SMT_WRONG;
  }
};
