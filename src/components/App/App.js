import React from "react";
import { Container, Heading, Main } from "../styles/Components.styled";
import Input from "../Input/Input";
import Todos from "../Todos/Todos";
import Footer from "../Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleComplete = this.handleComplete.bind(this);

    this.setAllCompleted = this.setAllCompleted.bind(this);
    
    this.handleGetCompleted = this.handleGetCompleted.bind(this);
    this.handleGetActive = this.handleGetActive.bind(this);
    this.handleGetAll = this.handleGetAll.bind(this);
    this.handleDeleteAllCompleted = this.handleDeleteAllCompleted.bind(this);

    this.state = {
      todos: localStorage.getItem("todos-json") ? JSON.parse(localStorage.getItem("todos-json")) : [],
      activeTodos: [],
      completedTodos: [],
      whichSet: 1,
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const inputValue = ev.target.firstElementChild.value;
    if (inputValue) {
      const newTodos = [...this.state.todos, {id: Math.random() * 1200, value: inputValue, isCompleted: false}]; // MATH.random() может быть плохим примером?
      
      localStorage.setItem("todos-json", JSON.stringify(newTodos));
      this.setState({
        todos: newTodos,
      });
    }
    ev.target.firstElementChild.value = "";
  }

  handleDelete(ev) {
    const liParentId = parseInt(ev.target.closest(".todo").dataset.id);
    const itemIndex = this.state.todos.findIndex(item => parseInt(item.id) === parseInt(liParentId));
    const newTodos = this.state.todos.slice();
    newTodos.splice(itemIndex, 1);
    
    localStorage.setItem("todos-json", JSON.stringify(newTodos));
    this.setState({
      todos: newTodos,
    });
  }

  handleComplete(ev) {
    const liParentId = parseInt(ev.target.closest(".todo").dataset.id);
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

  handleGetCompleted() {
    const completedTodos = this.state.todos.map(item => item.isCompleted ? item : null);
    this.setState({
      completedTodos: completedTodos.filter(item => item != null),
      activeTodos: [],
      whichSet: -1,
    });
  }

  handleGetActive() {
    const activeTodos = this.state.todos.map(item => item.isCompleted ? null : item);
    this.setState({
      completedTodos: [],
      activeTodos: activeTodos.filter(item => item != null),
      whichSet: 0
    });
  }

  handleGetAll() {
    this.setState({
      whichSet: 1,
    });
  }

  handleDeleteAllCompleted() {
    const todos = this.state.todos.filter(item => {
      if (item.isCompleted !== true) return item;
    });
    this.setState({
      todos: todos,
    });
    localStorage.setItem("todos-json", JSON.stringify(todos));
  }

  setAllCompleted() {
    const todos = this.state.todos.map(item => item.isCompleted = true);
    this.setState({
      todos: todos,
    });
    localStorage.setItem("todos-json", JSON.stringify(todos));
  }

  render() {
    const todoAmount = this.state.todos.length;

    return (
      <Container 
        className="wrapper" 
        id="wrapper"
      >
        <Heading>
          <h1>todos</h1>
        </Heading>
        <Main
          className="todos"
          id="todos"
        >
          <Input 
            handleSubmit={this.handleSubmit}

          />
          <Todos 
            todos={
              this.state.whichSet === 1 ? 
              this.state.todos : 
              this.state.whichSet === 0 ? 
              this.state.activeTodos :
              this.state.completedTodos
              } 
            handleDelete={this.handleDelete} 
            handleComplete={this.handleComplete} 

          />
        </Main>
        <Footer 
          todoAmount={todoAmount} 
          handleGetCompleted={this.handleGetCompleted} 
          handleGetActive={this.handleGetActive}
          handleGetAll={this.handleGetAll}
          handleDeleteAllCompleted={this.handleDeleteAllCompleted}
        />
      </Container>
    );
  }
}

export default App;
