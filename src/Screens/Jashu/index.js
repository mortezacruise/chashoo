import React, {useEffect} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import Slider1 from '../../Assets/mantomodel/mantoBlackCharkhoone.png';
import Slider2 from '../../Assets/boom/3.jpg';
import Slider3 from '../../Assets/boom/4.jpeg';
import Slider4 from '../../Assets/boom/5.jpg';
import Styles from './styles';
import BackgroundCursor from '../../Components/BackgroundCursor/BackgroundCursor';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Jashu = () => {
  const Data = [Slider1, Slider1, Slider1];
  return (
    <View style={Styles.container}>
      <ScrollView>
        <Image source={Slider2} style={Styles.Images} resizeMode={'cover'} />
        <View style={Styles.Category}>
          <View style={Styles.CategoryItemsHolder}>
            <Icon name={'bed'} size={20} />
            <Text style={Styles.Text}>اقامتگاه</Text>
          </View>
          <View style={Styles.CategoryItemsHolder}>
            <Icon name={'compass'} size={20} />
            <Text style={Styles.Text}>گردشگری</Text>
          </View>
          <View style={Styles.CategoryItemsHolder}>
            <Icon name={'map-marker-alt'} size={20} />
            <Text style={Styles.Text}>منابع طبیعی</Text>
          </View>
        </View>
        <View style={Styles.TextHolderView}>
          <Text style={Styles.Text}>
            شهرستان رودسر، از شهرستان‌های استان گیلان در ایران است. جمعیت این
            شهرستان (طبق سرشماری سال ۱۳۸۵ خورشیدی) ۱۴۶٬۰۵۷ نفر است و مرکز آن،
            شهر رودسر است.[۱] این شهرستان با نام قدیمی هوسم مرکز حکمرانی زیدییان
            و لنگر پسر وشمگیر از خاندان زیاریان و زادگاه خاندان بویه (در روستای
            بویه، املش کنونی) است. موقعیت جغرافیائی رودسر، از شمال به دریای خزر،
            از جنوب به رشته کوه‌های البرز، از خاور به رامسر و از باختر به املش و
            لنگرود منتهی می‌شود. قسمت کوهستانی شهرستان رودسر، خوش آب و هوا و
            سردسیر است. قسمت شمالی این شهرستان که در قسمت حاشیه جنوبی دریای خزر
            و منطقه جلگه ای قرار گرفته‌است، ناحیه‌ای مرطوب است. رود پلرود، با
            شاخه‌های کیارود و شیرارود، در این شهرستان جریان دارد.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default Jashu;
