import React from "react";
import { TodoItem, TodoItemDiv } from "../styles/Components.styled";

class Item extends React.Component {

    render() {
        return this.props.todos.map((item, index) => {
            const value = item.value;
            const id = item.id;
            const isCompleted = item.isCompleted;
            return (
                <TodoItem 
                    key={index} 
                    className="todos-list__item todo" 
                    data-id={id}
                    
                >
                    <TodoItemDiv>
                        <input 
                            type="checkbox" 
                            onChange={this.props.handleComplete} 
                            checked={isCompleted} 
                            className="todo__checkbox" 

                        />
                        <label className="todo__text">
                            {`${value}`}
                        </label>
                        <button 
                            onClick={this.props.handleDelete} 
                            className="todo__button"

                        />
                    </TodoItemDiv>
                </TodoItem>
            );
        });
    }

}

export default Item;