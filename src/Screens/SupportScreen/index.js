import React, { Component } from "react";
import {
  BackHandler,
  TouchableOpacity,
  View,
  Text,
  Image,
  Linking,
  ScrollView
} from "react-native";
import styles from "./styles";
import { centerAll, Flex, bgGreen300, iranSans, h5, h4, mV4 } from "../../Values/Theme";

export default class Support extends Component {
  constructor() {
    super();

    this.handleBackPress = this.handleBackPress;
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }
  handleBackPress = () => {
    this.props.navigation.navigate("Home");
    return true;
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.containerView}>
          <Text style={[iranSans, h4]}>
            کلیه کاربرانی که قصد عضویت و خریداری از اپلیکیشن کمپن را دارند، باید مفاد این
            توافق‌نامه را کامل مطالعه و سپس اقدام به عضویت و خرید از اپ کنند. عضویت در
            اپلیکیشن و یا خرید از آن به منزله مطالعه و قبول شرایط خرید و عضویت و قوانین و
            مقررات مربوطه است.
          </Text>
          <View style={[bgGreen300, mV4, { height: 1, width: "100%" }]} />

          <Text style={[iranSans, h5]}>
            ماده 1 افراد برای عضویت در سایت شرکت و خرید از آن باید در هنگام خرید یا در
            حالت عادی به قسمت عضویت مراجعه کنند. در این مرحله با وارد کردن اطلاعات لازم
            مانند نام و نام خانوادگی، رمز عبور و آدرس پست الکترونیکی، لینک تایید عضویت
            برای آنان ارسال می‌شود که کاربران با کلیک نمودن آن، مراحل عضویت را تایید می
            کنند.
          </Text>
          <View style={[bgGreen300, mV4, { height: 1, width: "100%" }]} />

          <Text style={[iranSans, h5, { alignSelf: "flex-start" }]}>
            تبصره 1 تنها اشخاص حقیقی حق عضویت در سایت را دارند.
          </Text>
          <View style={[bgGreen300, mV4, { height: 1, width: "100%" }]} />

          <Text style={[iranSans, h5]}>
            تبصره 2 صرف عضویت در اپلیکیشن دلیل بر قبول و پذیرش مفاد موافقتنامه بوده و خلاف
            آن به به هیچ وجه پذیرفته نیست.
          </Text>
          <View style={[bgGreen300, mV4, { height: 1, width: "100%" }]} />

          <Text style={[iranSans, h5]}>
            تبصره 3 کاربر باید رمز عبور و نام کاربری خود را حفظ نموده و چنانچه آن را
            فراموش کند، می‌تواند برای ثبت نام مجدد و اخذ کلمه عبور جدید اقدام کند.
          </Text>
          <View style={[bgGreen300, mV4, { height: 1, width: "100%" }]} />

          <Text style={[iranSans, h5]}>
            تبصره 4 تنها اشخاص حقیقی حق عضویت در اپلیکیشن را دارند.کاربر باید آدرس پست
            الکترونیک خود را به همراه سایر اطلاعات درخواستی به‌طور صحیح اعلام نموده و
            مسئولیت ثبت اشتباه و یا خلاف واقع بر عهده شخص کاربر است.
          </Text>
          <View style={[bgGreen300, mV4, { height: 1, width: "100%" }]} />

          <Text style={[iranSans, h5]}>
            ماده 2 کاربر، مسئول حفظ و نگهداری تمام تلفن‌ها، سخت‌افزار کامپیوتر و سایر
            ابزار ضروری برای دسترسی و استفاده از این سایت و تمام هزینه‌های مرتبط به آن است
            و شرکت کمپن مسئول صدمات ناشی از ابزار کاربر نمی‌باشد.
          </Text>
          <View style={[bgGreen300, mV4, { height: 1, width: "100%" }]} />

          <Text style={[iranSans, h5]}>
            ماده 3 افراد بالای 18 سال تمام حقوق عضویت و انجام معامله (خرید) را در اپلیکیشن
            شرکت دارند.
          </Text>
          <View style={[bgGreen300, mV4, { height: 1, width: "100%" }]} />

          <Text style={[iranSans, h5]}>
            ماده 5 فرایند خرید از اپلیکیشن توسط کاربر به این شرح است: الف- بازدید از
            کالاها و خدمات ارائه شده در اپلیکیشن ب- پرداخت مبلغ تعیینی( یا اعمال تخفیف)
            به‌صورت آنلاین به حساب شرکت (انعقاد قرارداد) ج- ارسال رسید کالا و خدمات
            خریداری شده درقسمت کمپن های من به جهت ارائه به تامین‌کننده کالا و خدمات و
            دریافت کالا و خدمات از ارائه‌کننده کالا و خدمت به‌طور مستقیم
          </Text>
        </View>
      </ScrollView>
    );
  }
}
