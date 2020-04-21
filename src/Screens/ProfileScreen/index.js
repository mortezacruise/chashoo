import axios from "axios";
import React from "react";
import {
  Button,
  ImageBackground,
  Text,
  TextInput,
  View,
  Image,
  BackHandler,
  TouchableOpacity
} from "react-native";
import ImagePicker from "react-native-image-picker";
import { BarIndicator } from "react-native-indicators";
import Modal from "react-native-modal";
import Permissions from "react-native-permissions";
import Icon from "react-native-vector-icons/FontAwesome";
import { CheckLogin, CheckToken } from "../../API";
import PersianText from "../../Common/Persian/PersianText";
import { Indicator } from "../../components/Indicator";
import {
  ADDRESS_MEMBER,
  BASE_URL,
  EMAIL_ADDRESS,
  MOBILE_NUMBERR,
  PROFILE_LOGIN_MSG
} from "../../Values/Strings";
import {
  bgMainColor,
  bgWhite,
  centerAll,
  deactivButton,
  Flex,
  fMainColor,
  fWhite,
  h4,
  h5,
  iranSans,
  mV16,
  r100,
  pad8,
  pad4,
  posAbs,
  s32,
  s24,
  h3,
  bgGray,
  m8,
  el1,
  r8,
  m32,
  mH16,
  bgRed,
  fRed,
  fRow,
  spaceB,
  center,
  h2,
  mV8,
  spaceA,
  activeButton,
  mV4,
  Tac,
  pad16,
  pad32
} from "../../Values/Theme";
import styles from "./styles";
import CustomIcon from "../../Utils/CustomIcon";
import { MAIN_COLOR } from "../../Values/Colors";
import { screenWidth } from "../../Values/Constants";
import ImageResizer from "react-native-image-resizer";
import { Dialog } from "react-native-simple-dialogs";

