import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import FirstIntro from "./FirstIntro";
import SecondIntro from "./SecondIntro";
import ThirdIntro from "./ThirdIntro";
import ForthIntro from "./ForthIntro";
import { GetHomeData } from "../../API";
import AsyncStorage from "@react-native-community/async-storage";
import { SHOW_INTRO } from "../../Values/Strings";
import { s24, s32 } from "../../Values/Theme";
import CustomIcon from "../../Utils/CustomIcon";



const slides = [{ key: "1" }, { key: "2" }, { key: "3" }, { key: "4" }];

export default class IntroScreen extends React.Component {
  constructor() {
    super();
    this.state = { discounts: [], cats: [], slides: [] };
  }
  _renderNextButton = () => {
    return <Image style={[s32]} source={require("../../Assets/Png/ic_left.png")} />;
  };
  _renderDoneButton = () => {
    return <CustomIcon color={"white"} size={30} name={"ic_home"} />;
  };
  doneBtnHandle = () => {
    const Data = {
      discounts: this.state.discounts,
      slides: this.state.slides,
      cats: this.state.cats
    };
    AsyncStorage.setItem(SHOW_INTRO, "false");
    this.props.navigation.navigate("Home", { data: Data });
  };
  async componentDidMount() {
    const { cats, discounts, slides } = await GetHomeData();
    this.setState({ cats, discounts, slides });
  }
  _renderItem = item => {
    switch (item.index) {
      case 0:
        return <FirstIntro />;
      case 1:
        return <SecondIntro />;
      case 2:
        return <ThirdIntro />;
      case 3:
        return <ForthIntro />;
    }
  };

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        onDone={this.doneBtnHandle}
      />
    );
  }
}
