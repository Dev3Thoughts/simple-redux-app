import { DECREASE, INCREASE, RESET } from "../actions/actions";

const defaultState = {
  count: 0,
};

//  reducer to updatae out store we need to arguments old and new state
function reducer(state = defaultState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export default reducer;
