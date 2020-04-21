import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from "react-native";
import { screenWidth } from "../../../Values/Constants";
import { BASE_URL, TOKEN } from "../../../Values/Strings";
import {
  activeButton,
  bgMainColor,
  centerAll,
  el1,
  Flex,
  fMainColor,
  fWhite,
  h3,
  h4,
  iranSans,
  mV16,
  pad8,
  r8
} from "../../../Values/Theme";
import styles from "./styles";

const EnterName = ({ onEnterNameDone, mPhoneNumber }) => {
  const [nameValue, setNameValue] = useState("");

  const _submit = async () => {
    if (nameValue.length < 3) {
      ToastAndroid.show("لطفا نام خود را وارد کنید", ToastAndroid.SHORT);
    } else {
      try {
        const token = await AsyncStorage.getItem(TOKEN);
        axios.defaults.headers.common["Authorization"] = "Baerer " + token;

        const resSendName = await axios.put(BASE_URL + "/member/profile", {
          mName: nameValue
        });
        onEnterNameDone();
      } catch (e) {}
    }
  };

  const _changeInputName = text => {
    let newText = "";
    let notContains = "ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیآ ";
    for (var i = 0; i < text.length; i++) {
      if (notContains.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        ToastAndroid.show(
          "لطفا از حروف فارسی استفاده  کنید",
          ToastAndroid.SHORT
        );
      }
    }
    setNameValue(newText);
  };

  return (
    <View style={[Flex, centerAll, pad8]}>
      <View
        style={[
          bgMainColor,
          r8,
          el1,
          pad8,
          centerAll,
          { width: screenWidth - 100 }
        ]}
      >
        <Text style={[iranSans, fWhite, h3]}>ورود به کمپُن </Text>
        <Text style={[iranSans, fWhite, h4]}>نام خود را وارد کنید</Text>
        <View style={styles.item}>
          <TextInput
            onChangeText={_changeInputName}
            style={[
              fWhite,
              h3,
              mV16,
              iranSans,
              {
                alignSelf: "center",
                width: screenWidth / 2,
                textAlign: "center",
                height: 48
              }
            ]}
            multiline={false}
            placeholder={"نام کامل"}
            maxLength={20}
            placeholderTextColor={"#eeeeee"}
            value={nameValue}
          />
        </View>
        <TouchableOpacity
          style={[activeButton, { backgroundColor: "white" }]}
          onPress={_submit}
        >
          <Text style={[iranSans, h3, fMainColor]}>پایان ثبت نام</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default EnterName;
