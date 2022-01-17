import React from "react";
import { connect } from "react-redux";
// import { TodoItemDiv, TodoItemS } from "../styles/Components.styled";
import * as todoActions from "../../store/todoReducer/todoActions";


class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCompleteChange = (ev) => {
        this.props.toggleCompleted(ev.target.closest(".todo").dataset.id);
    }

    handleDelete = (ev) => {
        this.props.deleteTodo(ev.target.closest(".todo").dataset.id);
    }

    render() {
        let { id, value, isCompleted } = this.props;
        return (
            <li //TodoItemS
                key={id} 
                data-id={id}
                className={`todos-list__item todo ${isCompleted ? "completed" : ""}`}
            >
                <div //TodoItemDiv
                >
                    <input 
                        type="checkbox"
                        onChange={this.handleCompleteChange}
                        checked={isCompleted}
                        className="todo__checkbox"
                    />
                    <span className="todo__checkbox_custom"></span>
                    <label className="todo__text">
                        {value}
                    </label>
                    <button 
                        onClick={this.handleDelete} 
                        className="todo__button"

                    >x</button>
                </div>
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allCompleted: state.todoReducers.allCompleted,
        items: state.todoReducers.items,
    }
    
}

const mapDispatchToProps = {
    ...todoActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);