import React from "react";

class Input extends React.Component {

    render() {
        return(
            <form 
                onSubmit={this.props.handleSubmit} 
                className="todos__form"
            >
                <input 
                    id="input" 
                    className="todos__input-text"
                        
                />
            </form>
        );
    }
}

export default Input;