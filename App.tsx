import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/app/store';
import PokemonList from './src/components/PokemonList';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <View>
        <PokemonList />
      </View>
    </Provider>
  );
};

export default App;
