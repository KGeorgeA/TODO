import React from "react";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { allCompleted, items } = this.props;

        localStorage.setItem("todos-json", JSON.stringify([{allCompleted, items}]))
        
        return items.map(item =>{
            return (
                <TodoItem 
                    key={item.id}
                    id={item.id} 
                    value={item.value} 
                    isCompleted={item.isCompleted}

                />
            );
        });
    };
}

const mapStateToProps = (state) => {
    return {
        allCompleted: state.todoReducers.allCompleted,
        items: state.todoReducers.items,
    }
}

export default connect(mapStateToProps)(TodoList);