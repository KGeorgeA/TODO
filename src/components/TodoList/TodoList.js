import React from "react";
import { connect } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    filterChanger = () => {
        let {filter, items} = this.props;
        
        switch (filter) {
            case "All":
                return items;
            case "Active":
                return items.filter(item => !item.isCompleted);
            case "Completed":
                return items.filter(item => item.isCompleted);
        }
    }

    render() {
        let { allCompleted, filter, items } = this.props;
        localStorage.setItem("todos-json", JSON.stringify([{allCompleted, filter, items}]))
        let list = this.filterChanger();
        return list.map(item =>{
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
        filter: state.todoReducers.filter,
        items: state.todoReducers.items,
    }
}

export default connect(mapStateToProps)(TodoList);