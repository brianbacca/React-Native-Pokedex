import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSilce = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: {value: number}) => {
      state.value++;
    },
    decrement: (state: {value: number}) => {
      state.value--;
    },
    incrementByAmount: (
      state: {value: number},
      action: PayloadAction<number>,
    ) => {
      state.value += action.payload;
    },
    decrementByAmount: (
      state: {value: number},
      action: PayloadAction<number>,
    ) => {
      state.value -= action.payload;
    },
    reset: (state: {value: number}) => {
      state.value = 0;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSilce.actions;

export default counterSilce.reducer;
