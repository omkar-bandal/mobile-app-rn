import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './stack.navigation';

export const AppNavigation = () => {
  return(
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
};
