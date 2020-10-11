import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import Counter from "./Counter";

// setup initial state
const defaultState = {
  count: 0,
  name: "Bobby",
};

// setup store
const store = createStore(reducer, defaultState);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
