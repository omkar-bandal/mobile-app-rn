import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { sliceNames } from '../../constants';

type CounterStateType = {
  count: number;
};

const initialState: CounterStateType = {
  count: 0,
};

const counterSlice = createSlice({
  name: sliceNames.COUNT,
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
