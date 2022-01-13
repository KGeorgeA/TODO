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

    // this.setAllCompleted = this.setAllCompleted.bind(this);

    // this.handleGetCompleted = this.handleGetCompleted.bind(this);
    // this.handleGetActive = this.handleGetActive.bind(this);
    // this.handleGetAll = this.handleGetAll.bind(this);
    this.handleDeleteAllCompleted = this.handleDeleteAllCompleted.bind(this);

    const localTodos = localStorage.getItem("todos-json") ? JSON.parse(localStorage.getItem("todos-json")) : [];

    this.state = {
      todos: localTodos,
      filtered: localTodos,
      filter: "All",
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevState", prevState);
    console.log("this.state", this.state);
    if (prevState.filter !== this.state.filter) {
      this.handleFilter(this.state.filter);
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
      completedTodos: newTodos.map(item => item.isCompleted === true ? item : null).filter(item => item != null),
      activeTodos: newTodos.map(item => item.isCompleted === true ? null : item).filter(item => item != null),
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

  handleFilter = (filter) => {
    switch (filter) {
      case "All":
        this.setState({
          filtered: this.state.todos,
          // filter: "All",
        })
        break;
      case "Active":
        const active = this.state.todos.map(item => item.isCompleted !== true ? item : null).filter(item => item != null);
        this.setState({
          filtered: active,
          // filter: "Active",
        })
        break;
      case "Completed":
        const completed = this.state.todos.map(item => item.isCompleted === true ? item : null).filter(item => item != null);
        this.setState({
          filtered: completed,
          // filter: "Completed",
        });
        break;

      default:
        break;
    }
  }

  changeFilter = (ev) => {
    const filter = ev.target.innerText;
    console.log(filter);
    this.setState({
      filter: filter,
    })
  }

  // handleGetCompleted() {
  //   const completedTodos = this.state.todos.map(item => item.isCompleted ? item : null)
  //                                          .filter(item => item != null);
  //   this.setState({
  //     completedTodos: completedTodos,
  //     activeTodos: [],
  //   });
  // }

  // handleGetActive() {
  //   const activeTodos = this.state.todos.map(item => item.isCompleted ? null : item)
  //                                       .filter(item => item !== null);
  //   // console.log("activeTodos",activeTodos);

  //   this.setState({
  //     completedTodos: [],
  //     activeTodos: activeTodos,
  //   });
  // }

  // handleGetAll() {
  //   this.setState({
  //   });
  // }

  handleDeleteAllCompleted() {
    const todos = this.state.todos.filter(item => {
      if (item.isCompleted !== true) return item;
    });
    // console.log(todos);
    this.setState({
      filtered: todos,
    });
    localStorage.setItem("todos-json", JSON.stringify(todos));
  }

  // setAllCompleted() {
  //   const todos = this.state.todos.map(item => item.isCompleted = true);
  //   this.setState({
  //     todos: todos,
  //   });
  //   localStorage.setItem("todos-json", JSON.stringify(todos));
  // }

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
            // todos={filtered}
            todos={this.state.filtered}
            handleDelete={this.handleDelete}
            handleComplete={this.handleComplete}

          />
        </Main>
        <Footer
          todoAmount={this.state.todos.length}

          changeFilter={this.changeFilter}

          // handleGetCompleted={this.handleGetCompleted}
          // handleGetActive={this.handleGetActive}
          // handleGetAll={this.handleGetAll}
          handleDeleteAllCompleted={this.handleDeleteAllCompleted}
          whichFilterSet={this.state.whichFilterSet}
        />
      </Container>
    );
  }
}

export default App;
