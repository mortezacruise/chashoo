import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BackHandler, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { CheckToken } from "../../API";
import { Indicator } from "../../components/Indicator";
import { BASE_URL, BOOKMARKED, TOKEN } from "../../Values/Strings";
import {
  activeButton,
  bgGray,
  centerAll,
  fBlack,
  Flex,
  fWhite,
  h2,
  h3,
  h4,
  iranSans,
  m8,
  mV16,
  mV8
} from "../../Values/Theme";
import BookmrkListContainer from "./BookMarkList";
import styles from "./styles";

const Bookmarks = ({ navigation }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);

  handleBackPress = () => {
    navigation.navigate("Home");
    return true;
  };

  const _getBookmarks = async () => {
    try {
      const isLogin = await CheckToken();
      setIsLogin(isLogin);
      if (isLogin) {
        const token = await AsyncStorage.getItem(TOKEN);
        axios.defaults.headers.common["Authorization"] = "Baerer " + token;
        const getBookmarks = await axios.get(BASE_URL + "/bookmark");
        if (getBookmarks.data.resFindBookmarks.bookmarks.length == 0) setIsEmpty(true);
        else setIsEmpty(false);
        setBookmarks(getBookmarks.data.resFindBookmarks.bookmarks);
        setIsLoading(false);
      } else setIsLoading(false);
    } catch (error) {
      ToastAndroid.show(" false", ToastAndroid.SHORT);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    _getBookmarks();
  }, [navigation]);
  const _pressGtotoLogin = () => {
    navigation.navigate("Login");
  };
  if (isLoading) return <Indicator />;

  if (isLogin) {
    if (isEmpty)
      return (
        <View style={[Flex, centerAll]}>
          <Text style={[iranSans, h3, fBlack]}>موردی برای نمایش وجود ندارد</Text>
        </View>
      );
    return (
      <View style={[Flex, bgGray]}>
        <View style={styles.header}>
          <Text
            style={[iranSans, h2, fWhite, mV8, fBlack, Flex, { textAlign: "center" }]}
          >
            {BOOKMARKED}
          </Text>
        </View>
        <View style={[m8]}>
          <BookmrkListContainer navigation={navigation} bookMarks={bookmarks} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={[Flex, centerAll]}>
        <Text style={[iranSans, h3, mV16]}>
          لطفا برای دیدن علاقه مندی های خود ابتدا ثبت نام کنید
        </Text>
        <TouchableOpacity style={[activeButton]} onPress={_pressGtotoLogin}>
          <Text style={[fWhite, h4]}>ثبت نام/ورود</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Bookmarks;
