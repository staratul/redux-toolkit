const { createSlice } = require("@reduxjs/toolkit");

export const counterSlice = createSlice({
  initialState: 0,
  name: "counter",
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
