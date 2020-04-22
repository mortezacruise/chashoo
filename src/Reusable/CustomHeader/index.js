import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Chashu = 'چاشو';
import Styles from './style';
import {MAIN_COLOR} from '../../Values/Colors';
const CustomHeader = ({header = Chashu, color = MAIN_COLOR}) => {
  return (
    <View style={[Styles.Container, {backgroundColor: color}]}>
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
