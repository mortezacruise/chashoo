import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid
} from "react-native";
import {} from "react-native-animatable";
import { screenWidth } from "../../Values/Constants";
import {
  bgGray,
  bgMainColor,
  center,
  centerAll,
  Flex,
  fRow,
  fWhite,
  h4,
  iranSans,
  mV8,
  pad16,
  r100,
  s3,
  s8,
  spaceB,
  s4,
  bgWhite,
  mH8,
  h5,
  mV4,
  s24,
  s32,
  Tac,
  r8,
  padH16,
  m8,
  bgRed300
} from "../../Values/Theme";
import { BASE_URL, TOKEN } from "../../Values/Strings";
import { CheckToken } from "../../API";
import CustomIcon from "../../Utils/CustomIcon";
import { MAIN_COLOR } from "../../Values/Colors";
import RNRestart from "react-native-restart";
import { Dialog } from "react-native-simple-dialogs";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import CustomDialog from "../Modal";
import Icon from "react-native-vector-icons/FontAwesome5";

const CustomDrawerContentComponent = ({ navigation }) => {
  const [mName, setMname] = useState("");
  const [mAvatar, setmAvatar] = useState(
    require("../../Assets/Images/lg_kampon.jpg")
  );
  const [ShowAlert, setShowAlert] = useState(false);
  const [IsLogin, setIsLogin] = useState(false);
  onPressHome = () => navigation.closeDrawer();
  const onPressGotoProfile = () =>
    navigation.navigate("Profile", { cccc: "proccccp" });
  const onPressGotoLogin = () => {
    if (!IsLogin) {
      navigation.navigate("Login");
    }
  };

  const onPressBookmark = () =>
    navigation.navigate("Bookmarks", { cccc: "proccccp" });
  const onpressTermOfUse = () =>
    navigation.navigate("Support", { cccc: "proccccp" });
  const onPressAboutUs = () =>
    navigation.navigate("AboutUs", { cccc: "proccccp" });
  const onPressKampons = () =>
    navigation.navigate("Kampons", { cccc: "proccccp" });
  const onPressExit = () => {
    if (IsLogin) {
      setShowAlert(true);
    } else {
      navigation.navigate("Login");
    }
  };

  _restartApp = () => {
    setTimeout(function() {
      RNRestart.Restart();
    }, 1000);
  };
  const _gotoReastart = () => {
    setShowAlert(false);
    AsyncStorage.setItem(TOKEN, "");
    _restartApp();
  };
  const GetData = async () => {
    const isLogin = await CheckToken();
    if (isLogin) {
      setIsLogin(true);
      try {
        const memberToken = await AsyncStorage.getItem(TOKEN);
        console.log({ memberToken });

        axios.defaults.headers.common["Authorization"] =
          "Baerer " + memberToken;
        const getProfileDetails = await axios.get(BASE_URL + "/member/profile");
        setMname(getProfileDetails.data.profileInfo.mName);
        // setmAvatar({ uri: getProfileDetails.data.profileInfo.mAvatar });
      } catch (error) {
        console.log({ error });
      }
    }
  };
  useEffect(() => {
    GetData();
  }, [navigation]);
  const onAcceptReq = () => {
    _gotoReastart();
  };
  const oncancel = () => {
    setShowAlert(false);
  };
  const ButtonAction = () => {
    setShowAlert(false);
  };
  return (
    <ScrollView>
      <View style={[Flex]}>
        <View style={[{ height: screenWidth - 150 }, bgMainColor, centerAll]}>
          <TouchableOpacity onPress={onPressGotoProfile}>
            <View style={{ borderRadius: 100, overflow: "hidden" }}>
              <Image source={mAvatar} style={[s4]} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressGotoLogin}>
            <Text style={[iranSans, fWhite, h4, mV8]}>
              {mName ? mName : "ورود/ثبت نام"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[pad16]}>
          <TouchableOpacity style={[fRow, center, mV4]} onPress={onPressHome}>
            <CustomIcon name="ic_home" size={30} color={MAIN_COLOR} />
            <Text style={[iranSans, h5, mH8]}>خانه</Text>
          </TouchableOpacity>
          <View style={[bgGray, mV4, { height: 1, width: "100%" }]} />
          <TouchableOpacity
            style={[fRow, center, mV4]}
            onPress={onPressBookmark}
          >
            <CustomIcon name="ic_bookmark" size={30} color={MAIN_COLOR} />
            <Text style={[iranSans, h5, mH8]}>علاقه مندی ها</Text>
          </TouchableOpacity>
          <View style={[bgGray, mV4, { height: 1, width: "100%" }]} />

          <TouchableOpacity
            style={[fRow, center, mV4]}
            onPress={onPressKampons}
          >
            <CustomIcon name="ic_special" size={30} color={MAIN_COLOR} />
            <Text style={[iranSans, h5, mH8]}>کمپُن های من</Text>
          </TouchableOpacity>
          <View style={[bgGray, mV4, { height: 1, width: "100%" }]} />

          <TouchableOpacity
            style={[fRow, center, mV4]}
            onPress={onPressAboutUs}
          >
            <CustomIcon name="ic_support" size={30} color={MAIN_COLOR} />
            <Text style={[iranSans, h5, mH8]}>پشتیبانی</Text>
          </TouchableOpacity>
          <View style={[bgGray, mV4, { height: 1, width: "100%" }]} />
          <TouchableOpacity
            style={[fRow, center, mV4]}
            onPress={onpressTermOfUse}
          >
            <Image
              source={require("../../Assets/Png/accept.png")}
              style={[s32]}
            />
            <Text style={[iranSans, h5, mH8]}>{"قوانین و مقررات"}</Text>
          </TouchableOpacity>
          <View style={[bgGray, mV4, { height: 1, width: "100%" }]} />

          <TouchableOpacity style={[fRow, center, mV4]} onPress={onPressExit}>
            <Image
              source={require("../../Assets/Png/logout.png")}
              style={[s32, { marginRight: 0 }]}
            />
            <Text style={[iranSans, h5, mH8]}>
              {IsLogin ? "خروج " : "ورود"}
            </Text>
          </TouchableOpacity>
        </View>
        <CustomDialog
          acceptButton={"بله"}
          title={"آیا قصد خروج از حساب کاربری را دارید؟"}
          state={ShowAlert}
          accept={onAcceptReq}
          exButton={"انصراف"}
          status={3}
          oncancel={oncancel}
          ButtonAction={ButtonAction}
        />
      </View>
    </ScrollView>
  );
};

export default CustomDrawerContentComponent;
