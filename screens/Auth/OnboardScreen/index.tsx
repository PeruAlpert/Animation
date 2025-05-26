import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/Colors';
import MonoText from '../../../components/MonoText';
import Layout from '../../../constants/Layout';

const OnboardScreen = ({navigation}: any) => {
  const handleLogin = () => {
    navigation.navigate('Root');
  };
  return (
    <ImageBackground
      source={require('../../../assets/png/bg.png')}
      style={styles.bg}>
      <View />
      <View>
        <Image source={require('../../../assets/png/Logo.png')} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <MonoText size={16}>Get Started</MonoText>
        </TouchableOpacity>
        <MonoText color={colors.white} size={17}>
          Already Have An Account
        </MonoText>
        <MonoText color={colors.secondary} size={17} style={styles.txt}>
          LOGIN
        </MonoText>
      </View>
    </ImageBackground>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    gap: 10,
    alignItems: 'center',
    bottom: 60,
  },
  btn: {
    backgroundColor: colors.white,
    width: Layout.width * 0.8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 39,
  },
  txt: {textDecorationLine: 'underline'},
});
