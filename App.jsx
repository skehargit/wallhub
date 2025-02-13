import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CollectionScreen from './src/screen/CollectionScreen';
import SearchScreen from './src/screen/SearchScreen';
import LikeScreen from './src/screen/LikeScreen';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            left: 20,
            right: 20,
            bottom: 20,
            borderRadius: 30,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          },
          tabBarBackground: () => (
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={{
                flex: 1,
                borderRadius: 30,
              }}
            />
          ),
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#CCCCCC',
        }}>
        <Tab.Screen
          name="home_screen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, focused}) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Octicons
                  name={'home'}
                  size={focused ? 30 : 25}
                  color={color}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="collection_screen"
          component={CollectionScreen}
          options={{
            tabBarIcon: ({color, focused}) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name={'grid'}
                  size={focused ? 30 : 25}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="search_screen"
          component={SearchScreen}
          options={{
            tabBarIcon: ({color, focused}) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Octicons
                  name={'search'}
                  size={focused ? 30 : 25}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="like_screen"
          component={LikeScreen}
          options={{
            tabBarIcon: ({color, focused}) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Octicons
                  name={'heart-fill'}
                  size={focused ? 30 : 25}
                  color={color}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
