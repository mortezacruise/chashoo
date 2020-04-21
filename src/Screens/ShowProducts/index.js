/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Header} from 'react-navigation-stack';
import imageAdd from '../../Assets/mantomodel/mantoBlueCharkhoone.png';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import styles from './style';
import CustomHeader from '../../Reusable/CustomHeader';
import KamponTabs from './KamponTab/index';
import {iranSans, h5} from '../../Values/Theme';
import KamponFooter from './KamponFooter';
import DiscountList from '../Lists/DiscountList';
const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;
const ProductTitle = 'مانتو طرح سیمرغ';
const Colors = ['red', 'blue', 'yellow', 'black'];
const TvShow = () => {
  let navTitleView = null;

  const fadeIn = {
    from: {
      scaleY: 0,
    },
    to: {
      scaleY: 1,
    },
  };

  return (
    <View style={{flex: 1}}>
      <CustomHeader />

      <HeaderImageScrollView
        maxHeight={300}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.7}
        minOverlayOpacity={0.2}
        fadeOutForeground
        renderHeader={() => (
          <>
            <View style={styles.colorsView}>
              {Colors.map(color => {
                return (
                  <View style={[styles.color, {backgroundColor: color}]} />
                );
              })}
            </View>
            <Animatable.Image
              duration={1000}
              animation={fadeIn}
              source={imageAdd}
              style={styles.image}
              resizeMode="contain"
            />
          </>
        )}
        renderFixedForeground={() => (
          <Animatable.View
            style={styles.navTitleView}
            ref={ref => {
              navTitleView = ref;
            }}>
            <Text style={styles.navTitle}>{ProductTitle}</Text>
          </Animatable.View>
        )}>
        <TriggeringView
          style={styles.section}
          onHide={() => navTitleView.fadeInUp(200)}
          onDisplay={() => navTitleView.fadeOut(100)}>
          <Text style={styles.name}>{ProductTitle}</Text>
          <View style={styles.rowText}>
            <Text style={[styles.name, {marginRight: 4}]}>۱۵۰۰۰۰تومان</Text>
            <Text style={styles.name}>قیمت : </Text>
          </View>
        </TriggeringView>
        <ScrollView style={{marginBottom: 100}}>
          <KamponTabs />
          <View>
            <Text>محصولات مشابه</Text>
            <DiscountList />
          </View>
        </ScrollView>
      </HeaderImageScrollView>
      <KamponFooter />
    </View>
  );
};

export default TvShow;
// renderForeground={() => (
//   <View style={styles.titleContainer}>
//     <Text style={styles.imageTitle}>{tvShowContent.title}</Text>
//   </View>
// )}
