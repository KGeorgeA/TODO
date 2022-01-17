import React from "react";
import TextInput from "../TextInput/TextInput";

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>todos</h1>
                <TextInput />
            </header>
        );
    };
}

export default Header; // add connect redux