import {StyleSheet, Dimensions} from 'react-native';
import {screenHeight, screenWidth} from '../../Values/Constants';
import {MAIN_COLOR} from '../../Values/Colors';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
export default styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: MAIN_COLOR
  },
  logo: {
    height: screenWidth / 2,
  },
  Images: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    borderRadius: 10,
    overflow: 'hidden',
  },
  Toch: {
    flex: 1,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH / 3,
    borderRadius: 20,
    marginBottom: screenWidth / 12,
  },
  footer: {
    width: '100%',
    height: SCREEN_WIDTH / 10,
    backgroundColor: MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secToch: {
    flex: 1,
    marginHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH / 3,
    borderRadius: 20,
    marginBottom: screenWidth / 12,
    borderWidth: 4,
    borderColor: MAIN_COLOR,
  },
});
