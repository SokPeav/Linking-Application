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
import {throwStatement} from '@babel/types';

export class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        value: '',
        error: '',
        isValid: false,
      },
      number: {
        value: '',
        error: '',
        isValid: false,
      },
      email: {
        value: '',
        error: '',
        isValid: false,
      },
      Pick: {
        value: '',
        error: '',
        isValid: false,
      },
    };
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: <Head />,
    headerLeft: <BackClick navigate={navigation} />,
  });

  submitForm = () => {
    const pattName = /^[a-zA-Z ]*$/;
    const pattNumber = /^(\d+-?)+\d+$/;
    const pattEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/gi;

    if (this.state.name.value == '') {
      this.setState({
        name: {
          err: 'name can not be null',
          isValid: true,
        },
      });
    } else if (pattName.test(this.state.name.value) == false) {
      this.setState({
        name: {
          err: 'Invalid username',
          isValid: true,
        },
      });
    } else if (this.state.email.value == '') {
      this.setState({
        email: {
          err: 'Email can be empty',
          isValid: true,
        },
      });
    } else if (pattEmail.test(this.state.email.value) == false) {
      this.setState({
        email: {
          err: 'Invalid Email',
          isValid: true,
        },
      });
    } else if (this.state.Pick.value == '') {
      this.setState({
        Pick: {
          err: 'please select class',
          isValid: true,
        },
      });
    } else if (this.state.number.value == '') {
      this.setState({
        email: {
          err: 'Password can be empty',
          isValid: true,
        },
      });
    } else if (pattNumber.test(this.state.number.value) == false) {
      this.setState({
        number: {
          err: 'Should not be string',
          isValid: true,
        },
      });
    } else if (this.state.number.value.length <= 6) {
      this.setState({
        number: {
          err: 'Should not less 6 number ',
          isValid: true,
        },
      });
    } else {
      this.props.navigation.navigate('Home', {name: this.state.name.value});
    }
  };
  render() {
    let data = [
      {
        value: 'SR',
      },
      {
        value: 'BTB',
      },
      {
        value: 'KPS',
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
          <View>
            {this.state.name.isValid ? (
              <Text style={{color: 'red', marginLeft: 20}}>
                {this.state.name.err}
              </Text>
            ) : null}
            <TextInput
              style={styles.InputStyle}
              placeholder="Username"
              onChangeText={value => this.setState({name: {value: value}})}
              value={this.state.name.value}
            />
          </View>
          <View>
            {this.state.email.isValid ? (
              <Text style={{color: 'red', marginLeft: 20}}>
                {this.state.email.err}
              </Text>
            ) : null}
            <TextInput
              placeholder="Email"
              onChangeText={value => this.setState({email: {value: value}})}
              value={this.state.email.value}
              style={styles.InputStyle}
            />
          </View>
          <View style={{paddingBottom: 10}}>
            {this.state.Pick.isValid ? (
              <Text style={{color: 'red', marginLeft: 20}}>
                {this.state.Pick.err}
              </Text>
            ) : null}
            <Dropdown
              containerStyle={{
                backgroundColor: 'white',
                borderRadius: 20,
                paddingLeft: 20,
              }}
              placeholder="class"
              data={data}
              onChangeText={value => this.setState({Pick: {value: value}})}
              value={this.state.Pick.value}
            />
          </View>
          <View>
            {this.state.number.isValid ? (
              <Text style={{color: 'red', marginLeft: 20}}>
                {this.state.number.err}
              </Text>
            ) : null}
            <TextInput
              style={{paddingTop: 10}}
              style={styles.InputStyle}
              onChangeText={value => this.setState({number: {value: value}})}
              value={this.state.number.value}
              placeholder="password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text onPress={() => this.submitForm()} style={styles.TextLogin}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.TextStyle}>Not a Memeber ? Sign up here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const BackClick = props => {
  return (
    <View>
      <Icon
        iconStyle={{marginLeft: 10}}
        name="arrow-back"
        type="MaterialIcons"
        onPress={() => props.navigate.goBack(null)}
      />
    </View>
  );
};
const Head = () => {
  return (
    <View style={{paddingLeft: 100}}>
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
    marginTop: 20,
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