const options = {
  title: "عکس خود را انتخاب کنید",
  takePhotoButtonTitle: "دوربین",
  chooseFromLibraryButtonTitle: "گالری"
};

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
      modalTitle: "",
      modalInput: "",
      modalRef: "",
      mAvatar: "",
      email: null,
      mobile: "",
      address: null,
      isLogin: false,
      ordersCount: 0,
      usedOrdersCount: 0,
      mPhoneNumber: null,
      isloading: true,
      imageLoading: false,
      mAvatarNew: null
    };
  }
  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);

    try {
      const isLogin = await CheckToken();
      this.setState({ isLogin });
    } catch (error) {}
    try {
      const GetProfalDetals = await axios.get(BASE_URL + "/member/profile");
      const { ordersCount, usedOrdersCount } = GetProfalDetals.data;
      const {
        mAvatar,
        mPhoneNumber,
        mName,
        mEmail,
        mAddress
      } = GetProfalDetals.data.profileInfo;
      this.setState({
        ordersCount,
        mPhoneNumber,
        usedOrdersCount,
        mAvatar,
        mName,
        email: mEmail,
        address: mAddress
      });
      this.setState({ isloading: false });
    } catch (error) {
      this.setState({ isloading: false });
    }
  }
  componentWillReceiveProps() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    this.componentDidMount();
  }
  //============================= PICK IMAGE |FROM STORAGE ==========================
  _requestPermission = () => {
    this.setState({ imageLoading: true });
    Permissions.check("photo").then(response => {
      if (response === "denied" || response === "undetermined") {
        Permissions.request("photo").then(res => {
          ImagePicker.showImagePicker(options, async response => {
            if (response.didCancel) {
              this.setState({ imageLoading: false });
            } else if (response.error) {
              this.setState({ imageLoading: false });
            } else {
              // let source = { uri: response.uri };
              this.setState({ mAvatarNew: response.uri });
              await this._uplodaChangedDataToServer();
              this.setState({ imageLoading: false });
            }
          });
        });
      } else if (response === "authorized") {
        this.setState({ imageLoading: true });

        ImagePicker.showImagePicker(options, async response => {
          if (response.didCancel) {
            this.setState({ imageLoading: false });
          } else if (response.error) {
          } else {
            let source = response.uri;
            this.setState({
              mAvatarNew: source
            });
            await this._uplodaChangedDataToServer();
            this.setState({ imageLoading: false });
          }
        });
      }
    });
  };
  _uplodaChangedDataToServer = async type => {
    try {
      if (
        this.state.mAvatarNew &&
        this.state.mAvatar != this.state.mAvatarNew
      ) {
        ImageResizer.createResizedImage(
          this.state.mAvatarNew,
          300,
          300,
          "JPEG",
          100,
          0,
          null
        )
          .then(async response => {
            let formData = new FormData();
            formData.append("image", {
              uri: response.uri,
              name: "image.jpeg",
              type: "image/jpeg"
            });
            const uploadAvatar = await axios.post(
              BASE_URL + "/member/u",
              formData
            );
            await this.setState({ mAvatar: uploadAvatar.data.url });
            const sendProfalDetals = await axios.put(
              BASE_URL + "/member/profile",
              {
                mName: this.state.mName,
                mAvatar: this.state.mAvatar,
                mEmail: this.state.email,
                mAddress: this.state.address
              }
            );
          })
          .catch(err => {
            this.setState({ imageLoading: false });
          });
      }
      const param = async () => {
        switch (type) {
          case "email":
            const ss = await axios.put(BASE_URL + "/member/profile", {
              mEmail: this.state.email
            });
            console.log({ ss });
            break;
          case "address":
            const ff = await axios.put(BASE_URL + "/member/profile", {
              mAddress: this.state.address
            });
            console.log({ ff });
          case "name":
            const ffss = await axios.put(BASE_URL + "/member/profile", {
              mName: this.state.mName
            });
          default:
            return console.log("default");
        }
      };
      param();
      // const sendProfalDetals = await axios.put(BASE_URL + "/member/profile", {
      //   Params
      // });

      // mName: this.state.mName,
      // mAvatar: this.state.mAvatar,

      // mAddress: this.state.address
      //==========================PUT DATA ++++++++++++++++++++++++
    } catch (error) {}
  };

  _modalClosed = async event => {
    let newMmodalRef = this.state.modalRef;
    switch (newMmodalRef) {
      case "email":
        if (this.refs[newMmodalRef]._lastNativeText) {
          let dataShouldChange = this.refs[newMmodalRef]._lastNativeText;

          await this.setState({ email: dataShouldChange });

          this._uplodaChangedDataToServer("email");
        }
        break;
      case "mobile":
        if (this.refs[newMmodalRef]._lastNativeText) {
          let dataShouldChange = this.refs[newMmodalRef]._lastNativeText;
          await this.setState({ mPhoneNumber: dataShouldChange });
          this._uplodaChangedDataToServer();
        }
        break;
      case "address":
        if (this.refs[newMmodalRef]._lastNativeText) {
          let dataShouldChange = this.refs[newMmodalRef]._lastNativeText;
          await this.setState({ address: dataShouldChange });
          this._uplodaChangedDataToServer("address");
        }
        break;
      case "name":
        if (this.refs[newMmodalRef]._lastNativeText) {
          let dataShouldChange = this.refs[newMmodalRef]._lastNativeText;
          await this.setState({ mName: dataShouldChange });
          this._uplodaChangedDataToServer("name");
        }
        break;
    }
    this.setState({ visibleModal: false });
  };

  handleBackPress = () => {
    this.props.navigation.navigate("Home");
    return true;
  };

  render() {
    if (this.state.isloading) {
      return <Indicator />;
    } else {
      if (this.state.isLogin) {
        return (
          <View style={[styles.profileContainer, bgGray]}>
            <View style={styles.profileTopContainer}>
              <View style={{ position: "relative" }}>
                <ImageBackground
                  style={[styles.profileImage]}
                  source={require("../../Assets/Images/lg_kampon.jpg")}
                >
                  {this.state.imageLoading ? (
                    <BarIndicator color={"red"} size={30} count={3} />
                  ) : null}
                </ImageBackground>
                <CustomIcon
                  onPress={this._requestPermission}
                  style={[bgWhite, r100, pad4, posAbs, { bottom: 0, left: 0 }]}
                  name="ic_add"
                  size={20}
                  color={MAIN_COLOR}
                />
              </View>
              <View style={[fRow, mV8, centerAll, { width: screenWidth / 2 }]}>
                <Text style={[iranSans, h3, fWhite, mV8]}>
                  {this.state.mName}
                </Text>
                <TouchableOpacity
                  style={[{ width: 30, height: 30, marginLeft: 16 }]}
                  onPress={() =>
                    this.setState({
                      visibleModal: true,
                      modalTitle: "نام حود را وارد کنید",
                      modalInput: this.state.mName,
                      modalRef: "name"
                    })
                  }
                >
                  <Image
                    style={[{ width: 16, height: 16 }]}
                    source={require("../../Assets/Png/ic_edit_white.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.profileNumberContainer}>
              <View style={styles.totalKampon}>
                <Text style={[iranSans, h4]}>کمپون های فعال</Text>
                <Text style={[iranSans, h2]}>{this.state.ordersCount}</Text>
              </View>
              <View style={styles.totalKampon}>
                <Text style={[iranSans, h4]}>کمپُن های استفاده شده</Text>
                <Text style={[iranSans, h2]}>{this.state.usedOrdersCount}</Text>
              </View>
            </View>
            <View style={{ flex: 1, marginTop: 30 }}>
              {/* //================ Mobile ======================= */}
              <View
                style={[bgWhite, el1, r8, m8, mH16, fRow, spaceB, center, pad4]}
              >
                <View>
                  <Text style={[iranSans, h3]}> {MOBILE_NUMBERR}:</Text>
                  <Text style={[iranSans, h4]}>{this.state.mPhoneNumber}</Text>
                </View>
              </View>

              {/* //================ Email ======================= */}
              <View
                style={[bgWhite, el1, r8, m8, mH16, fRow, spaceB, center, pad4]}
              >
                <View>
                  <Text style={[iranSans, h3]}>{EMAIL_ADDRESS} : </Text>
                  <Text style={[h4]}>{this.state.email}</Text>
                </View>
                <TouchableOpacity
                  style={[{ width: 30, height: 30 }]}
                  onPress={() =>
                    this.setState({
                      visibleModal: true,
                      modalTitle: "رایانامه جدید خود را وارد کنید",
                      modalInput: this.state.email,
                      modalRef: "email"
                    })
                  }
                >
                  <Image
                    style={[s24]}
                    source={require("../../Assets/Png/ic_edit.png")}
                  />
                </TouchableOpacity>
              </View>

              {/* //================ Address ======================= */}

              <View
                style={[bgWhite, el1, r8, m8, mH16, fRow, spaceB, center, pad4]}
              >
                <View>
                  <Text style={[iranSans, h3]}> {ADDRESS_MEMBER}</Text>
                  <Text style={[h4, iranSans, { width: screenWidth / 1.3 }]}>
                    {this.state.address}
                  </Text>
                </View>
                <TouchableOpacity
                  style={[{ width: 30, height: 30 }]}
                  onPress={() =>
                    this.setState({
                      visibleModal: true,
                      modalTitle: "آدرس جدید خود را وارد کنید",
                      modalInput: this.state.address,
                      modalRef: "address"
                    })
                  }
                >
                  <Image
                    style={[s24]}
                    source={require("../../Assets/Png/ic_edit.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Dialog
              dialogStyle={{
                borderRadius: 25,
                borderColor: MAIN_COLOR,
                borderWidth: 2
              }}
              animationType={"fade"}
              titleStyle={[iranSans, h4, Tac]}
              visible={this.state.visibleModal}
              title={""}
              onTouchOutside={() => {
                this.setState({ visibleModal: false });
              }}
            >
              <View style={[centerAll]}>
                <Text style={[iranSans, mV16]}>{this.state.modalTitle}</Text>
                <View style={styles.input}>
                  <TextInput
                    ref={this.state.modalRef}
                    defaultValue={this.state.modalInput}
                    style={{ width: "100%" }}
                  />
                </View>
                <TouchableOpacity
                  onPress={this._modalClosed}
                  style={[activeButton, mV8, { width: 120, height: 50 }]}
                >
                  <Text style={[iranSans, fWhite]}>تایید</Text>
                </TouchableOpacity>
              </View>
            </Dialog>
          </View>
        );
      } else {
        return (
          <View style={[Flex, centerAll]}>
            <Text style={[iranSans, h3, mV16]}>
              لطفا برای دیدن پروفایل خود ابتدا ثبت نام کنید
            </Text>
            <TouchableOpacity
              style={[activeButton]}
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <Text style={[fWhite, h4, iranSans]}>ثبت نام/ورود</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
  }
}
