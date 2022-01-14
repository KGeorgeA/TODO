import React from "react";
import { Container, Heading, Main, CompleteAll } from "../styles/Components.styled";
import Input from "../Input/Input";
import Todos from "../Todos/Todos";
import Footer from "../Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    const localTodos = localStorage.getItem("todos-json") ? JSON.parse(localStorage.getItem("todos-json")) : [];

    this.state = {
      todos: localTodos,
      filtered: localTodos,
      filter: "All",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter || prevState.todos !== this.state.todos) {
      this.handleFilter(this.state.filter);
    }     
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const inputValue = ev.target.firstElementChild.value;
    if (inputValue) {
      const newTodos = [...this.state.todos, {id: Math.random() * 1200, value: inputValue, isCompleted: false}];

      this.setTodosToLocalStorage(newTodos);

      this.setState({
        todos: newTodos,
        filtered: newTodos,
        filter: "All"
      });
    }
    ev.target.firstElementChild.value = "";
  }

  handleDelete = (ev) => {
    const liParentId = parseInt(ev.target.closest(".todo").dataset.id);
    const itemIndex = this.state.todos.findIndex(item => parseInt(item.id) === parseInt(liParentId));
    const newTodos = this.state.todos.slice();
    newTodos.splice(itemIndex, 1);
    
    this.setTodosToLocalStorage(newTodos);
    this.setState({
      todos: newTodos,
      completedTodos: newTodos.filter(item => item.isCompleted === true),
      activeTodos: newTodos.filter(item => item.isCompleted === false),
    });
  }

  handleComplete = (ev) => {
    const liParentId = parseInt(ev.target.closest(".todo").dataset.id);
    const newTodos = this.state.todos.map(item => {
      if (parseInt(item.id) === parseInt(liParentId)) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });

    this.setTodosToLocalStorage(newTodos);
    this.setState({
      todos: newTodos,
    });
  }

  handleFilter = (filter) => {
    switch (filter) {
      case "All":
        this.setState({
          filtered: this.state.todos,
        });
        break;
      case "Active":
        const active = this.state.todos.filter(item => item.isCompleted !== true);
        this.setState({
          filtered: active,
        });
        break;
      case "Completed":
        const completed = this.state.todos.filter(item => item.isCompleted === true);
        this.setState({
          filtered: completed,
        });
        break;

      default:
        break;
    }
  }

  changeFilter = (ev) => {
    this.setState({
      filter: ev.target.innerText,
    })
  }

  handleDeleteAllCompleted = () => {
    const todos = this.state.todos.filter(item => item.isCompleted !== true);

    this.setState({
      todos,
      filtered: todos,
    });
    
    this.setTodosToLocalStorage(todos);
  }

  toggleAllCompleted = () => {
    let todos = [];
    if (this.state.todos.reduce((count, item) => item.isCompleted ? count += 1: count, 0) === this.state.todos.length) {
      todos = this.state.todos.map(item => {
        if (item.isCompleted !== false) {
          item.isCompleted = false;
        }
      return item;
      });
    } else {
      todos = this.state.todos.map(item => {
        if (item.isCompleted !== true) {
          item.isCompleted = true;
        }
      return item;
      });
    }
    
    this.setState({
      todos,
      filtered: todos,
    });
    this.setTodosToLocalStorage(todos);
  }

  setTodosToLocalStorage = (arr) => {
    localStorage.setItem("todos-json", JSON.stringify(arr));
  } 

   todoAmount = () => {
    let am = 0;
    switch (this.state.filter) {
      case "All":
          am = this.state.todos.length;
        break;
      case "Active":
          am = this.state.todos.reduce((count, item) => item.isCompleted === false ? count += 1 : count, 0);
        break;
      case "Completed":
          am = this.state.todos.reduce((count, item) => item.isCompleted === true ? count += 1 : count, 0);
        break;
    
      default:
        break;
    }
    return am;
  }

  render() {
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
            todos={this.state.filtered}
            handleDelete={this.handleDelete}
            handleComplete={this.handleComplete}

          />
          <CompleteAll 
            isEmpty={this.state.todos.length ? 1 : 0}

          >
            <input
              className="completeAll" 
              type="checkbox" 
              onChange={this.toggleAllCompleted}
            />
            <label/>
          </CompleteAll>
        </Main>
        {
          this.state.todos.length ?
          
          <Footer
          todoAmount={this.todoAmount()}

          changeFilter={this.changeFilter}

          handleDeleteAllCompleted={this.handleDeleteAllCompleted}
          whichFilterSet={this.state.whichFilterSet}
          filterValue={this.state.filter}
          />
          :
          <></>
        }
      </Container>
    );
  }
}

export default App;
