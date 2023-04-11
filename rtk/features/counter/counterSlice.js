const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter++;
    },
    decrement: (state, action) => {
      state.counter--;
    },
  },
});

modules.exports = counterSlice.reducer;
modules.exports.counterActions = counterSlice.actions;
