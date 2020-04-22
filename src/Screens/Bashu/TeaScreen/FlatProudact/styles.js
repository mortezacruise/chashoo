import {StyleSheet, Dimensions} from 'react-native';
import { iranSans } from '../../../../Values/Theme';
import { DARK_GREEN } from '../../../../Common/Colors';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
      
    },
  text: {
    marginRight: 10,
    fontSize: 12,
   padding:3,
    ...iranSans,
    backgroundColor: DARK_GREEN,
    borderRadius:10,
    color: 'white',
    alignSelf:'center'
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:5
   
  },
  moreText: {
    marginLeft: 10,
    marginVertical: 5,
    ...iranSans,
    color: DARK_GREEN,
    fontSize: 12,
  },
});

export default styles;
