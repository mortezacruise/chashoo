import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './styles';
import ProudactCards from '../../../../Components/ProudactCards';

const FlatProudact = ({title}) => {
const SEE_ALL = 'بیشتر'

const Data = [
    {
        image: 'https://en.ifilmtv.com/UploadedFiles/MultiImages/18-07-2017/SmallSize/721_31_50.jpg',
        nameProudact: 'چای مرغوب',
        priceProudact : '18000'
    },
    {
        image: 'https://cdn.yjc.ir/files/fa/news/1396/9/17/7189484_532.jpg',
        nameProudact: 'چای سبز',
        priceProudact : '53000'
    },
    {
        image: 'https://mahchin.net/wp-content/uploads/2019/07/1134big-min.jpg',
        nameProudact: 'چای زعفران',
        priceProudact : '39000'
    },
    {
        image: 'https://www.tasvirezendegi.com/wp-content/uploads/2014/11/9277.jpg',
        nameProudact: 'چای اعلا',
        priceProudact : '67000'
    }
]
 
  const renderItems = ({item}) => {
    return <ProudactCards items={item}  />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
      <Text style={styles.moreText}>{SEE_ALL}</Text>
        <Text style={styles.text}>{title}</Text>
        
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        inverted
        horizontal
        data={Data}
        renderItem={renderItems}
      />
    </View>
  );
};
export default FlatProudact;