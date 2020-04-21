import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Chashu = 'چاشو';
import Styles from './style';
const CustomHeader = ({header = Chashu}) => {
  return (
    <View style={Styles.Container}>
      <Icon
        name="bars"
        size={20}
        style={Styles.Icon}
        onPress={() => console.log('dd')}
        color="white"
      />
      <Text style={Styles.Text}>{header}</Text>
    </View>
  );
};
export default CustomHeader;
