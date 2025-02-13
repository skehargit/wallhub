import {ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
const ShowImage = () => {
  const route =useRoute();
  const item =route.params.item;
  const navigation = useNavigation()
  const handleBack=()=>{
    navigation.goBack();
  }
  return (
    <>
      <StatusBar hidden />
      <ImageBackground source={{uri:item.image_url}} style={styles.container}>
        {/* <Text>ShowImage</Text> */}
        <TouchableOpacity onPress={handleBack} style={styles.backIcon}>
          <Ionicons name={"chevron-back"} color={'black'} size={30}/>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};

export default ShowImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backIcon:{
    height:40,
    width:40,
    backgroundColor:'white',
    borderRadius:10,
    margin:10,
    justifyContent:'center',
    alignItems:'center'
  }
});
