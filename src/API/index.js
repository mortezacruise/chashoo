import { PostItemToCart } from "./PostItemToCart";
import { CheckLogin } from "./CheckLogin";
import { CheckToken } from "./CheckToken";
import { DeleteFromCart } from "./DeleteFromCart";
import { GetBankUrl } from "./GetBankUrl";
import { GetHomeData } from "./GetHomeData";
import { toggleBookmark } from "./toggleBookmark";
import { TOKEN } from "../Values/Strings";
import AsyncStorage from "@react-native-community/async-storage";

_setHeader = async () => {
  const token = await AsyncStorage.getItem(TOKEN);
  axios.defaults.headers.common["Authorization"] = "Baerer " + token;
};
export {
  PostItemToCart,
  CheckLogin,
  CheckToken,
  DeleteFromCart,
  GetBankUrl,
  GetHomeData,
  toggleBookmark
};
