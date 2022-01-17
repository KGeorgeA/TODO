import React from "react";
import { connect } from "react-redux";
import * as todoActions from "../../store/todoReducer/todoActions";
import { Input } from "../styles/Components.styled";

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };
    }

    handleInputChange = (ev) => {
        this.setState({
            value: ev.target.value,
        })
    }

    handleCompletedAllChange = () => {
        this.props.toggleAllCompleted();
    }

    handleSubmit = (ev) => {
        if (!this.state.value) return;
        if (ev.keyCode === 13) {
            let { value } = this.state;
            this.props.addTodo(value);
            this.setState({
                value: ""
            });
            ev.target.value = "";
        }
    }

    render() {
        return (
            <>
                <input // styles
                    type="checkbox" 
                    onChange={this.handleCompletedAllChange}
                    checked={this.props.allCompleted}
                />

                <Input
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleSubmit}
                    placeholder="What needs to be done?"
                />
            </>
        );
    };
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

export default connect(mapStateToProps, mapDispatchToProps)(TextInput);