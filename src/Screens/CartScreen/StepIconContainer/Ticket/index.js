import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import React from "react";
import { Animated, Dimensions, PanResponder, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { BASE_URL, TOKEN } from "../../../../Values/Strings";
import {
  bgWhite,
  center,
  centerAll,
  el2,
  fBlack,
  Flex,
  fWhite,
  h4,
  iranSans,
  m16,
  mV4,
  mV8,
  pad16,
  pad8
} from "../../../../Values/Theme";
import "./styles";
import { Indicator } from "../../../../components/Indicator";

export default class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.ticketAcceptedAnimation = new Animated.Value(0);
    this.ticketHidingAnimation = new Animated.Value(0);
    this.ticketDragPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gesture) => {
        if (!this.state.ticketTaken) {
          this.setState({ ticketTaken: true, ticketTimeRemaining: 5 }, () => {
            this.startTicketHidingCountdown();

            Animated.timing(this.ticketAcceptedAnimation, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true
            }).start(() => {
              Animated.timing(this.ticketHidingAnimation, {
                toValue: 1,
                duration: 2000,
                delay: 100,
                useNativeDriver: true
              }).start(() => {
                this.onTicketTaken();
              });
            });
          });
        }
      }
    });
    this.state = {
      ticketTaken: false,
      ticketTimeRemaining: 0,
      ticketQrCode: "s",
      ticketDetails: [],
      isLoading: true
    };
  }

  startTicketHidingCountdown = () => {
    setTimeout(() => {
      const remainingTime = this.state.ticketTimeRemaining - 1;

      this.setState({
        ticketTimeRemaining: remainingTime,
        ticketTaken: remainingTime > 0
      });

      if (remainingTime > 0) {
        this.startTicketHidingCountdown();
      }
    }, 1000);
  };

  onTicketTaken = () => {};

  render() {
    const { ticketTimeRemaining } = this.state;
    const ticketStyles = {
      transform: [
        {
          translateY: this.ticketAcceptedAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 100]
          })
        },
        {
          scale: this.ticketHidingAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
          })
        }
      ],
      opacity: this.ticketHidingAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
      })
    };
    const qr = this.state.ticketQrCode;

    if (this.state.isLoading) return <Indicator />;
    return (
      <View style={{ height: Dimensions.get("window").height / 1.7 }}>
        <View>
          <Animated.View style={[m16, ticketStyles]}>
            <View>
              {/*Top Part*/}
              <View style={[bgWhite, el2, pad16]}>
                <View style={[centerAll]}>
                  <Text style={[iranSans, h4, fBlack, mV8]}>از این تخفیف لذت ببر!!!</Text>
                  <Text style={[iranSans, h4, fBlack, mV4]}>
                    {this.state.ticketDetails.kampon.oTitle}
                  </Text>
                  <Text style={[iranSans, h4, fBlack, mV4]}>
                    تاریخ خرید: {this.state.ticketDetails.kampon.time}
                  </Text>
                  <Text style={[iranSans, h4, fBlack, mV4]}>
                    کد کمپُن : {this.state.ticketDetails.kampon.trackCode}
                  </Text>
                  <QRCode size={80} value={qr} />
                </View>
              </View>
              {/*Bottom Part*/}
              <View
                {...this.ticketDragPanResponder.panHandlers}
                style={sty.secondPartContainer}
              >
                <View style={[center, Flex]}>
                  <Text style={[iranSans, fWhite, pad8, { alignSelf: "center" }]}>
                    دریافت کمپُن
                  </Text>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
  async componentDidMount() {
    try {
      const token = await AsyncStorage.getItem(TOKEN);
      axios.defaults.headers.common["Authorization"] = "Baerer " + token;
      const GetOrderString = await axios.get(BASE_URL + "/member/kampons");
      this.setState({
        ticketDetails: GetOrderString.data[0],
        qr: GetOrderString.data[0].orderString,
        isLoading: false
      });
    } catch (error) {}
  }
}
