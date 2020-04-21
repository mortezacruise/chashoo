import {StyleSheet, Dimensions} from 'react-native';
import {screenHeight, screenWidth} from '../../Values/Constants';
import {centerAll, iranSans} from '../../Values/Theme';
const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    // backgroundColor: "white",
    // backgroundColor: "black",
  },
  logo: {
    width: screenWidth / 2,
    height: screenWidth,
  },
  Images: {
    width: SCREEN_WIDTH - 10,
    height: SCREEN_WIDTH,
  },
  Category: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 24,
  },
  CategoryItemsHolder: {
    backgroundColor: 'white',
    ...centerAll,
    padding: 16,
    width: '30%',
    elevation: 1,
  },
  Text: {
    // minWidth: '90%',
    ...iranSans,
    marginTop: 8,
    backgroundColor: 'white',
    margin: 7,
    textAlign: 'right',
    lineHeight: 30,
  },
  TextHolderView: {
    ...centerAll,
    elevation: 2,
    margin: 4,
    padding: 8,
    elevation: 1,
    width: '100%',
  },
});
