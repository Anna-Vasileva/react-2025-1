// import s from "./ColorPicker.module.css";
import "./ColorPicker.css";
import React, { Component } from "react";

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };
  setActiveIdx = (index) => {
    this.setState({ activeOptionIdx: index });
  };
  makeOptionClassName = (index) => {
    const optionClasses = ["option"];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push("option--active");
    }
    return optionClasses.join(" ");
  };
  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    return (
      <div className="container">
        <h2 className="title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => {
            const optionClassName = this.makeOptionClassName(index);
            return (
              <button
                key={label}
                className={optionClassName}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

// function ColorPicker({ options }) {
//   return (
//     <div className={s.container}>
//       <h2 className={s.title}>Color Picker</h2>
//       <div>
//         {options.map((option) => (
//           <span
//             key={option.label}
//             className={s.option}
//             style={{ backgroundColor: option.color }}
//           >
//             {option.label}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }
export default ColorPicker;
