import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CheckToken } from "../../../API";
import { TotalChanges } from "../../../API/TotalChanges";
import { TOKEN } from "../../../Common/Strings";
import { BASE_URL } from "../../../Values/Strings";
import {
  activeButton,
  centerAll,
  Flex,
  fWhite,
  h3,
  h4,
  iranSans,
  mV16
} from "../../../Values/Theme";
import CartItemList from "../../Lists/CartItemList";
import styles from "./styles";
// import { totalmem } from "os";
// import { DeleteFromCart } from "../../../Utils/DeleteFromCart";
// const irAmount = require("iramount");

const CartItemListContainer = ({ cartItem, navigation }) => {
  const [isLoading, setLoadin] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [EmptyCart, setEmptyCart] = useState(true);
  const [total, setTotal] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    _fechData();
  }, [navigation]);

  useEffect(() => {
    _total();
  });

  _total = () => {
    let _total = 0;
    //============= Calculate Total Price ============
    cartItems.map(item => {
      _total = item.cartDiscount.disNewPrice * item.count + _total;
    });
    setTotal(_total);
    return _total;
  };

  const _fechData = async () => {
    try {
      //============= Check User is Login ============
      if (await CheckToken()) {
        setIsLogin(true);
        const token = await AsyncStorage.getItem(TOKEN);
        axios.defaults.headers.common["Authorization"] = "Baerer " + token;
        const resGetCartItems = await axios.get(BASE_URL + "/cart");
        const cartItems = resGetCartItems.data.resGetCart;
        setLoadin(false);
        setCartItems(cartItems);
        _total();
        if (!cartItems.length) {
          setEmptyCart(true);
          _cartItems();
        } else {
          setEmptyCart(false);
          _cartItems();
        }
      } else {
        //============= User should login  ============
        setEmptyCart(true);
        setIsLogin(false);
        setLoadin(false);
        cartItem(true);
      }
    } catch (e) {}
  };

  _cartItems = () => {
    let active = EmptyCart;
    let counts = 0;
    cartItems.map(item => {
      counts = item.count + counts;
    });
    cartItem(active, counts, _total());
  };

  onIncreaseItem = _id => {
    let newCartItems = [...cartItems];
    const index = newCartItems.findIndex(item => item.cartDiscount._id === _id);
    let newCount = newCartItems[index].count + 1;
    cartItems[index] = { ...newCartItems[index], count: newCount };
    setCartItems(cartItems);
    _total();
    TotalChanges(_id, 1);
    _cartItems();
  };

  onDecreaseItem = async _id => {
    let newCartItems = [...cartItems];
    const index = newCartItems.findIndex(item => item.cartDiscount._id === _id);

    if (newCartItems[index].count === 1) {
      try {
        //==============================DELETE FROM CART++++++=============================
        TotalChanges(_id, -1);

        const remove = cartItems.filter(item => {
          return item.cartDiscount._id != _id;
        });
        setCartItems(remove);
        if (cartItems.length === 1) {
          await setEmptyCart(true);
          _cartItems();
        }
      } catch (error) {}
    } else {
      let newCount = cartItems[index].count - 1;
      cartItems[index] = { ...cartItems[index], count: newCount };
      setCartItems(cartItems);
      _total();
      TotalChanges(_id, -1);
    }
    _cartItems();
  };

  _convertToPersian = number => {
    const latinToPersianMap = [
      "۱",
      "۲",
      "۳",
      "۴",
      "۵",
      "۶",
      "۷",
      "۸",
      "۹",
      "۰"
    ];
    const latinNumbers = [
      /1/g,
      /2/g,
      /3/g,
      /4/g,
      /5/g,
      /6/g,
      /7/g,
      /8/g,
      /9/g,
      /0/g
    ];
    persianNumber = number.toString();
    for (let i = 0; i < 10; i++) {
      persianNumber = persianNumber.replace(
        latinNumbers[i],
        latinToPersianMap[i]
      );
    }
    return persianNumber;
  };
  const _PressGoToLogin = () => {
    navigation.navigate("Login");
  };
  newPrice = total;

  return (
    <View style={[Flex, centerAll]}>
      <Text style={[iranSans, h3, mV16]}>
        لطفا برای خرید لباس ابتدا ثبت نام کنید
      </Text>
      <TouchableOpacity style={[activeButton]} onPress={_PressGoToLogin}>
        <Text style={[fWhite, h4, iranSans]}>ثبت نام/ورود</Text>
      </TouchableOpacity>
    </View>
  );
};
// if (cartItems.length === 0)
//   return (
//     <View style={[Flex, centerAll]}>
//       <Text style={[iranSans, h3]}>سبد خرید خالی است</Text>
//     </View>
//   );
// return (
//   <View style={[Flex]}>
//     <View style={styles.cartContainer}>
//       <Text style={[iranSans, h4]}>جمع کل :</Text>
//       <Text style={[iranSans, h4]}>{newPrice} تومان</Text>
//     </View>
//     <CartItemList
//       items={cartItems}
//       onIncreaseItem={this.onIncreaseItem}
//       onDecreaseItem={this.onDecreaseItem}
//     />
//   </View>
// );
// }
export default CartItemListContainer;
