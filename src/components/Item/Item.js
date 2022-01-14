import React from "react";
import { TodoItem, TodoItemDiv } from "../styles/Components.styled";

class Item extends React.Component {

    render() {
        return this.props.todos.map((item, index) => {
            return (
                <TodoItem 
                    key={index} 
                    className={`todos-list__item todo ${item.isCompleted ? "completed" : ""}`}
                    data-id={item.id}
                    
                >
                    <TodoItemDiv
                        checked={item.isCompleted}
                    >
                        <input 
                            type="checkbox" 
                            onChange={this.props.handleComplete} 
                            checked={item.isCompleted} 
                            className="todo__checkbox" 

                        />
                        <span className="todo__checkbox_custom"></span>
                        <label className="todo__text">
                            {`${item.value}`}
                        </label>
                        <button 
                            onClick={this.props.handleDelete} 
                            className="todo__button"

                        >x</button>
                    </TodoItemDiv>
                </TodoItem>
            );
        });
    }

}

export default Item;