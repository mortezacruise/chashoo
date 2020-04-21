/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar
} from "react-native";

const App = () => {
  return (
    <View style={{ backgroundColor: "#e9e9e9", height: 900 }}>
      <View
        style={{
          backgroundColor: "white",
          alignItems: "center",
          paddingTop: 100,
          justifyContent: "center"
        }}
      >
        <Image
          source={require("./Assets/profile.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ fontFamily: "iran_sans", marginTop: 10, fontSize: 18 }}>
          علی سلیمانی
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingVertical: 30
          }}
        >
          <Image
            source={require("./Assets/bell.png")}
            style={{ width: 60, height: 60, left: 40 }}
          />
          <Image
            source={require("./Assets/report.png")}
            style={{ width: 60, height: 60 }}
          />
          <Image
            source={require("./Assets/clock.png")}
            style={{ width: 60, height: 60, right: 40 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingVertical: 20
          }}
        >
          <Text style={{ fontFamily: "iran_sans", fontSize: 15, left: 50 }}>
            خرید ها: ۲۳
          </Text>
          <Text style={{ fontFamily: "iran_sans", fontSize: 15, right: 50 }}>
            علاقه مندی ها: ۵۰
          </Text>
        </View>
      </View>
      <View style={{ backgroundColor: "white", marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row-reverse",
            borderColor: "#e9e9e9",
            borderBottomWidth: 3,
            paddingVertical: 10
          }}
        >
          <Image
            source={require("./Assets/theme.png")}
            style={{ width: 30, height: 30, marginTop: 3, marginRight: 10 }}
          />
          <Text
            style={{
              fontFamily: "iran_sans",
              fontSize: 18,
              marginTop: 5,
              marginRight: 10
            }}
          >
            پس زمینه
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row-reverse",
            borderColor: "#e9e9e9",
            borderBottomWidth: 3,
            paddingVertical: 10
          }}
        >
          <Image
            source={require("./Assets/share.png")}
            style={{ width: 30, height: 30, marginTop: 2, marginRight: 10 }}
          />
          <Text
            style={{
              fontFamily: "iran_sans",
              fontSize: 18,
              marginTop: 5,
              marginRight: 10
            }}
          >
            اشتراک گذاری
          </Text>
        </View>

        <View style={{ flexDirection: "row-reverse", paddingVertical: 10 }}>
          <Image
            source={require("./Assets/moon.png")}
            style={{ width: 30, height: 30, marginTop: 3, marginRight: 10 }}
          />
          <Text
            style={{
              fontFamily: "iran_sans",
              fontSize: 18,
              marginTop: 5,
              marginRight: 10
            }}
          >
            حالت شب
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row-reverse",
          backgroundColor: "white",
          marginTop: 15,
          paddingVertical: 10
        }}
      >
        <Image
          source={require("./Assets/wheel.png")}
          style={{ width: 30, height: 30, marginTop: 3, marginRight: 10 }}
        />
        <Text
          style={{
            fontFamily: "iran_sans",
            fontSize: 18,
            marginTop: 5,
            marginRight: 10
          }}
        >
          تنظیمات
        </Text>
      </View>
    </View>
  );
};

export default App;
