import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Header from '../components/Header';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
