import {StyleSheet} from 'react-native';
import {screenHeight} from '../../Values/Constants';
import {iranSans, h4, h3, fWhite} from '../../Values/Theme';
import {MAIN_COLOR} from '../../Values/Colors';

const Styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: screenHeight / 12,
    backgroundColor: MAIN_COLOR,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  Text: {
    ...fWhite,
    textAlign: 'center',
    ...iranSans,
    ...h3,
  },
  Icon: {
    marginHorizontal:10
  },
});
export default Styles;
