import {createAppContainer} from 'react-navigation';
import {HomeScreen} from './components/HomeScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import React, {Component} from 'react';
import {LoginScreen} from './components/LoginScreen';
import {SignUpScreen} from './components/SignUpScreen';
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});
const LoginStack = createStackNavigator({
  Login: LoginScreen,
});
const SignUpStack = createStackNavigator({
  SignUp: SignUpScreen,
});

const Drawer = createDrawerNavigator(
  {
    HomePage: {
      screen: HomeStack,
    },
    Login: {
      screen: LoginStack,
    },
    SignUp: {
      screen: SignUpStack,
    },
  },
  {
    navigationOptions: {},
  },
);
const Main = createAppContainer(Drawer);
export default class App extends Component {
  render() {
    return (
        <Main />
    );
  }
}
