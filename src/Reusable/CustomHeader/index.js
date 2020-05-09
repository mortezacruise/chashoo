import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Chashu = 'چاشو';
import Styles from './style';
import {MAIN_COLOR} from '../../Values/Colors';
const CustomHeader = ({navigation,header = Chashu, color = MAIN_COLOR,}) => {
  const onPressed = () => {
    navigation.navigate('TeaCartScreen');
  };
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
      <Icon
        name="shopping-basket"
        size={20}
        style={Styles.Icon}
        onPress = {onPressed}
        color="white" 
         />
       
        
    </View>
  );
};
export default CustomHeader;
