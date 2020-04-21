import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ToastAndroid } from "react-native";
import {
  Flex,
  iranSans,
  h3,
  h5,
  pad8,
  spaceB,
  h2,
  fRow,
  bgGray,
  activeButton,
  h4,
  fWhite,
  centerAll,
  fMainColor,
  r8,
  deactivButton
} from "../../Values/Theme";
import axios from "axios";

import { CheckBox, Input } from "react-native-elements";
import { screenHeight, screenWidth } from "../../Values/Constants";
import { KeyboardAvoidingView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Report } from "../../API/ReportApi";
import {
  INPUT_PERSIAN_ERROR_MGS,
  SUCCESS_REQ,
  DENIED_REQ,
  BASE_URL,
  DENIED_LOGIN
} from "../../Values/Strings";
import { Indicator } from "../../components/Indicator";
import CustomDialog from "../Modal";
const ReportAppUse = ({ navigation }) => {
  const [click, setClick] = useState(false);
  const [Items, setItems] = useState([]);
  const [disId, setDisId] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  let [textValue, setTextValue] = useState("");
  const Itemss = Items.map((item, i) => (
    <CheckBox
      key={i}
      containerStyle={[fRow, { backgroundColor: "white" }]}
      textStyle={[h2, iranSans, { alignSelf: "flex-start", fontFamily: "iran_sans" }]}
      title={item.subject}
      checkedColor="red"
      checked={click.i === i ? true : false}
      onPress={() => {
        if (item.index === i) setClick({ i, item }, setDisabled(false));
      }}
    />
  ));
  const getReportItems = async () => {
    //TODO addsubject item to list
    try {
      const resData = await axios.get(BASE_URL + "/member/reportSubjects");
      const data = resData.data;
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);

    getReportItems();
    const disId = navigation.getParam("disId", "NO-ID");
    setDisId(disId);
  }, []);
  const _changeInputText = text => {
    setTextValue(text);
  };
  const _submitReport = async () => {
    setBtnLoading(true);
    const subject = click.item.subject;
    const extraExplaination = textValue;
    // if (!subject) {
    //   return setShowAlert(true), setTitle("گزینه ها نمیتواند خالی باشد"), setStatus(2);
    // } else {
    const resReport = await Report(disId, subject, extraExplaination);
    //DODO handle codes
    if (resReport === 2026) {
      return (
        setTitle(SUCCESS_REQ), setStatus(1), setShowAlert(true), setBtnLoading(false)
      );
    } else if (resReport === 1012)
      return (
        setTitle(DENIED_LOGIN), setStatus(2), setShowAlert(true), setBtnLoading(false)
      );
    else {
      return setTitle(DENIED_REQ), setStatus(3), setShowAlert(true), setBtnLoading(false);
      // return navigation.pop();
    }
    // }
  };
  const onAcceptReq = () => {
    timeoutCheck = setTimeout(() => {
      navigation.pop();
    }, 500);
  };
  const _cancelReport = () => {
    navigation.pop();
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <ScrollView style={[bgGray]} keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled>
          <View style={[Flex, pad8, bgGray]}>
            <Text style={[iranSans, h3]}>چه مشکلی وجود دارد؟</Text>
            <Text style={[iranSans, h5]}>
              گزارش مشکل بلافاصله برای ما ارسال میشود وکارشناسان ما آن را بررسی میکنند.
            </Text>
            {isLoading ? <Indicator count={8} size={30} /> : Itemss}
            <Text style={[iranSans, h3, { marginTop: 20, marginHorizontal: 16 }]}>
              شرح مشکل:
            </Text>
            <Input
              onChangeText={_changeInputText}
              value={textValue}
              multiline={true}
              containerStyle={[{ padding: 16 }]}
              inputStyle={{
                padding: 16,
                borderColor: "transparent",
                borderWidth: 1,
                backgroundColor: "white",
                elevation: 2
              }}
              placeholder="توضیحات خود را وارد کنید"
            />
          </View>
        </KeyboardAvoidingView>
        <CustomDialog
          state={showAlert}
          title={title}
          accept={onAcceptReq}
          status={status}
          oncancel={onAcceptReq}
        />
      </ScrollView>
      <View style={[pad8, centerAll, bgGray]}>
        <TouchableOpacity
          disabled={disabled}
          style={
            disabled
              ? [deactivButton, r8, { marginTop: 20, width: screenWidth / 2 }]
              : [activeButton, r8, { marginTop: 20, width: screenWidth / 2 }]
          }
          onPress={_submitReport}
        >
          {btnLoading ? (
            <Indicator color={"white"} count={4} size={20} />
          ) : (
            <Text style={[iranSans, h4, fWhite]}>تایید</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[centerAll, { marginTop: 20, width: screenWidth / 2.5 }]}
          onPress={_cancelReport}
        >
          <Text style={[iranSans, h4, fMainColor, { textDecorationLine: "underline" }]}>
            انصراف
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ReportAppUse;

//=================================FILTER TEXT  ================================

// let newText = "";
// let notContains = "ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهیآ  1234567890";
// for (let i = 0; i < text.length; i++) {
//   if (notContains.indexOf(text[i]) > -1) {
//     newText = newText + text[i];
//   } else {
//     ToastAndroid.show(INPUT_PERSIAN_ERROR_MGS, ToastAndroid.SHORT);
//   }
// }
