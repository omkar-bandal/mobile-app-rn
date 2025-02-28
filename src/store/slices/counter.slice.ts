import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type CounterStateType = {
  count: number;
};

const initialState: CounterStateType = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { setCount } = counterSlice.actions;
export const counterActions = counterSlice.actions;

export const countState = (state: RootState) => state.count;

export const counterReducer = counterSlice.reducer;
