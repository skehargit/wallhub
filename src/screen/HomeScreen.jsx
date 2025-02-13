import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Header from '../components/Header';
import ImageCard from '../components/ImageCard';
import imageData from '../data/images.json'
// console.log(imageData);
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={imageData} renderItem={({item,index})=><ImageCard item={item} index={index}/>} numColumns={2}/>
      {/* <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <ImageCard/>
        <ImageCard/>
      </View> */}
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
