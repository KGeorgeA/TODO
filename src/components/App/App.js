import React from "react";
import { Container, Heading } from "../styles/Components.styled";
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

  render() {
    return (
      <Container 
        className="todos" 
        id="todos"
      >
        <Heading> {/* works not like what i wanted FIX it */}
          <h1>todos</h1>
          <Input 
            handleSubmit={this.handleSubmit}

          />
        </Heading>
        <Todos 
          todos={this.state.todos} 
          handleDelete={this.handleDelete} 
          handleComplete={this.handleComplete} 

        />
        <Footer />
      </Container>
    );
  }
}

export default App;
