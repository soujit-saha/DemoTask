import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../themes/Themes';
import normalize from '../../utils/helpers/normalize';
import * as Animatable from 'react-native-animatable';
import {useDispatch} from 'react-redux';
import {isLogedinRequest} from '../../redux/reducer/AuthReducer';

const Splash = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(async () => {
      dispatch(isLogedinRequest({}));
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.Text animation="flipInY" delay={600} style={styles.txt}>
        Demo <Animatable.Text style={styles.txtb}>App</Animatable.Text>
      </Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.White,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txt: {
    marginTop: normalize(20),
    fontSize: normalize(34),
    fontWeight: '600',
    color: COLORS.Primary,
    fontFamily: 'cursive',
  },
  txtb: {
    fontSize: normalize(34),
    color: COLORS.Black,
    fontWeight: '600',
    fontFamily: 'cursive',
  },
});
