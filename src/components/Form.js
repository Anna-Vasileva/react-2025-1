import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    tag: "",
  };
  handleChange = (e) => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", tag: " " });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Прозвище:
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Отправить</button>
      </form>
    );
  }
}

export default Form;
