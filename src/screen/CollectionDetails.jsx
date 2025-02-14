import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../data/images.json';
import ImageCard from '../components/ImageCard';
const CollectionDetails = () => {
  const route = useRoute();
  const item = route.params.item;
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backIcon}>
        <Ionicons name={'chevron-back'} color={'black'} size={30} />
      </TouchableOpacity>

      <View>
        <Text style={styles.header}>{item.name}</Text>
        <Text style={styles.subHeader}>{item.name}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item, index}) => <ImageCard item={item} index={index} />}
        numColumns={2}
      />
    </View>
  );
};

export default CollectionDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  backIcon: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
    // fontWeight:600
  },
});
