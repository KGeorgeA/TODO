import React from "react";
import { Form, TextInput } from "../styles/Components.styled";

class Input extends React.Component {

    render() {
        return(
            <Form 
                onSubmit={this.props.handleSubmit} 
                className="todos__form"

            >
                <TextInput 
                    id="input" 
                    className="todos__input-text"
                    placeholder="What needs to be?"

                />
            </Form>
        );
    }
}

export default Input;