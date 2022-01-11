import React from "react";

class Input extends React.Component {

    handlerSubmit(ev) {
        const el = document.getElementById("input");
        let newTodosList = this.props.todos;
        let sus = newTodosList.concat([{id: newTodosList.length + 1, value: el.value, }]);
        console.log(sus);
        ev.preventDefault();
        localStorage.setItem("todos-json", JSON.stringify(sus));
    }

    render() {
        return(
            <form onSubmit={this.handlerSubmit.bind(this)}>
                <input id="input"/>
            </form>
        );
    }
}

export default Input;