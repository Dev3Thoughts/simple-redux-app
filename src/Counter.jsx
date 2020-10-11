import React from "react";
import { connect } from "react-redux";
import { DECREASE, INCREASE, RESET } from "./redux/actions";

function Counter(props) {
  return (
    <div className="container">
      <h1>Counter</h1>
      <p className="counter">{props.count}</p>
      <div className="buttons">
        <button
          type="button"
          className="btn"
          onClick={() => props.dispatch({ type: INCREASE })}
        >
          Increase
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => props.dispatch({ type: RESET })}
        >
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => props.dispatch({ type: DECREASE })}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(Counter);
