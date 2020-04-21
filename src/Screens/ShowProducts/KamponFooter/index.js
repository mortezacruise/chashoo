import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { CheckToken, DeleteFromCart, toggleBookmark } from "../../../API";
import { CheckDiscountInCart } from "../../../API/CheckDiscountInCart";
import { TotalChanges } from "../../../API/TotalChanges";
import { Indicator } from "../../../Components/Indicator";
import Icon from "react-native-vector-icons/FontAwesome";
import { MAIN_COLOR } from "../../../Values/Colors";
import { AUTH_FAILED, BASE_URL, MSG_SMT_WRONG } from "../../../Values/Strings";
import {
  center,
  centerAll,
  fRow,
  fWhite,
  h4,
  iranSans,
  pad8,
  padH8,
  posAbs,
  spaceA,
  w50
} from "../../../Values/Theme";
import CustomDialog from "../../Modal";

const KamponFooter = ({ id, navigate }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mDesc, SetmDesc] = useState("");
  const [mTitle, setMTitle] = useState("");
  const [isInBookmarked, setIsInBookmarked] = useState(false);
  const [loadingBookmark, setLoadingBookmark] = useState(true);

  const _checkExistInCart = async () => {
    const resCheckInCart = await CheckDiscountInCart(id);
    setIsInCart(resCheckInCart);
    setLoading(false);
  };

  useEffect(() => {
    _checkExistInCart();
    _checkBookmarks();
  }, []);

  const _checkBookmarks = async () => {
    try {
      const isLogin = await CheckToken();
      if (isLogin) {
        const resCheckBookmark = await axios.get(BASE_URL + "/bookmark/check/" + id);
        if (resCheckBookmark.data.CODE === 2097) setIsInBookmarked(true);
        setLoadingBookmark(false);
      } else {
        setIsInBookmarked(false);
        setLoadingBookmark(false);
      }
    } catch (error) {
      if (error.response.data.CODE === 1032) setIsInBookmarked(false);
      setLoadingBookmark(false);
    }
  };

  const _HandleAddToCart = async () => {
    setBtnLoading(true);
    if (!(await CheckToken())) {
      SetmDesc("کاربر گرامی برای شروع مراحل خرید لطفا ثبت نام نمایید");
      setMTitle("بریم برای خرید");
      return setShowAlert(true);
    }

    if (isInCart) {
      // =================== Remove from  cart  ===============
      const resDeleteFromCart = await DeleteFromCart(id);
      switch (resDeleteFromCart) {
        case true:
          setIsInCart(false);
          setBtnLoading(false);
          break;
        default:
          setBtnLoading(false);
          ToastAndroid.show(MSG_SMT_WRONG, ToastAndroid.SHORT);
          break;
      }
    } else {
      // =================== Add to  cart  ===============
      const resAddToCart = await TotalChanges(id, 1);
      switch (resAddToCart) {
        case true:
          setBtnLoading(false);
          setIsInCart(true);
          break;
        case AUTH_FAILED:
          setShowAlert(true);
          setBtnLoading(false);
          break;
        default:
          setBtnLoading(false);
          ToastAndroid.show(MSG_SMT_WRONG, ToastAndroid.SHORT);
          break;
      }
    }
  };

  const _AddBookmark = async () => {
    setLoadingBookmark(true);
    const isLogin = await CheckToken();
    if (!isLogin) {
      SetmDesc("برای افزودن به علاقه مندی ها لطفا ثبت نام کنید");
      setMTitle("علاقه مندی ها  ");
      // setLoadingBookmark(false);
      return setShowAlert(true);
    } else {
      try {
        const resToggleBookmark = await toggleBookmark(id);
        const isBooked = isInBookmarked;
        setIsInBookmarked(!isBooked);
        setLoadingBookmark(false);
      } catch (error) {
        ToastAndroid.show(MSG_SMT_WRONG, ToastAndroid.SHORT);
        setLoadingBookmark(false);
      }
    }
  };

  const _gotoLoginScreen = () => {
    setShowAlert(false);
    navigate("Login");
    setBtnLoading(false);
    setLoadingBookmark(false);
  };
  const onCancle = () => {
    setShowAlert(false);
    setBtnLoading(false);
    setLoadingBookmark(false);
  };
  const ButtonAction = () => {
    setShowAlert(false);
    setBtnLoading(false);
    setLoadingBookmark(false);
  };
  // if (loading) return <Indicator size={20} count={4} />;

  return (
    <View style={[fRow, posAbs, { bottom: 0, left: 0, right: 0 }]}>
      <TouchableOpacity
        onPress={_HandleAddToCart}
        disabled={btnLoading}
        style={[
          centerAll,
          pad8,
          w50,
          isInCart ? { backgroundColor: "red" } : { backgroundColor: "#50C3C6" }
        ]}
      >
        {btnLoading ? (
          <Indicator size={20} count={3} color={"white"} />
        ) : (
          <Text style={[fWhite, iranSans, padH8, h4]}>
            {isInCart ? "حذف از سبد خرید" : "افزودن به سبد خرید"}
          </Text>
        )}
      </TouchableOpacity>
      <View style={[w50, fRow, spaceA, center, { backgroundColor: "#e8e8e8" }]}>
        {/* <DiscountShare discountId={id} /> */}

        {loadingBookmark ? (
          <Indicator size={20} count={3} color={MAIN_COLOR} />
        ) : (
          <Icon
            onPress={_AddBookmark}
            name={"bookmark"}
            color={isInBookmarked ? MAIN_COLOR : "#bbb"}
            size={25}
          />
        )}
      </View>
      <CustomDialog
        acceptButton={"تایید"}
        status={3}
        state={showAlert}
        title={mDesc}
        exButton={"انصراف"}
        accept={_gotoLoginScreen}
        oncancel={onCancle}
        ButtonAction={ButtonAction}
      />
    </View>
  );
};

export default KamponFooter;
