import React from "react";
import { FooterStyle } from "../styles/Components.styled";


class Footer extends React.Component {
    render() {
        return <FooterStyle
            className="footer"
            >
            <span className="footer__amount">{this.props.todoAmount === 1 ? `${this.props.todoAmount} item in ${this.props.filterValue}` : `${this.props.todoAmount} items in ${this.props.filterValue}`}</span>
            <ul className="footer__list filters">
                <li className="filters__item">
                    <button className={`filters__button ${this.props.filterValue === "All" ? "filters__button_selected" : ""}`} onClick={this.props.changeFilter}>All</button>
                </li>
                <li className="filters__item">
                    <button className={`filters__button ${this.props.filterValue === "Active" ? "filters__button_selected" : ""}`} onClick={this.props.changeFilter}>Active</button>
                </li>
                <li className="filters__item">
                    <button className={`filters__button ${this.props.filterValue === "Completed" ? "filters__button_selected" : ""}`} onClick={this.props.changeFilter}>Completed</button>
                </li>
            </ul>
            <button className="footer__button" onClick={this.props.handleDeleteAllCompleted}>Clear all completed</button>
        </FooterStyle>
    }
}

export default Footer;