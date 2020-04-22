import React from 'react';
import {StyleSheet, View} from 'react-native';
import AppIntroSlider from './AppIntroSlider';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const IntroSlider = ({navigation}) => {
  const slides = [
    {
      key: 'somethun',
      image: require('../../Assets/slide1.png'),
    },
    {
      key: 'somethun-dos',
      image: require('../../Assets/slide2.png'),
    },
    {
      key: 'somethun-3',
      image: require('../../Assets/slide3.png'),
    },
    {
      key: 'somethun-4',
      image: require('../../Assets/slide4.png'),
    },
    {
      key: 'somethun1',
      image: require('../../Assets/slide5.png'),
    },
  ];
  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="arrow-left"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{backgroundColor: 'transparent'}}
        />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="home"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{backgroundColor: 'transparent'}}
        />
      </View>
    );
  };
  const onDone = async (e) => {};
  return (
    <AppIntroSlider
      slides={slides}
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      onDone={onDone}
    />
  );
};
export default IntroSlider;
