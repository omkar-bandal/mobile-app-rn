import { RootStack } from './src/navigations/stack.navigation';
// import { StyleSheet} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <RootStack />
    </SafeAreaProvider>
  );
}
// const styles = StyleSheet.create({
//   homecontainer: {
//   // height: '100vh',
//   // flex: 1,
//   // alignItems: 'center',
//   // justifyContent: 'center',
//   // backgroundColor: '#0f0f0f',
//   },
// });