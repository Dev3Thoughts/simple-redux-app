import React from "react";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Counter from "./Counter";

// reducers
import countReducer from "./redux/reducers/countReducer";
import productReducer from "./redux/reducers/productReducer";
import modalReducer from "./redux/reducers/modalReducer";

// get components
import Modal from "./Modal";
import Products from "./Products";
const middleware = [thunk];

// setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    productState: productReducer,
    modalState: modalReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Modal />
      <Products />
    </Provider>
  );
};

export default App;
