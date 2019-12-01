import React from 'react';
import {View, Button, Text, Image} from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialIcons';

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
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
