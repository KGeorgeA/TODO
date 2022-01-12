import React from "react";

class Item extends React.Component {

    render() {
        return this.props.todos.map((item, index) => {
            const value = item.value;
            const id = item.id;
            const isCompleted = item.isCompleted;
            return (
                <li 
                    key={index} 
                    className="todos-list__item todo" 
                    id={id}

                >
                    <div> {/* Возможно это лишнее */}
                        <input 
                            type="checkbox" 
                            onChange={this.props.handleComplete} 
                            checked={isCompleted} 
                            className="todo__checkbox" 

                        />
                        <p className="todo__text">
                            {`${value} ${id} ${isCompleted}`}
                        </p>
                        <button 
                            onClick={this.props.handleDelete} 
                            className="todo__button"

                        />
                    </div>
                </li>
            );
        });
    }

}

export default Item;