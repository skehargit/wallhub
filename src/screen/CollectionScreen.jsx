import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CollectionCard from '../components/CollectionCard';
import data from '../data/category.json';
const CollectionScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Collections</Text>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <CollectionCard item={item} index={index} />
        )}
        contentContainerStyle={
          {
            paddingBottom:300
          }
        }
      />
    </View>
  );
};

export default CollectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  heading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 700,
  },
});
