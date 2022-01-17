import React from "react";
import { Heading } from "./Header.styled";
import TextInput from "../TextInput/TextInput";

class Header extends React.Component {
    render() {
        return (
            <Heading>
                <h1>todos</h1>
                <TextInput />
            </Heading>
        );
    };
}

export default Header; // add connect redux