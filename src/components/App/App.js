import React from "react";
import "./App.css";
import Input from "../Input/Input";
import Todos from "../Todos/Todos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      todos: localStorage.getItem("todos-json") ? JSON.parse(localStorage.getItem("todos-json")) : [],
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const inputValue = ev.target.firstElementChild.value;
    const newTodos = [...this.state.todos, {id: this.state.todos.length + 1, value: inputValue}];
    console.log(newTodos);
    localStorage.setItem("todos-json", JSON.stringify(newTodos));
    this.setState({
      todos: newTodos,
    });
    ev.target.firstElementChild.value = "";
  }

  render() {
    return (
      <section>
        <Input handleSubmit={this.handleSubmit}/>
        <Todos todos={this.state.todos}/>
      </section>
    );
  }
}

export default App;
