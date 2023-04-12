const { configureStore } = require("@reduxjs/toolkit");
const counterReducer = require("../features/counter/counterSlice")
const dynamicReducer = require("../features/dynamicCounter/dynamicCounterSlice")

const store = configureStore({
    reducer: {
        counter: counterReducer,
        dynamicCouner: dynamicReducer
    }
})

module.exports = store;
