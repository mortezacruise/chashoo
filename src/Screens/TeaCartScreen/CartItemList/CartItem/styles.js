import {StyleSheet, Dimensions} from 'react-native';
import { iranSans } from '../../../../Values/Theme';
import { DARK_GREEN } from '../../../../Common/Colors';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingVertical:10,
    borderBottomWidth:2,
    borderColor: '#b8b8b8',
   marginHorizontal:15
    },
    text:{
...iranSans,
color: DARK_GREEN,
fontSize:12,

    },
    viewPrice:{
        justifyContent:'space-between'  ,
        marginVertical:10,
        marginRight:-50,
        
    },
  
  img : {
      marginRight:10,
      height: width/3.5,
      width:width/3.5,
      borderRadius:25
  },
  add:{
      justifyContent:'space-between'
  },
  touch:{
      backgroundColor:DARK_GREEN,
      borderRadius:18,
    paddingHorizontal:2
  },
  number:{
    ...iranSans,
    color: DARK_GREEN,
    fontSize:12,
textAlign:"center"     
  }
});

export default styles;
