import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ImageCard = ({item}) => {
  // console.log(item)
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate('Show_Image', {item});
  };
  const handleLikeWallpaper = async () => {
    let likedWallpapers = await AsyncStorage.getItem('images');
    likedWallpapers = likedWallpapers ? JSON.parse(likedWallpapers) : [];

    let isExist = likedWallpapers.findIndex(image => image.id === item.id);
    if (isExist < 0) {
      likedWallpapers = [item, ...likedWallpapers];
      await AsyncStorage.setItem('images', JSON.stringify(likedWallpapers));
      Alert.alert(
        'Added to Favorites',
        'Your wallpaper hasbeen successfully added to your Favorites.',
        [
          {
            text: 'Dismiss',
            style: 'cancel',
          },
          {
            text: 'view Favorites',
            onPress: () => {
              navigation.navigate(`like_stack`);
            },
          },
        ],
      );
    }
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
        <TouchableOpacity onPress={handleLikeWallpaper}>
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
