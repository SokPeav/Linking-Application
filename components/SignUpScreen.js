import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Dropdown} from 'react-native-material-dropdown';

export class SignUpScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: <Head />,
    headerLeft: <BackClick navigate={navigation} />,
  });
  render() {
    let data = [
      {
        value: 'Banana',
      },
      {
        value: 'Mango',
      },
      {
        value: 'Pear',
      },
    ];
    return (
      <View style={styles.Container}>
        <View style={styles.Logo}>
          <Image
            style={{width: 100, height: 100, borderRadius: 50}}
            source={{
              uri:
                'https://www.logaster.com/blog/wp-content/uploads/2019/04/1.T-Logo.-by-Acen.png',
            }}
          />
        </View>
        <Text style={styles.TextStyle}>សូមស្វាគមន៏​មកាន់កម្មវិធីរបស់យើង</Text>
        <View>
          <TextInput style={styles.InputStyle} placeholder="Username" />
          <TextInput style={styles.InputStyle} placeholder="Email" />
          <View style={{paddingBottom: 10}}>
            <Dropdown
              containerStyle={{
                backgroundColor: 'white',
                borderRadius: 20,
                paddingLeft: 20,
              }}
              placeholder="class"
              data={data}
            />
          </View>

          <TextInput
            style={{paddingTop: 10}}
            style={styles.InputStyle}
            placeholder="password"
            secureTextEntry={true}
          />
         
        </View>
        <TouchableOpacity>
            <Text style={styles.TextLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={styles.TextStyle}>Not a Memeber ? Sign up here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const BackClick = (props) => {
  return (
    <View>
      <Icon
      iconStyle={{marginLeft:10}}
        name="arrow-back"
        type="MaterialIcons"
        onPress={ () => props.navigate.goBack(null)}
      />
    </View>
  );
};
const Head = () => {
  return (
    <View style={ {paddingLeft:100}}>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>ចុះឈ្មោះ</Text>
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
  Logo: {
    marginTop: 50,
  },

  InputStyle: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 20,
    paddingLeft: 20,
    marginBottom: 15,
  },
  TextStyle: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
  TextStyle: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
  TextLogin: {
    backgroundColor: '#32CD32',
    borderRadius: 20,
    padding: 10,
    fontSize: 18,
    width: 100,
    color: 'white',
    textAlign: 'center',
  },
});
