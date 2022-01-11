import React from "react";

class Todos extends React.Component {

    
  
  render() {
    return this.props.todos.map((item, index) => {
      let value = item.value;
      let id = item.id;
      return (
        <li key={index}>{`${value} ${id}`}</li>
      );
    });
  }
}

export default Todos;