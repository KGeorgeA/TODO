import React from "react";
import Item from "../Item/Item";
import { TodoList } from "../styles/Components.styled";

class Todos extends React.Component {

  render() {
    return (
      <TodoList className="todos-list">
        <Item 
          todos={this.props.todos} 
          handleDelete={this.props.handleDelete} 
          handleComplete={this.props.handleComplete}

        />
      </TodoList>
    )
  }
}
export default Todos;