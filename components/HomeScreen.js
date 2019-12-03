import React from 'react';
import {View, Button, Text, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft: <MenuButton navigate={navigation} />,
    headerTitle: <HomeHeader />,
    headerRight: <RightButton navigate={navigation} />,
  });
  render() {
    return (
      <View style={styles.Container}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{width: 100, height: 100, borderRadius: 50}}
            source={{
              uri:
                'https://www.logaster.com/blog/wp-content/uploads/2019/04/1.T-Logo.-by-Acen.png',
            }}
          />
          <Text style={{fontSize: 20}}>សូមស្វាគមន៏​ : </Text>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
const RightButton = props => {
  return (
    <View>
      <Icon
        iconStyle={{marginRight: 10}}
        name="add-circle-outline"
        type="MaterialIcons"
      />
    </View>
  );
};
const MenuButton = props => {
  return (
    <View>
      <Icon
        iconStyle={{marginLeft: 10}}
        name="format-align-justify"
        type="MaterialIcons"
        onPress={props.navigate.toggleDrawer}
      />
    </View>
  );
};
const HomeHeader = () => {
  return (
    <View style={{paddingLeft: 80}}>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>Home Page</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#00BFFF',
  },
});
