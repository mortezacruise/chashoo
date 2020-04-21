import React, { useState } from "react";
import { View } from "react-native";
import { Flex } from "../../../Values/Theme";
import TabContent from "./TabContent";
import Tabs from "./Tabs";

const KamponTab = ({ tabContent }) => {
  const [tabActive, setTabActive] = useState(true);
  const [data, setData] = useState("ali");

  const _onTabClick = (isActive) => {
    setTabActive(isActive);
    {
      isActive ? setData("ali") : setData("gholi");
    }
  };

  return (
    <View style={[Flex]}>
      <Tabs onTabClick={_onTabClick} />
      <TabContent data={data} />
    </View>
  );
};

export default KamponTab;
