// import { StyleSheet} from 'react-native';
import { AppNavigation } from './src/navigations';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
