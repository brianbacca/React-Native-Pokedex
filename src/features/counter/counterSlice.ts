import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
};

const counterSilce = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: {value: number}) => {
      if (state.value > 897) {
        state.value = 898;
        return;
      }
      state.value++;
    },
    decrement: (state: {value: number}) => {
      if (state.value < 2) {
        state.value = 1;
        return;
      }
      state.value--;
    },
    incrementByAmount: (
      state: {value: numer},
      action: PayloadAction<nmber>,
    ) => {
      if (state.value + action.payload > 897) {
        state.value = 898;
      } else {
        state.value += action.payload;
      }
    },
    decrementByAmount: (
      state: {value: numer},
      action: PayloadAction<nmber>,
    ) => {
      if (state.value - action.payload < 2) {
        state.value = 1;
        return;
      }
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
