import React, { Component } from "react";
// import paintings from "./paintings.json";
// import PaintingList from "./components/Painting/PaintingList";
// import Section from "./components/Section";
import "modern-normalize/modern-normalize.css";
// import ColorPicker from "./components/ColorPicker";
// import Alert from "./components/Alert";
import Container from "./components/Container";
// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown/Dropdown";
import TodoList from "./components/TodoList/TodoList";
import initialTodos from "./todos.json";
import Form from "./components/Form";
// import Painting from "./components/Painting";
//  <Painting
//    url={painting.url}
//    title={painting.title}
//    authorName={painting.author.tag}
//    price={painting.price}
//    profileUrl={painting.author.url}
//  />;
// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// function App() {
//   return (
//     <div>
//       {/* <Dropdown /> */}
//       {/* <Counter initialValue={10} /> */}
//       <Container>
//         <TodoList />
//         {/* <Alert text="Шеф, всё пропало!" />
//         <Alert text="Шеф, всё пропало!" type="success" />
//         <Alert text="Шеф, всё пропало!" type="warning" />
//         <Alert text="Шеф, всё пропало!" type="error" /> */}
//         {/* <ColorPicker options={colorPickerOptions} /> */}
//         {/* <Section title="Топ недели">
//           <PaintingList items={paintings} />
//         </Section> */}
//       </Container>
//     </div>
//   );
// }
class App extends Component {
  state = {
    todos: initialTodos,
  };
  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };
  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    // const { todos } = this.state;
    // const completedTodos = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0
    // );
    // console.log(todos);
    return (
      <div>
        {/* <Dropdown /> */}
        {/* <Counter initialValue={10} /> */}
        <Container>
          <Form onSubmit={this.formSubmitHandler} />
          {/* <h1>Состояние компонента</h1>
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
          {/* <Alert text="Шеф, всё пропало!" />
        <Alert text="Шеф, всё пропало!" type="success" />
        <Alert text="Шеф, всё пропало!" type="warning" />
        <Alert text="Шеф, всё пропало!" type="error" /> */}
          {/* <ColorPicker options={colorPickerOptions} /> */}
          {/* <Section title="Топ недели">
          <PaintingList items={paintings} />
        </Section> */}
          {/* <div>
            <span>Общее количество:{todos.length}</span>
            <span>Количестов выполненных:{completedTodos}</span>
          </div> */}
        </Container>
      </div>
    );
  }
}
export default App;
