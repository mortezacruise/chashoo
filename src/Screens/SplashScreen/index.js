import React, {useState} from 'react';
import {
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Linking,
  Text,
  ScrollView,
} from 'react-native';
import Styles from './styles';
import ViewPager from '@react-native-community/viewpager';
import * as Animatable from 'react-native-animatable';
import chashuImage from '../../Assets/Chashoo/Chashoo.png';
import JashuImage from '../../Assets/Chashoo/Jahso.png';
import bashuIamge from '../../Assets/Chashoo/Pasho.png';
import dashuImage from '../../Assets/Chashoo/Dasho.png';
import vashuImage from '../../Assets/Chashoo/Vasho.png';
import MarqueeText from 'react-native-marquee';

import {MAIN_COLOR} from '../../Values/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {iranSans, h2, fWhite, h5} from '../../Values/Theme';
import CustomHeader from '../../Reusable/CustomHeader';
import {ROODSAR_INTRO, FOOTER_TEXT_INTRO} from '../../Common/Strings';
const ABOUT_US = 'تماس با ما ';
const CONTACT_US = 'درباره ما';
const MONET = 'سرمایه گذاری';
const WORK = 'همکاری با ما';
const Data = [
  {id: 1, name: '1', image: vashuImage, routeName: 'Vashu'},
  {id: 2, name: '2', image: JashuImage, routeName: 'Jashu'},
  {id: 3, name: '3', image: bashuIamge, routeName: 'Bashu'},
  {id: 4, name: '4', image: dashuImage, routeName: 'Dashu'},
  {id: 4, name: '5', image: chashuImage, routeName: 'Chashu'},
];
const secData = [
  {
    id: 1,
    name: ABOUT_US,
    image: chashuImage,
    routeName: '',
    icon: 'paper-plane',
  },
  {id: 2, name: CONTACT_US, image: JashuImage, routeName: '', icon: 'comments'},
  {
    id: 3,
    name: MONET,
    image: bashuIamge,
    routeName: '',
    icon: 'hand-holding-usd',
  },
  {id: 4, name: WORK, image: dashuImage, routeName: '', icon: 'handshake'},
];
const slideText = [
  'Welcome to React Native Text Slider',
  'It is very easy to use',
  'You can simply install and use it now',
  'If you have any issues open up an issue in issues tab',
];
// dashoo.ir;
// vashoo.ir;
const SplashScreen = ({navigation}) => {
  const [position, setposition] = useState(0);

  const goToroute = async (route) => {
    if (route === 'Dashu') {
      Linking.openURL('http://www.google.com')
        .then((res) => {
          console.log({res});
        })
        .catch((e) => {
          console.log({e});
        });
    }
    if (route === 'Vashu') {
      Linking.openURL('http://www.google.com')
        .then((res) => {
          console.log({res});
        })
        .catch((e) => {
          console.log({e});
        });
    }
    navigation.navigate(route);
  };
  const fadeIn = {
    from: {
      scaleY: 0,
    },
    to: {
      scaleY: 1,
    },
  };
  const Items = (type) => {
    return (
      <FlatList
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
        style={{flex: 1, marginTop: 24}}
        inverted
        data={Data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={Styles.Toch}
              key={item.id}
              onPress={() => goToroute(item.routeName)}>
              <Image
                resizeMode={'stretch'}
                source={item.image}
                style={Styles.Images}
              />
            </TouchableOpacity>
          );
        }}
        numColumns={2}
      />
    );
  };
  const secItems = () => {
    return (
      <FlatList
        contentContainerStyle={{
          flex: 1,
        }}
        style={{flex: 1, marginTop: 24}}
        data={secData}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={Styles.secToch}
              key={item.id}
              onPress={() => goToroute(item.routeName)}>
              <Icon name={item.icon} size={40} />
              <Text style={[iranSans, h2]}> {item.name}</Text>
            </TouchableOpacity>
          );
        }}
        numColumns={2}
      />
    );
  };
  return (
    <ViewPager
      style={{flex: 1}}
      initialPage={0}
      showPageIndicator={true}
      onPageSelected={(i) => {
        setposition(i.nativeEvent.position);
      }}>
      <View>
        <CustomHeader />
        <ScrollView key="1">
          {Items()}
          {position === 0 ? (
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginEnd: 16,
                marginTop: 8,
              }}>
              <Icon name={'arrow-right'} />
            </View>
          ) : null}
        </ScrollView>
        <TouchableOpacity activeOpacity={0.8} style={Styles.footer}>
          <MarqueeText
            useNativeDriver={true}
            style={{fontSize: 24, color: 'white'}}
            duration={20000}
            marqueeOnStart
            loop
            marqueeDelay={0}
            marqueeResetDelay={10000}>
            {FOOTER_TEXT_INTRO}
          </MarqueeText>
        </TouchableOpacity>
      </View>
      <View key="2">
        <CustomHeader header={'ارتباط'} />

        {secItems()}
        {position === 1 ? (
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginStart: 16,
              marginBottom: 8,
            }}>
            <Icon name={'arrow-left'} />
          </View>
        ) : null}
      </View>
    </ViewPager>
  );
};

export default SplashScreen;
{
  /* <Animatable.Image
                resizeMode={'stretch'}
                animation={fadeIn}
                duration={1000}
                source={item.image}
                style={[Styles.Images, {opacity: 0.9}]}
              /> */
}
