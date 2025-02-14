import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import data from '../data/images.json';
import ImageCard from '../components/ImageCard';
const SearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Search</Text> */}
      <View style={styles.headerCon}>
        <Text style={styles.header}>Search</Text>
        <View style={styles.crossCon}>
          <Text style={styles.subHeader}>Search</Text>

          <TouchableOpacity style={styles.crossIcon}>
            <Entypo name={'cross'} size={25} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputCon}>
          <Octicons name={'search'} color={'white'} size={25} />
          <TextInput
            style={styles.textInput}
            placeholder="Search here..."
            placeholderTextColor={'white'}></TextInput>
        </View>

        {/* render data */}
        
      </View>
      <FlatList
          data={data}
          renderItem={({item, index}) => (
            <ImageCard item={item} index={index} />
          )}
          contentContainerStyle={{
            paddingBottom: 300,
          }}
          numColumns={2}
        />
    </View>
  );
};

export default SearchScreen;

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
  crossIcon: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    // margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputCon: {
    marginTop: 10,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    color: 'white',
    marginLeft: 10,
  },
});
