import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeScreenNavigationProp } from '../navigations/stack.navigation';

export const HomeScreen = () => {
  const navigate = useNavigation<HomeScreenNavigationProp>();
  return (
    <SafeAreaView>
      <View style={styles.homecontainer}>
        <Text>Home Screen</Text>
        <Pressable onPress={() => navigate.navigate('Details')}><Text>Go to Detais</Text></Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  homecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC',
  },
});
