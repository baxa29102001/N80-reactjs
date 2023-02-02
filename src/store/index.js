import { createStore, combineReducers } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//     };
//   }

//   return state;
// };

// const loginReducer = (state = { login: false }, action) => {
//   return state;
// };

// const rootReducer = combineReducers({
//   counterObject: counterReducer,
//   login: loginReducer,
// });

const cartSlice = createSlice({
  name:'cart',
  initialState: {
    cartItems: []
  }
})

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, { payload }) {
      console.log(payload);
      state.counter += payload;
    },
  },
});
const loginSlice = createSlice({
  name: "login",
  initialState: {
    login: false,
  },

  reducers: {},
});

export const counterActions = counterSlice.actions;

export const store = configureStore({
  reducer: {
    counterObject: counterSlice.reducer,
    loginObject: loginSlice.reducer,
  },
});
