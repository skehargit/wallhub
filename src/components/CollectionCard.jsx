import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const CollectionCard = ({item}) => {
  const navigation = useNavigation();
  const handleNavigate = () => {
    navigation.navigate(`Collection_details`, {item});
  };
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <Image
        source={{
          uri: item.bg_url,
        }}
        style={styles.coverImg}
      />
      <View style={styles.overlay}></View>
      <View style={styles.headingCon}>
        <Text style={styles.overlayHeading}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CollectionCard;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 20,
  },
  coverImg: {
    height: 120,
    width: '100%',
    borderRadius: 20,
    marginVertical: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  overlayHeading: {
    color: 'white',
    fontWeight: 500,
    fontSize: 25,
  },
  headingCon: {
    position: 'absolute',
    bottom: 40,
    left: 40,
  },
});
