import AsyncStorage from "@react-native-community/async-storage";
import { SHOW_INTRO } from "../Values/Strings";

export const CheckShowIntro = async isShwo => {
  const showIntro = await AsyncStorage.getItem(SHOW_INTRO, isShwo);
  if (showIntro == null) return true;
  else return false;
};

export const SetShowIntro = async isShwo => {
  try {
    const showIntro = await AsyncStorage.setItem(SHOW_INTRO, isShwo);

    return true;
  } catch (error) {
    return false;
  }
};
