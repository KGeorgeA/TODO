import React from "react";
import "./App.css";
import Input from "../Input/Input";
import Todos from "../Todos/Todos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);

    this.state = {
      todos: localStorage.getItem("todos-json") ? JSON.parse(localStorage.getItem("todos-json")) : [],
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const inputValue = ev.target.firstElementChild.value;
    const newTodos = [...this.state.todos, {id: Math.random() * 1200, value: inputValue, isCompleted: false}]; // MATH.random() может быть плохим примером?
    console.log(newTodos);
    localStorage.setItem("todos-json", JSON.stringify(newTodos));
    this.setState({
      todos: newTodos,
    });
    ev.target.firstElementChild.value = "";
  }

  handleDelete(ev) {
    const liParentId = parseInt(ev.target.closest(".todo").id);
    const itemIndex = this.state.todos.findIndex(item => parseInt(item.id) === parseInt(liParentId));
    const newTodos = this.state.todos.slice();
    newTodos.splice(itemIndex, 1);
    localStorage.setItem("todos-json", JSON.stringify(newTodos));
    this.setState({
      todos: newTodos,
    });
    console.log("newTodos findIndex", newTodos, itemIndex);
  }

  handleComplete(ev) {
    const liParentId = parseInt(ev.target.closest(".todo").id);
    const newTodos = this.state.todos.map(item => {
      if (parseInt(item.id) === parseInt(liParentId)) {
        item.isCompleted = !item.isCompleted; 
      }
      return item;
    });

    localStorage.setItem("todos-json", JSON.stringify(newTodos));
    this.setState({
      todos: newTodos,
    });
  }

  render() {
    return (
      <main className="todos" id="todos">
        <Input 
          handleSubmit={this.handleSubmit}

        />
        <Todos 
          todos={this.state.todos} 
          handleDelete={this.handleDelete} 
          handleComplete={this.handleComplete} 

        />
      </main>
    );
  }
}

export default App;
