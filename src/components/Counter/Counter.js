import React from "react";
import s from "./Counter.module.css";
import Controls from "./Controls";
import Value from "./Value";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div className={s.Counter}>
        <Value value={this.state.value} />
        {/* <span className={s.Counter__value}>{this.state.value}</span> */}
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
        {/* <div className={s.Counter__controls}>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1{" "}
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1{" "}
          </button>
        </div> */}
      </div>
    );
  }
}

// const Counter = () => (
//   <div className="Counter">
//     <span className="Counter__value">0</span>

//     <div className="Counter__controls">
//       <button type="button">Увеличить на 1 </button>
//       <button type="button">Уменьшить на 1 </button>
//     </div>
//   </div>
// );
export default Counter;
