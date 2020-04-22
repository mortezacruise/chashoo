import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Slider1 from '../../Assets/mantomodel/mantoBlackCharkhoone.png';
import Slider2 from '../../Assets/boom/3.jpg';
import Slider3 from '../../Assets/boom/4.jpeg';
import Slider4 from '../../Assets/boom/5.jpg';
import Styles from './styles';
import BackgroundCursor from '../../Components/BackgroundCursor/BackgroundCursor';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomHeader from '../../Reusable/CustomHeader';
const Bashu = ({navigation}) => {
  const Data = [
    {
      title: 'چای محلی',
      image:
        'https://golvani.ir/wp-content/uploads/2018/10/%D8%A8%D8%A7%D8%BA-%DA%86%D8%A7%DB%8C.jpg',
      route: 'Tea'
    },
    {
      title: ' مرکبات ',
      image:
        'https://img9.irna.ir/old/Image/1397/13970821/83097383/N83097383-72655177.jpg',
        route: ''
    },
    {
      title: 'برنج اعلا',
      image:
        'https://images.kojaro.com/2018/2/e80efeb6-1541-472e-aff8-1bc6a04b9460.jpg',
        route: ''
    },
    {
      title: 'گل گاوزبان',
      image: 'https://namehnews.com/files/fa/news/1398/2/19/555640_726.jpg',
      route: ''
    },
    {
      title: 'فندق',
      image:
        'https://img.pastureone.com/img/agro-2019/leshina-lesnoj-oreh-i-funduk-raznica-i-osobennosti.jpg',
        route: ''
    },
    {
      title: 'عسل',
      image:
        'https://www.sciencenews.org/wp-content/uploads/2019/12/121119_ti_honeyprotein_feat-1028x579.jpg',
        route: ''
    },
  ];
  const onPressed = () => {
    navigation.navigate('Intro');
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={Styles.renderItem} onPress={onPressed}>
        <Image source={{uri: item.image}} style={Styles.Images} />
        <View style={Styles.TextHolder}>
          <Text style={Styles.Text}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={Styles.container}>
      <CustomHeader header={'پاشو'} />
      <FlatList
        style={{marginTop: 16}}
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        numColumns={2}
      />
    </View>
  );
};
export default Bashu;
