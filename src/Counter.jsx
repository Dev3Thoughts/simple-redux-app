import React from "react";
import { connect } from "react-redux";
import { decrease, increase, reset, modalOpen } from "./redux/actions/actions";

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

function mapStateToProps({ countState }) {
  return { count: countState.count };
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(increase()),
    decrease: () => dispatch(decrease()),
    reset: () => {
      dispatch(reset());
      dispatch(
        modalOpen(
          "Mr Jones",
          "lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam similique assumenda inventore."
        )
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
