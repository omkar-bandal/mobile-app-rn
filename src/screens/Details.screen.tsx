import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { DetailsScreenNavigationProp } from '../navigations/stack.navigation';

export const DetailsScreen = () => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  return (
    <View style={styles.detailscontainer}>
      <Text>Details Screen</Text>
      <Button onPress={() => navigation.navigate('Home')}>
        Go to Details
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  detailscontainer: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
