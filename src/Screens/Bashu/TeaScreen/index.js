import React, {useEffect} from 'react';
import {View, Image, Text, ScrollView, FlatList} from 'react-native';

import Styles from './styles';
import CustomHeader from '../../../Reusable/CustomHeader';
import FlatProudact from './FlatProudact';

const TeaScreen = () => {
   
    return (
      <View style={Styles.container}>
      <CustomHeader header={'چای'} />
      <ScrollView>
      <FlatProudact title= {'محصولات جدید'} />
      <FlatProudact title= {'محصولات پرفروش'}/>
      <FlatProudact title= {'محصولات پرتخفیف'}/>
      <FlatProudact title= {'فروشندگان برتر '}/>
     
      </ScrollView>
    
      </View>
    );
  };
  export default TeaScreen;