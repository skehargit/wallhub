import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import ShowImage from '../screen/ShowImage';
import CollectionScreen from '../screen/CollectionScreen';
import CollectionDetails from '../screen/CollectionDetails';
import SearchScreen from '../screen/SearchScreen';
import LikeScreen from '../screen/LikeScreen';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Show_Image" component={ShowImage} />
    </Stack.Navigator>
  );
}


export function CollectionStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Collection" component={CollectionScreen} />
      <Stack.Screen name="Collection_details" component={CollectionDetails} />
      <Stack.Screen name="Show_Image" component={ShowImage} />
    </Stack.Navigator>
  )
}

export function SearchStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Show_Image" component={ShowImage} />
    </Stack.Navigator>
  )
}

export function LikeStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Like" component={LikeScreen} />
      <Stack.Screen name="Show_Image" component={ShowImage} />
    </Stack.Navigator>
  )
}