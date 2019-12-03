import React, {Component} from 'react';
import {
  TextInput,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

export class LoginScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: <Head />,
    headerLeft: <BackClick navigate={navigation} />,
  });
  render() {
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
        <Text style={styles.TextStyle}>សូមស្វាគមន៏​មកាន់កម្មវិធីរបស់យើង </Text>

        <View style={styles.Form}>
          <TextInput style={styles.InputStyle} placeholder="Username" />
          <TextInput style={styles.InputStyle} placeholder="Password" />
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
const Head = () => {
  return (
    <View style={{paddingLeft:100}}>
      <Text style={{fontWeight: 'bold', fontSize: 25}}>ចូលប្រព័ន្ធ</Text>
    </View>
  );
};
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
  Form: {
    marginTop: 50,
  },
  InputStyle: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 20,
    paddingLeft: 20,
    marginBottom: 15,
  },
  TextLogin: {
    backgroundColor: '#32CD32',
    borderRadius: 20,
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 18,
    width: 100,
    color: 'white',
    textAlign: 'center',
  },
  TextStyle: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  },
});
