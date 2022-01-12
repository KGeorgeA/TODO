import React from "react";
import Item from "../Item/Item";

class Todos extends React.Component {

  render() {
    return (
      <ul className="todos-list">
        <Item 
          todos={this.props.todos} 
          handleDelete={this.props.handleDelete} 
          handleComplete={this.props.handleComplete}

        />
      </ul>
    )
  }
}
export default Todos;