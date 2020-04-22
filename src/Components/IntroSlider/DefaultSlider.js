import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
export default class DefaultSlide extends React.PureComponent {
  render() {
    return (
      <View>
        <Image
          resizeMode="stretch"
          source={this.props.image}
          style={{width: width, height: height / 3}}
        />
      </View>
    );
  }
}
