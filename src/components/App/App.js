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

    this.state = {
      todos: localStorage.getItem("todos-json") ? JSON.parse(localStorage.getItem("todos-json")) : [],
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const inputValue = ev.target.firstElementChild.value;
    const newTodos = [...this.state.todos, {id: Math.random() * 1200, value: inputValue, isCompleted: false}]; // MATH.random() может быть плохим примером?
    
    localStorage.setItem("todos-json", JSON.stringify(newTodos));
    this.setState({
      todos: newTodos,
    });
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
    console.log("newTodos findIndex", newTodos, itemIndex);
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

  getTodoAmount() {
    const todos = this.state.todos;
    const allTodoAmount = todos.length;
    const completedTodoAmount = todos.reduce((count, item) => {
      return item.isCompleted ? count += 1 : count;
    }, 0);
    const activeTodoAmount = allTodoAmount - completedTodoAmount;

    const completedTodoArr = [];
    const activeTodoArr = [];
    
    todos.map((item, index) => {
      if (item.isCompleted === true) completedTodoArr.push(item.id);
      if (item.isCompleted === false) activeTodoArr.push(item.id);
    });
    
    return {
      allTodoAmount, 
      completed: {
        completedTodoArr,
        completedTodoAmount,
      }, 
      active: {
        activeTodoArr,
        activeTodoAmount,
      },
    }
  }

  render() {
    let todoFilterResult = this.getTodoAmount();
    console.log(todoFilterResult);
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
            todos={this.state.todos} 
            handleDelete={this.handleDelete} 
            handleComplete={this.handleComplete} 

          />
          <Footer todos={this.state.todos} todoFilterResult={todoFilterResult}/>
        </Main>
      </Container>
    );
  }
}

export default App;
