import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../data/images.json';
import ImageCard from '../components/ImageCard';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LikedComponent = () => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  const [wallpapers, setWallpapers] = useState([]);
  const getWallpapersFromAsyncStorage = async () => {
    let images = await AsyncStorage.getItem('images');
    images = images ? JSON.parse(images) : [];
    setWallpapers(images);
  };
  useEffect(() => {
    getWallpapersFromAsyncStorage();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerCon}>
        <TouchableOpacity onPress={handleBack} style={styles.backIcon}>
          <Ionicons name={'chevron-back'} color={'black'} size={30} />
        </TouchableOpacity>
        <View style={styles.crossCon}>
          <Text style={styles.subHeader}>Search</Text>
          <Text style={styles.header}>Favoraite</Text>
        </View>
      </View>

      <FlatList
        data={wallpapers}
        renderItem={({item, index}) => <ImageCard item={item} index={index} />}
        contentContainerStyle={{
          paddingBottom: 300,
        }}
        numColumns={2}
      />
    </View>
  );
};

const LikeScreen = () => {
  const isFocused = useIsFocused();
  return isFocused ? <LikedComponent /> : null;
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerCon: {
    marginHorizontal: 10,
  },
  header: {
    color: 'white',
    marginVertical: 10,
    fontSize: 25,
    fontWeight: 600,
  },
  subHeader: {
    color: 'white',
    fontSize: 15,
  },
  crossCon: {
    // display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  backIcon: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    // margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
