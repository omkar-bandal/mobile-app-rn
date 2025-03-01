import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationParamList } from '../../type';

export type AppNavigationProp = NavigationProp<StackNavigationParamList>;

export const useAppNavigation = () => useNavigation<AppNavigationProp>();
