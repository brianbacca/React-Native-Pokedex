import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/app/store';
import Counter from './src/components/Counter';
import ButtonRedux from './src/components/ButtonRedux';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text />
        <Counter />
        <ButtonRedux />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
