import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from '../features/counter/counterSlice';

const ButtonRedux = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <TouchableOpacity
        style={styles.buttonIncrement}
        onPress={() => dispatch(increment())}>
        <Text style={styles.textIncrement}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonDecrement}
        onPress={() => dispatch(decrement())}>
        <Text style={styles.textDecrement}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonincrementByAmount}
        onPress={() => dispatch(incrementByAmount(10))}>
        <Text style={styles.textDecrement}>add 10</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttondecrementByAmount}
        onPress={() => dispatch(decrementByAmount(10))}>
        <Text style={styles.textDecrement}>subtract10</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonReset}
        onPress={() => dispatch(reset())}>
        <Text style={styles.textDecrement}>reset</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonIncrement: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonDecrement: {
    backgroundColor: '#29938d',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonincrementByAmount: {
    backgroundColor: '#5f32b8',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttondecrementByAmount: {
    backgroundColor: '#c0167f',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonReset: {
    backgroundColor: '#9b2f2f',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },

  textDecrement: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textIncrement: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ButtonRedux;
