import React from 'react';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Provider as DataContext} from './src/Context/DataContext';
import CartScreen from './src/Screens/CartScreen';
import CategoryScreen from './src/Screens/CategoryScreen';
import HomeScreen from './src/Screens/HomeScreen/index';
import ShowProducts from './src/Screens/ShowProducts/index';
import SplashScreen from './src/Screens/SplashScreen';
import Jashu from './src/Screens/Jashu';
import Bashu from './src/Screens/Bashu';
import Intro from './src/Components/IntroSlider';
import Tea from './src/Screens/Bashu/TeaScreen'

I18nManager.allowRTL(false);
// if (I18nManager.isRTL) {RNRestart.Restart();}
const HomeStack = createStackNavigator(
  {
    Chashu: HomeScreen,
    ShowProducts,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);
const CategoryStack = createStackNavigator(
  {
    CategoryScreen,
    ShowProducts,
  },
  {defaultNavigationOptions: {headerShown: false}},
);
const Tabs = createBottomTabNavigator(
  {
    CartScreen: {
      screen: CartScreen,

      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="shopping-basket" color={tintColor} size={27} />
        ),
      },
    },
    Customize: {
      screen: CategoryStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="slack" color={tintColor} size={30} />
        ),
      },
    },
    HomeScreen: {
      screen: HomeStack,

      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={30} />
        ),
      },
    },
  },

  {
    tabBarOptions: {
      showLabel: false,
      activeBackgroundColor: '#fff',
      inactiveBackgroundColor: '#fff',
      activeTintColor: '#7f0000',
      inactiveTintColor: '#aaa',
    },
    initialRouteName: 'HomeScreen',
  },
);

const StackBashu = createStackNavigator(
  {
    Bashu,
    Tea
  },

  {
    headerMode: "none",
  }
);

const switchNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Jashu,
    Bashu,
    Tabs: Tabs,
  },
  {defaultNavigationOptions: {headerShown: false}},
);
const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <DataContext>
      <App />
    </DataContext>
  );
};
