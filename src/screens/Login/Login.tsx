import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import * as Animatable from 'react-native-animatable';
import showAlert from '../../utils/helpers/Toast';
import connectionrequest from '../../utils/helpers/NetInfo';
import {loginRequest} from '../../redux/reducer/AuthReducer';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const Login = (props: Props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onLogin = () => {
    if (email == '') {
      showAlert('Please enter your Email');
    } else if (!regex.test(email)) {
      showAlert('Please enter correct Email');
    } else if (pass == '') {
      showAlert('Please enter password');
    } else if (pass.length < 7) {
      showAlert('Please enter atleast 8 character password');
    } else if (email.toLocaleLowerCase() !== 'demo@yopmail.com') {
      showAlert('Invaild Email Address');
    } else if (pass !== 'demo@124') {
      showAlert('Invaild Password');
    } else {
      let obj = {
        email: email,
        password: pass,
      };
      connectionrequest()
        .then(() => {
          console.log(obj);
          dispatch(loginRequest(obj));
        })
        .catch(err => {
          showAlert('Please connect To Internet');
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.Text animation="flipInY" delay={600} style={styles.txt}>
        Login
      </Animatable.Text>
      <KeyboardAvoidingView style={{width: '100%'}}>
        <TextInput
          placeholder="Enter Your Email"
          value={email}
          onChangeText={txt => setEmail(txt)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Your Password"
          value={pass}
          onChangeText={txt => setPass(txt)}
          style={styles.input}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.btn} onPress={() => onLogin()}>
        <Text style={styles.login}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: normalize(50),
    width: '90%',
    alignSelf: 'center',
    marginTop: normalize(10),
    backgroundColor: COLORS.White,
    borderRadius: normalize(12),
    elevation: 10,
    shadowColor: COLORS.Primary,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0.9,
    paddingHorizontal: normalize(20),
    fontWeight: '400',
    fontSize: normalize(12),
    color: COLORS.Black,
  },
  txt: {
    fontWeight: '400',
    fontSize: normalize(40),
    color: COLORS.Primary,
    marginBottom: normalize(40),
    fontFamily: 'cursive',
  },
  login: {
    fontWeight: '400',
    fontSize: normalize(14),
    color: COLORS.White,
  },
  btn: {
    borderRadius: normalize(10),
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(35),
    backgroundColor: COLORS.Primary,
    marginTop: normalize(30),
  },
});
