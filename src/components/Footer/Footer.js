import React from "react";
import { FooterStyle } from "../styles/Components.styled";


class Footer extends React.Component {
    render() {
        const propsObj = this.props.todoFilterResult; 
        const allTodoAmount = propsObj.allTodoAmount;
        const activeTodoAmount = propsObj.active.activeTodoAmount;
        const completedTodoAmount = propsObj.completed.completedTodoAmount;
        return <FooterStyle>Footer {allTodoAmount} {activeTodoAmount} {completedTodoAmount}</FooterStyle>
    }
}

export default Footer;