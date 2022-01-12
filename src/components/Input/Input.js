import React from "react";

class Input extends React.Component {

    render() {
        return(
            <form onSubmit={this.props.handleSubmit}>
                <input id="input"/>
            </form>
        );
    }
}

export default Input;