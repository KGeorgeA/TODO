import React from "react";
import "./App.css";
import Input from "../Input/Input";
import Todos from "../Todos/Todos";
// localStorage.setItem("todos-json", JSON.stringify([{id:0, value: "Learn React"}, {id:1, value: "Learn React bettear"}]));
class App extends React.Component {
  constructor(props) {
    super(props);
    // this.todos = JSON.parse(localStorage.getItem("todos-json"));
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos-json")),
    }
  }

  render() {
    return (
      <section>
        <Input todos={this.state.todos}/>
        <Todos todos={this.state.todos}/>
      </section>
    );
  }
}

export default App;
