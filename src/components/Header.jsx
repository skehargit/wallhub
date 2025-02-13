import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
const Header = () => {
  return (
    <View style={styles.container}>
      <Feather name={'menu'} color={'white'} size={25} />
      <Image source={require('../assets/sp-logo.png')} style={styles.appLogo} />
      <Feather name={'bell'} color={'white'} size={25} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal:20,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  appLogo: {
    height: 30,
    width: 30,
  },
});
