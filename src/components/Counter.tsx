import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppSelector} from '../app/hooks';

const Counter = () => {
  const counter = useAppSelector(state => state.counter.value);
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter</Text>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  counterText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 62,
    color: 'green',
    fontWeight: 'bold',
  },
});

export default Counter;
