import React from 'react';
import {createAppContainer} from 'react-navigation';
import {View, Button, Text} from 'react-native';
import {HomeScreen} from './components/HomeScreen'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
      </View>
      
    );
  }
}
class MenuScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
      </View>
      
    );
  }
}


const RootStack = createMaterialTopTabNavigator({
 
  Menu: MenuScreen,
  Home: HomeScreen,
  Details: DetailsScreen,
},
{
  initialRouteName : "Details",
  
}
);

export default App = createAppContainer(RootStack);
