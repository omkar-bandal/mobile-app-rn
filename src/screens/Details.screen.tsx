import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAppNavigation } from '../hooks';

export const DetailsScreen = () => {
  const navigate = useAppNavigation();
  return (
    <View style={styles.detailscontainer}>
      <Text style={styles.pageTitle}>Details Screen</Text>
      <Pressable
        hitSlop={20}
        pressRetentionOffset={20}
        style={({ pressed }) => (pressed ? styles.highlight : styles.pressable)}
        onPress={() => navigate.navigate('Home')}>
        <Text style={styles.navBtnText}>Go to Home</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  detailscontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CCC',
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pressable: {
    width: 150,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26A69A',
    borderRadius: 5,
  },
  highlight: {
    width: 130,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80CBC4',
    borderWidth: StyleSheet.hairlineWidth,
  },
  navBtnText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFF',
  },
});
