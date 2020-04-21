import React, { useEffect, useState } from "react";
import { Linking, View } from "react-native";
import { GetBankUrl } from "../../../API";
import { bgGray, Flex } from "../../../Values/Theme";
import ButtonStep from "./ButtonStep";
import CircleStep from "./CircleStep";
import ContentStep from "./ContetntStep";

const StepIconContainer = ({ navigation, ticket, memberId }) => {
  const [step, setStep] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (ticket === true) setStep(2);
  }, [ticket]);

  _onPaymentClick = () => {
    setStep(1);
  };

  _Active = id => {
    setActive(id);
  };

  _btnBackToCart = () => {
    setStep(0);
  };

  _btnGotoPayment = async () => {
    const url = await GetBankUrl();
    Linking.openURL(url);
  };

  _gotoHomePage = () => {
    setStep(0);
    navigation.navigate("Kampons");
  };

  return (
    <View style={[Flex, bgGray]}>
      <CircleStep step={step} />

      <ContentStep
        step={step}
        navigation={navigation}
        active={_Active}
        memberId={memberId}
      />

      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <ButtonStep
          action={active}
          step={step}
          onPaymentClick={this._onPaymentClick}
          btnBackToCart={this._btnBackToCart}
          btnGotoPayment={this._btnGotoPayment}
          gotoHomePage={this._gotoHomePage}
        />
      </View>
    </View>
  );
};
export default StepIconContainer;
