import React, { Component } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import QRCode from "react-native-qrcode-svg";

import {
  m16,
  bgWhite,
  el2,
  pad16,
  centerAll,
  iranSans,
  h4,
  fBlack,
  mV8,
  mV4,
  center,
  Flex,
  pad8,
  fWhite,
  bgRed,
  bgGray,
  Tac,
  fRow,
  spaceB,
  mH16,
  padH16,
  bgBlack
} from "../../../../Values/Theme";
import { TouchableWithoutFeedback } from "react-native";

const KamponRow = ({ Rows, navigate }) => {
  const { disId, time, trackCode, oTitle, orderString } = Rows.kampon;
  const qr = orderString;

  _onKamponClicked = () => {
    navigate("Discount", { disId: disId });
  };

  return (
    <TouchableWithoutFeedback onPress={_onKamponClicked}>
      <View style={[Flex]}>
        <View>
          <View style={[m16]}>
            <View>
              {/*Top Part*/}
              <View
                style={[
                  bgGray,
                  pad8,
                  { borderTopLeftRadius: 8, borderTopRightRadius: 8 }
                ]}
              >
                <View>
                  <Text style={[iranSans, h4, fBlack, mV8, Tac]}>
                    از این تخفیف لذت ببر!!!
                  </Text>
                  <View style={[padH16]}>
                    <View style={[fRow, spaceB]}>
                      <Text style={[iranSans, h4, fBlack, mV4]}>نام تخفیف:</Text>
                      <Text style={[iranSans, h4, fBlack, mV4]}>{oTitle}</Text>
                    </View>

                    <View style={[{ height: 0.4, width: "100%" }, bgBlack]} />

                    <View style={[fRow, spaceB]}>
                      <Text style={[iranSans, h4, fBlack, mV4]}>تاریخ خرید:</Text>
                      <Text style={[iranSans, h4, fBlack, mV4]}>{time}</Text>
                    </View>

                    <View style={[{ height: 0.4, width: "100%" }, bgBlack]} />

                    <View style={[fRow, spaceB]}>
                      <Text style={[iranSans, h4, fBlack, mV4]}>تاریخ خرید:</Text>
                      <Text style={[iranSans, h4, fBlack, mV4]}>{time}</Text>
                    </View>

                    <View style={[{ height: 0.4, width: "100%" }, bgBlack]} />

                    <View style={[fRow, spaceB]}>
                      <Text style={[iranSans, h4, fBlack, mV4]}>کد کمپُن:</Text>
                      <Text style={[iranSans, h4, fBlack, mV4]}>{trackCode}</Text>
                    </View>
                    <View style={[centerAll]}>
                      <QRCode size={80} value={qr} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default KamponRow;
