import {StyleSheet, Dimensions} from 'react-native';
import {screenHeight, screenWidth} from '../../Values/Constants';
import {centerAll, iranSans, fWhite, h1} from '../../Values/Theme';
import {MAIN_COLOR} from '../../Values/Colors';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: screenWidth / 2,
    height: screenWidth,
  },
  Images: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  renderItem: {
    width: SCREEN_WIDTH / 3,
    height: SCREEN_WIDTH / 3,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 50,
    marginVertical: 16,
  },
  Text: {
    ...iranSans,
    fontSize: 14,
  },
  TextHolder: {
    minWidth: '50%',
    position: 'absolute',
    right: 0,
    top: SCREEN_HEIGHT / 9,
    padding: 8,
    ...centerAll,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
  },
});
