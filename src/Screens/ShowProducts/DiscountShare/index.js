import axios from "axios";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import CustomIcon from "../../../Utils/CustomIcon";
import { MAIN_COLOR } from "../../../Values/Colors";
import { BASE_URL } from "../../../Values/Strings";
import Share, { ShareSheet, Button } from "react-native-share";

const DiscountShare = ({ discountId }) => {
  const [discountSlides, setDiscountSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [discountDetails, setDiscountDetails] = useState([]);
  const [visible, setVisible] = useState(false);

  const getKamponDetails = async () => {
    const resGetDiscount = await axios.get(BASE_URL + "/d/" + discountId);
    setDiscountDetails(resGetDiscount.data);
  };

  useEffect(() => {
    getKamponDetails();
  }, []);

  onCancel = () => {
    setVisible(false);
  };
  onOpen = () => {
    setVisible(true);
  };
  const _share = () => {
    Share.open(shareOptions);
  };
  let shareOptions = {
    title: discountDetails.disTitle,
    message: discountDetails.disTitle,
    url: `https://www.kampon.ir/d/` + discountId,
    subject: "Kampon" //  for email
  };

  return (
    <View>
      <CustomIcon onPress={_share} name={"ic_share"} size={25} color={MAIN_COLOR} />
    </View>
  );
};

export default DiscountShare;
