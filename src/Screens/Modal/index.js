import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Dialog } from "react-native-simple-dialogs";
import {
  Flex,
  rMain,
  centerAll,
  pad8,
  m8,
  bgMainColor,
  h5,
  iranSans,
  fWhite,
  fRow,
  Tac,
  h4,
  s100,
  bgRed300,
  r8
} from "../../Values/Theme";
const CustomDialog = ({
  state = false,
  title = "",
  accept,
  status,
  oncancel,
  ButtonAction,
  exButton,
  acceptButton = "تایید"
}) => {
  useEffect(() => {
    setShowAlert(state);
  }, [state, status]);
  useEffect(() => {
    switch (status) {
      case 1:
        return setSource(Sucsess), setColor("green");
      case 2:
        return setSource(Denied), setColor("red");
      case 3:
        return setSource(exclamition), setColor("orange");
    }
  });
  const _onAccept = () => {
    setShowAlert(false);
    accept();
  };
  const _onCancel = () => {
    oncancel();
  };
  const exButtonAction = () => {
    ButtonAction();
  };
  const Sucsess = require("../../Assets/Png/checked.png");
  const Denied = require("../../Assets/Png/error.png");
  const exclamition = require("../../Assets/Png/warning.png");
  const [showAlert, setShowAlert] = useState(false);
  const [source, setSource] = useState(Sucsess);
  const [color, setColor] = useState("green");

  return (
    <View>
      <Dialog
        dialogStyle={{ borderRadius: 25, borderColor: color, borderWidth: 2 }}
        animationType={"fade"}
        titleStyle={[iranSans, h4, Tac]}
        visible={state && showAlert}
        title={title}
        onTouchOutside={() => {
          setShowAlert(false), _onCancel();
        }}
      >
        <View style={[centerAll]}>
          <Image style={[s100, { marginBottom: 16 }]} source={source} />
          <View style={[fRow, centerAll]}>
            <TouchableOpacity
              onPress={_onAccept}
              style={[{ width: 100, height: 32 }, centerAll, pad8, m8, bgMainColor, r8]}
            >
              <Text style={[fWhite, iranSans, rMain, h5]}>{acceptButton}</Text>
            </TouchableOpacity>
            {exButton ? (
              <TouchableOpacity
                onPress={exButtonAction}
                style={[{ width: 100, height: 32 }, centerAll, pad8, m8, bgRed300, r8]}
              >
                <Text style={[fWhite, iranSans, rMain, h5]}>{exButton}</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </Dialog>
    </View>
  );
};
export default CustomDialog;
