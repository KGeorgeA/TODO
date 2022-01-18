import React from "react";
import { Heading } from "./Header.styled";

class Header extends React.Component {
    render() {
        return (
            <Heading>
                <h1>todos</h1>
            </Heading>
        );
    };
}

export default Header; // add connect redux