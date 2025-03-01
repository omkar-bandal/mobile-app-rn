import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home.screen';
import { DetailsScreen } from '../screens/Details.screen';
import { StackNavigationParamList } from '../type';

const Stack = createNativeStackNavigator<StackNavigationParamList>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
