import React from "react";
import { connect } from "react-redux";
import { DECREASE, INCREASE, RESET } from "./redux/actions";

function Counter({ count, increase, decrease, reset }) {
  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button type="button" className="btn" onClick={increase}>
          Increase
        </button>
        <button type="button" className="btn" onClick={reset}>
          Reset
        </button>
        <button type="button" className="btn" onClick={decrease}>
          Decrease
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { count: state.count };
}
function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch({ type: INCREASE }),
    decrease: () => dispatch({ type: DECREASE }),
    reset: () => dispatch({ type: RESET }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
