import { SUBCATS } from "../Values/Strings";
import axios from "axios";

export const GetSubCats = async catId => {
  try {
    const reGetSubCats = await axios.get(SUBCATS + "/" + catId);
    return reGetSubCats.data;
  } catch (e) {
    console.log({ e });
  }
};
