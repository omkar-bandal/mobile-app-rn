import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home.screen';
import { DetailsScreen } from '../screens/Details.screen';
import { NavigationContainer } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;
export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
