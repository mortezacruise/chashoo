import React, {useEffect} from 'react';
import {View, Image, Text, ScrollView, FlatList} from 'react-native';

import Styles from './styles';
import CustomHeader from '../../../Reusable/CustomHeader';
import FlatProudact from './FlatProudact';
import {DARK_GREEN} from '../../../Common/Colors';
import IntroSlider from '../../../Components/IntroSlider';

const TeaScreen = () => {
  return (
    <View style={Styles.container}>
      <CustomHeader color={DARK_GREEN} header={'چای'} />
      <ScrollView>
        <IntroSlider />
        <FlatProudact title={'محصولات جدید'} />
        <FlatProudact title={'محصولات پرفروش'} />
        <FlatProudact title={'محصولات پرتخفیف'} />
        <FlatProudact title={'فروشندگان برتر '} />
      </ScrollView>
    </View>
  );
};
export default TeaScreen;
