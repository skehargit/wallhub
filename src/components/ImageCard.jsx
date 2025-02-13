import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
const ImageCard = ({item}) => {
  // console.log(item)
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('Show_Image',{item});
  };
  return (
    <TouchableOpacity
      onPress={() => {
        handleNavigate(item);
      }}
      style={styles.container}>
      <Image
        source={{
          uri: item.image_url,
        }}
        style={styles.coverImg}
      />
      <View style={styles.iconFun}>
        <TouchableOpacity>
          <Octicons name={'heart-fill'} size={30} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons name={'download'} size={30} color={'white'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '50%',
    backgroundColor: 'red',
    marginRight: 5,
    borderWidth: 1,
    // borderBlockColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5,
  },
  coverImg: {
    flex: 1,
  },
  iconFun: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    // borderWidth:1,
    alignItems: 'center',
    gap: 10,
  },
});
