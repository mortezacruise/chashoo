import {StyleSheet, Dimensions} from 'react-native';
import { iranSans } from '../../Values/Theme';
import { DARK_GREEN } from '../../Common/Colors';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex:1,
  
    },
    text:{
        ...iranSans,
        color: DARK_GREEN,
        fontSize:10,
        marginBottom:5
  },
    viewPrice:{
    alignItems:'center',
    bottom:30
        
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
    flexDirection: 'row-reverse',
    justifyContent:'space-between',
    padding:10,
    width:width/3
   
  },
  textPrise:{
      ...iranSans,
      color: 'white',
      fontSize: 12,
      
  }
});

export default styles;
