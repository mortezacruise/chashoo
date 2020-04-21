import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FEATURES, TERMS_OF_USE } from "../../../../Values/Strings";
import {
  bgWhite,
  centerAll,
  el1,
  fBlack,
  fMainColor,
  fRow,
  h4,
  iranSans,
  mH8,
  padV16,
  r8,
  Tac,
  w50
} from "../../../../Values/Theme";

const Tabs = ({ onTabClick }) => {
  const [isActive, setActive] = useState(true);

  const _onFeatureClick = () => {
    onTabClick(true);
    setActive(true);
  };
  const _onTermsOfUseClick = () => {
    onTabClick(false);
    setActive(false);
  };

  return (
    <View style={[fRow, mH8, r8, bgWhite, el1, centerAll]}>
      <TouchableOpacity style={[w50]} onPress={_onFeatureClick}>
        <Text style={[iranSans, h4, Tac, isActive ? fMainColor : fBlack]}>{FEATURES}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[w50]} onPress={_onTermsOfUseClick}>
        <Text style={[iranSans, padV16, h4, Tac, isActive ? fBlack : fMainColor]}>
          {TERMS_OF_USE}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tabs;
