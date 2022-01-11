import React from "react";
import "./App.css";
import Input from "../Input/Input";
import Todos from "../Todos/Todos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: localStorage.getItem("todos-json") ? JSON.parse(localStorage.getItem("todos-json")) : [],
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
