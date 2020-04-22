import {StyleSheet, Dimensions} from 'react-native';
import {iranSans} from '../../Values/Theme';
import {DARK_GREEN} from '../../Common/Colors';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginHorizontal: 13,
    backgroundColor: DARK_GREEN,
    borderRadius: 5,
    alignItems: 'center',
  },
  img: {
    width: width / 2.7,
    height: width / 2.7,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  text: {
    ...iranSans,
    fontSize: 8,
    color: 'white',
  },
});

export default styles;
