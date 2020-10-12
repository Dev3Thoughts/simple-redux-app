import React from "react";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Counter from "./Counter";

// reducers
import countReducer from "./redux/reducers/countReducer";
import productReducer from "./redux/reducers/productReducer";
import modalReducer from "./redux/reducers/modalReducer";

// get components
import Modal from "./Modal"

// setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    productState: productReducer,
    modalState: modalReducer,
  }),
  composeWithDevTools()
);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Modal />
    </Provider>
  );
};

export default App;
