import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    value: 6,
  },
  {
    id: 2,
    value: 0,
  },
];

const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      if (counterIndex !== -1) {
        state[counterIndex].value++;
      }
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      if (counterIndex !== -1 && state[counterIndex].value > 0) {
        state[counterIndex].value--;
      }
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;
